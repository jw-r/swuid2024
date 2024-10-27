import ExhibitionHeader from '@/components/exhibition-header'
import GuestBook from '@/components/guest-book'
import Background from './components/background'

export default async function GuestBookPage() {
  return (
    <>
      <Background />
      <main id="guestbook-main" className="custom-container">
        <ExhibitionHeader className="pt-[24px] lg:pt-[40px]" />

        <GuestBook className="mt-[48px] pb-[255px] md:mt-[80px] lg:mt-[96px]" type="Origin" />
      </main>
    </>
  )
}
