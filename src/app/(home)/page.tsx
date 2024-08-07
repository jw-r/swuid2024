import Text from '@/components/ui/text'
import Background from './components/background'

export default function Home() {
  return (
    <main className="flex h-[400vh] flex-col items-center">
      <Background />
      <div>폰트 테스트</div>
      <Text typography="E_Headline_01">폰트 테스트</Text>
      <Text typography="Headline_01">폰트 테스트</Text>
    </main>
  )
}
