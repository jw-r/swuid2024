import Background from './components/background'
import Committee from './components/sections/committee'
import Congratulatory from './components/sections/congratulatory'
import Interview from './components/sections/interview'
import Intro from './components/sections/intro'
import Top from './components/sections/top'
import Tracks from './components/sections/tracks'

export default function Home() {
  return (
    <>
      <Background />
      <main className="custom-container">
        <Top />
        <Intro />
        <Tracks />
        <Congratulatory />
        <Interview />
        <Committee />
      </main>
    </>
  )
}

export const dynamic = 'force-static'
