import Background from './components/background'
import Committee from './components/sections/committee'
import Congratulatory from './components/sections/congratulatory'
import StillCut from './components/sections/still-cut'
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
        <StillCut />
        <Committee />
      </main>
    </>
  )
}

export const dynamic = 'force-static'
