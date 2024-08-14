'use client'

import { Message, addMessage } from '@/app/guest-book/actions'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface GuestBookProps {
  initialMessages: Message[]
  className?: HTMLElement['className']
  targetProjectId?: string
  targetUserId?: string
  origin?: boolean
}

export default function GuestBook({
  initialMessages,
  className,
  targetUserId,
  targetProjectId,
  origin,
}: GuestBookProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [newMessage, setNewMessage] = useState('')
  const [name, setName] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (name && newMessage) {
      const newMsg = await addMessage(name, newMessage)
      setMessages([newMsg, ...messages])
      setNewMessage('')
      setName('')
      router.refresh()
    }
  }

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
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-body-03 lg:text-web-body-02 w-full border border-primary-02/50 bg-transparent py-[12px] pl-mobile pr-[52px] outline-none focus:border-primary-02 lg:p-mobile lg:pr-[58px]"
                placeholder="보내는 사람을 입력해 주세요."
                maxLength={8}
              />
            </div>
            {!targetUserId && !targetProjectId && (
              <div className="w-full md:max-w-[273px] lg:max-w-[280px]">
                <div className="text-body-03 lg:text-web-body-02 mb-[12px] max-md:hidden">
                  받는 사람
                </div>
                <input
                  type="text"
                  className="text-body-03 lg:text-web-body-02 w-full border border-primary-02/50 bg-transparent px-mobile py-[12px] outline-none focus:border-primary-02 lg:p-mobile"
                  placeholder="받는 사람을 선택해 주세요."
                />
              </div>
            )}
          </div>
          <button
            type="submit"
            className="text-body-03 lg:text-web-body-03 h-[110px] text-nowrap border border-primary-02/50 bg-white/10 px-mobile text-white/60 md:h-[50px] lg:h-[68px] lg:px-[34.5px]"
          >
            등록
          </button>
        </div>

        <div className="relative mt-[12px] md:mt-[28px] lg:mt-[32px]">
          <div className="text-body-03 lg:text-web-body-02 mb-[12px] max-md:hidden">메세지</div>
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="lg:text-web-body-02 h-[209px] w-full border border-primary-02/50 bg-transparent px-mobile pb-[44px] pr-[52px] pt-[20px] text-[16px] font-[300] leading-[28.8px] tracking-[-0.01em] outline-none focus:border-primary-02 lg:p-[24px] lg:pb-[57px]"
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
        <div></div>
      )}
    </div>
  )
}
