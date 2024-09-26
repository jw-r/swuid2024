'use client'

import { addMessage } from '@/app/guest-book/actions'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger } from './ui/select'
import Comment from './ui/comment'
import { MessageWithDesigner } from '@/types'

interface GuestBookProps {
  initialMessages: MessageWithDesigner[]
  designers?: { id: number; name: string }[]
  className?: HTMLElement['className']
  projectId?: number
  designerId?: number
  type: 'A' | 'B' | 'Origin'
}

// designer id 0이면 모두에게

export default function GuestBook({
  initialMessages,
  designers,
  className,
  designerId,
  projectId,
  type,
}: GuestBookProps) {
  const [messages, setMessages] = useState<MessageWithDesigner[]>(initialMessages)
  const [newMessage, setNewMessage] = useState('')
  const [senderName, setSenderName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [receiver, setReceiver] = useState<{ id: number; name: string } | null>(null)

  const [currentPage, setCurrentPage] = useState(1)
  const messagesPerPage = 8
  const totalPages = Math.ceil(messages.length / messagesPerPage)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (senderName.trim().length === 0 || newMessage.trim().length === 0 || isSubmitting) {
      return
    }
    if (projectId == null && designerId == null && receiver?.id == null) {
      return
    }

    setIsSubmitting(true)

    // 낙관적 업데이트를 위한 임시 메시지 생성
    const tempMessage: MessageWithDesigner = {
      id: Date.now(), // 임시 ID
      content: newMessage,
      createdAt: new Date(),
      sender: senderName,
      designerId: designerId || receiver?.id || null,
      projectId: projectId || null,
      designer: receiver?.id ? { id: receiver.id, name: receiver.name } : null,
    }

    // 즉시 UI 업데이트
    setMessages((prev) => [tempMessage, ...prev])
    initInfo()

    try {
      const createdMessage = await addMessage({
        senderName,
        message: newMessage,
        designerId: designerId || receiver?.id,
        projectId,
      })

      // 서버에서 반환된 실제 메시지로 교체
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === tempMessage.id
            ? {
                ...createdMessage,
                designer: createdMessage.designer || tempMessage.designer,
              }
            : msg,
        ),
      )
    } catch (e) {
      console.error(e)
      // 에러 발생 시 임시 메시지 제거
      setMessages((prev) => prev.filter((msg) => msg.id !== tempMessage.id))
      // 에러 메시지 표시 (UI에 추가 필요)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChangeSender = (value: string) => {
    if (value.length > 8) {
      return
    }

    setSenderName(value)
  }

  const initInfo = () => {
    setNewMessage('')
    setSenderName('')
    setReceiver(null)
  }

  const indexOfLastMessage = currentPage * messagesPerPage
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage
  const currentMessages = messages.slice(indexOfFirstMessage, indexOfLastMessage)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className={className}>
      <h2 className="text-headline-02 text-primary-02">Guest Book</h2>

      <form onSubmit={handleSubmit} className="mt-[20px] md:mt-[30px] lg:mt-[36px]">
        <div className="flex items-end gap-[9px]">
          <div className="flex w-full gap-[10px] max-md:flex-col md:gap-[20px] lg:gap-[73px]">
            <div className="w-full md:max-w-[273px] lg:max-w-[344px]">
              <div className="text-body-03 lg:text-web-body-02 mb-[12px] max-md:hidden">
                보내는 사람
              </div>
              <div className="relative">
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => handleChangeSender(e.target.value)}
                  className="text-body-03 lg:text-web-body-02 w-full border border-primary-02/50 bg-primary-01 py-[12px] pl-mobile pr-[52px] outline-none focus:border-primary-02 lg:p-mobile lg:pr-[58px]"
                  placeholder="보내는 사람을 입력해 주세요."
                  maxLength={8}
                />
                <div className="lg:text-web-caption-01 text-body-03 absolute bottom-1/2 right-[16px] translate-y-1/2 text-white/60">
                  {senderName.length}/8
                </div>
              </div>
            </div>
            {!projectId && !designerId && (
              <div className="w-full md:max-w-[273px] lg:max-w-[280px]">
                <div className="text-body-03 lg:text-web-body-02 mb-[12px] max-md:hidden">
                  받는 사람
                </div>
                <Select onValueChange={(value) => setReceiver(JSON.parse(value))}>
                  <SelectTrigger asChild>
                    <input
                      type="text"
                      readOnly
                      className="text-body-03 lg:text-web-body-02 w-full cursor-pointer border border-primary-02/50 bg-primary-01 px-mobile py-[12px] outline-none focus:border-primary-02 lg:p-mobile"
                      placeholder="받는 사람을 선택해 주세요."
                      value={receiver?.name}
                    />
                  </SelectTrigger>
                  <SelectContent className="mt-[8px] h-[430px] overflow-auto border border-[#FEF5AD]/50 bg-primary-01 p-0 md:mt-[11px] lg:h-[392] lg:w-[384px]">
                    <SelectItem
                      value={JSON.stringify({ id: 0, name: '모두에게' })}
                      className="text-body-02 lg:text-web-caption-01 cursor-pointer from-white/10 to-white/0 px-[10.5px] pb-[12.5px] pt-[18.5px] outline-none hover:bg-gradient-to-r lg:p-mobile lg:pb-[8px]"
                    >
                      모두에게
                    </SelectItem>
                    {designers?.map((designer) => (
                      <SelectItem
                        key={designer.id}
                        value={JSON.stringify(designer)}
                        className="text-body-02 lg:text-web-caption-01 cursor-pointer from-white/10 to-white/0 px-[10.5px] pb-[12.5px] pt-[18.5px] outline-none hover:bg-gradient-to-r lg:p-mobile lg:pb-[8px]"
                      >
                        {designer.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>
          <button
            type="submit"
            className={cn(
              'text-body-03 lg:text-web-body-03 h-[50px] text-nowrap border border-primary-02/50 bg-white/10 px-mobile text-white/60 hover:bg-[#FEF5AD]/20 hover:text-white hover:shadow-[0_0_15px_rgba(254,245,173,0.4)] md:h-[50px] lg:h-[68px] lg:px-[34.5px]',
              type === 'Origin' && 'h-[110px]',
            )}
          >
            등록
          </button>
        </div>

        <div className="relative mt-[12px] md:mt-[28px] lg:mt-[32px]">
          <div className="text-body-03 lg:text-web-body-02 mb-[12px] max-md:hidden">메세지</div>
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="lg:text-web-body-02 h-[209px] w-full border border-primary-02/50 bg-primary-01 px-mobile pb-[44px] pr-[52px] pt-[20px] text-[16px] font-[300] leading-[28.8px] tracking-[-0.01em] outline-none focus:border-primary-02 lg:p-[24px] lg:pb-[57px]"
            placeholder="내용을 입력해 주세요."
            rows={4}
            maxLength={100}
          />
          <div className="lg:text-web-body-03 absolute bottom-[20px] right-[16px] text-[16px] font-[300] leading-[24px] tracking-[-0.01em] text-white/60 lg:bottom-[24px] lg:right-[24px]">
            {newMessage.length}/100
          </div>
        </div>
      </form>

      {messages.length === 0 ? (
        <div
          className={cn(
            'lg:text-web-body-02 pt-[121px] text-center text-white/40 md:pt-[223px] lg:pt-[252px]',
            origin && 'pb-[70px] md:pb-[182px] lg:pb-[225px]',
          )}
        >
          아직 등록되어 있는 메시지가 없어요.
        </div>
      ) : (
        <>
          <div
            className={cn(
              type === 'A' && 'mt-[44px] grid grid-cols-1 md:grid-cols-2 gap-[16px] lg:grid-cols-4',
              type === 'B' && 'mt-[40px]',
              type === 'Origin' &&
                ' mt-[40px] grid grid-cols-1 md:grid-cols-2 gap-[16px] lg:grid-cols-4',
            )}
          >
            {currentMessages.map((message) => (
              <Comment key={message.id} type={type} message={message} />
            ))}
          </div>
          {messages.length > 8 && (
            <div className="mt-[36px] flex items-center justify-center gap-[8px] md:mt-[44px] lg:mt-[72px]">
              <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                <ChevronLeft />
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={cn(
                    'px-[8px] py-[2px] text-[14px] lg:py-[3.5px] lg:px-[17px] lg:text-[22px] lg:leading-[33px] leading-[21px] tracking-[-0.01em] font-[300] text-white',
                    currentPage === index + 1 ? '' : 'opacity-50',
                  )}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

function ChevronLeft() {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 5.5L8 12.5L16 19.5" stroke="white" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 5.5L16 12.5L8 19.5" stroke="white" />
    </svg>
  )
}
