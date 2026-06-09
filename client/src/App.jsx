import { Route, Routes } from 'react-router-dom'
import { Admissions } from './components/Admissions'
import { Contact } from './components/Contact'
import { CourseDetailPage } from './components/CourseDetailPage'
import { Courses } from './components/Courses'
import { FloatingActions } from './components/FloatingActions'
import { Footer } from './components/Footer'
import { DirectorsNote } from './components/DirectorsNote'
import { TopCarousel } from './components/TopCarousel'
import { Nav } from './components/Nav'
import { NoticeStrip } from './components/NoticeStrip'
import { WhyUs } from './components/WhyUs'
import { useScrollReveal } from './hooks/useScrollReveal'

function HomePage() {
  useScrollReveal()

  return (
    <>
      <TopCarousel />
      <DirectorsNote />
      <NoticeStrip />
      <WhyUs />
      <Courses />
      <Admissions />
      <Contact />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <FloatingActions />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses/:level/:slug" element={<CourseDetailPage />} />
      </Routes>
    </>
  )
}
