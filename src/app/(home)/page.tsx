import Text from '@/components/ui/text'

export default function Home() {
  return (
    <main className="flex h-[200vh] flex-col items-center">
      <div>폰트 테스트</div>
      <Text typography="E_Headline_01">폰트 테스트</Text>
      <Text typography="Headline_01">폰트 테스트</Text>
    </main>
  )
}
