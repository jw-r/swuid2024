import ExhibitionHeader from '@/components/exhibition-header'
import GuestBook from '@/components/guest-book'
import db from '@/lib/prisma/db'
import { getMessages } from './actions'
import Background from './components/background'

async function getDesignersAndMessages() {
  const designers = await db.designer.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      order: 'asc',
    },
  })

  const allMessages = await getMessages()

  return { designers, messages: allMessages }
}

export default async function GuestBookPage() {
  const { designers, messages } = await getDesignersAndMessages()

  return (
    <>
      <Background />
      <main id="guestbook-main" className="custom-container">
        <ExhibitionHeader className="pt-[24px] lg:pt-[40px]" />

        <GuestBook
          initialMessages={messages.filter((message) => message.projectId === null)}
          designers={designers}
          className="mt-[48px] pb-[255px] md:mt-[80px] lg:mt-[96px]"
          type="Origin"
        />
      </main>
    </>
  )
}
