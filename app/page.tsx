import { Hero } from '@/components/sections/home/hero'
import { Tools } from '@/components/sections/home/tools'
import { ValuesTabs } from '@/components/sections/home/values-tabs'
import { Indicators } from '@/components/sections/home/indicators'
import { ServicesGrid } from '@/components/sections/home/services-grid'
import { HelpBanner, Financing, AppointmentCta } from '@/components/sections/home/banners'
import { Process } from '@/components/sections/home/process'
import { Benefits } from '@/components/sections/home/benefits'
import { Testimonials } from '@/components/sections/home/testimonials'
import { FinalContact } from '@/components/sections/home/final-contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Tools />
      <ValuesTabs />
      <Indicators />
      <ServicesGrid />
      <HelpBanner />
      <Process />
      <Financing />
      <Benefits />
      <AppointmentCta />
      <Testimonials />
      <FinalContact />
    </>
  )
}
