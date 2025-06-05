
import FooterSection from '@/components/sections/footer-section'
import HeroSection from '@/components/sections/hero-section'
import ProjectsSection from '@/components/sections/projects-section'
import TechStack from '@/components/sections/tech-stack'
import React from 'react'

export default function Page() {
  return (
    <div className=''>
      <HeroSection />
      <TechStack />
      <ProjectsSection />
      <FooterSection />
    </div>
  )
}
