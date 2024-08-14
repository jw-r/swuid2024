import ExhibitionHeader from '@/components/exhibition-header'
import GuestBook from '@/components/guest-book'

export default function GuestBookPage() {
  return (
    <>
      <main className="custom-container">
        <ExhibitionHeader className="pt-[24px] lg:pt-[40px]" />

        <GuestBook initialMessages={[]} className="mt-[48px] md:mt-[80px] lg:mt-[96px]" origin />
      </main>
    </>
  )
}
