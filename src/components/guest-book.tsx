'use client'

import React, { useState, useMemo, useEffect } from 'react'
import { addMessage } from '@/app/guest-book/actions'
import { cn } from '@/lib/utils'
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
  const [sort, setSort] = useState('All')

  const [currentPage, setCurrentPage] = useState(1)
  const messagesPerPage = 8

  const sortedMessages = useMemo(() => {
    return sort === 'All'
      ? messages
      : messages.filter((message) => (message.designer?.name || '모두에게') === sort)
  }, [messages, sort])

  const totalPages = Math.ceil(sortedMessages.length / messagesPerPage)

  const currentMessages = useMemo(() => {
    const indexOfLastMessage = currentPage * messagesPerPage
    const indexOfFirstMessage = indexOfLastMessage - messagesPerPage
    return sortedMessages.slice(indexOfFirstMessage, indexOfLastMessage)
  }, [sortedMessages, currentPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [sort])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (senderName.trim().length === 0 || newMessage.trim().length === 0 || isSubmitting) {
      return
    }
    if (projectId == null && designerId == null && receiver?.id == null) {
      return
    }

    setIsSubmitting(true)

    const tempMessage: MessageWithDesigner = {
      id: Date.now(),
      content: newMessage,
      createdAt: new Date(),
      sender: senderName,
      designerId: designerId || receiver?.id || null,
      projectId: projectId || null,
      designer: receiver?.id ? { id: receiver.id, name: receiver.name } : null,
    }

    setMessages((prev) => [tempMessage, ...prev])
    initInfo()

    try {
      const createdMessage = await addMessage({
        senderName,
        message: newMessage,
        designerId: designerId || receiver?.id,
        projectId,
      })

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
      setMessages((prev) => prev.filter((msg) => msg.id !== tempMessage.id))
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
            type === 'Origin' && 'pb-[70px] md:pb-[182px] lg:pb-[225px]',
          )}
        >
          아직 등록되어 있는 메시지가 없어요.
        </div>
      ) : (
        <>
          <Select onValueChange={setSort}>
            <div className="flex justify-center md:justify-end">
              <SelectTrigger asChild>
                <button className="mt-[100px] flex items-center gap-[8px] border border-primary-02 bg-[#FEF5AD]/20 py-[12px] pl-[26px] pr-[19px] focus:outline-none lg:py-mobile">
                  <div className="text-body-03 lg:text-[20px]">{sort}</div>
                  <ChevronDown />
                </button>
              </SelectTrigger>
            </div>
            <SelectContent className="mt-[8px] h-[400px] w-[87px] overflow-auto border border-[#FEF5AD]/50 bg-primary-01 p-0 md:mt-[11px] lg:w-[110px]">
              <SelectItem
                value="All"
                className="text-body-02 lg:text-web-caption-01 cursor-pointer from-white/10 to-white/0 px-[10.5px] pb-[12.5px] pt-[18.5px] outline-none hover:bg-gradient-to-r lg:p-mobile lg:pb-[8px]"
              >
                All
              </SelectItem>
              <SelectItem
                value="모두에게"
                className="text-body-02 lg:text-web-caption-01 cursor-pointer from-white/10 to-white/0 px-[10.5px] pb-[12.5px] pt-[18.5px] outline-none hover:bg-gradient-to-r lg:p-mobile lg:pb-[8px]"
              >
                모두에게
              </SelectItem>
              {designers?.map((designer) => (
                <SelectItem
                  key={designer.id}
                  value={designer.name}
                  className="text-body-02 lg:text-web-caption-01 cursor-pointer from-white/10 to-white/0 px-[10.5px] pb-[12.5px] pt-[18.5px] outline-none hover:bg-gradient-to-r lg:p-mobile lg:pb-[8px]"
                >
                  {designer.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
          {sortedMessages.length > messagesPerPage && (
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

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 5L8 11L13 5" stroke="white" />
    </svg>
  )
}
