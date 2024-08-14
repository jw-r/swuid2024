'use server'

import { revalidatePath } from 'next/cache'

export interface Message {
  id: string
  name: string
  message: string
  date: string
}

// 이 부분은 실제 데이터베이스 연동으로 대체해야 합니다.
let messages: Message[] = []

export async function getMessages(): Promise<Message[]> {
  // 실제로는 데이터베이스에서 메시지를 가져오는 로직이 들어갑니다.
  return messages
}

export async function addMessage(name: string, message: string): Promise<Message> {
  const newMessage: Message = {
    id: Date.now().toString(),
    name,
    message,
    date: new Date().toISOString(),
  }

  // 실제로는 데이터베이스에 메시지를 저장하는 로직이 들어갑니다.
  messages = [newMessage, ...messages]

  revalidatePath('/guestbook')
  return newMessage
}
