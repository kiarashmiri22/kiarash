
import { Metadata } from 'next'
import Hero from '@/components/Home/Hero'
import Work from '@/components/Home/work'
import TimeLine from '@/components/Home/timeline'
import Platform from '@/components/Home/platform'
import Portfolio from '@/components/Home/portfolio'
import Upgrade from '@/components/Home/upgrade'
import Perks from '@/components/Home/perks'
import Contact from '@/components/Home/contact'
import Faq from '@/components/Home/Faq'

export const metadata: Metadata = {
  title: 'Kiarash Miri — Full-Stack Developer',
  description:
    'Portfolio of Kiarash Miri, a full-stack developer working across frontend, backend, and hardware/embedded systems.',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <TimeLine />
      <Platform />
      <Portfolio />
      <Upgrade />
      <Perks />
      <Contact />
      <Faq />
    </main>
  )
}
