import React from 'react'
import AvatarHero from '@/components/special/avatar-hero'
import { FlickeringGrid } from '../special/flickering-grid'
import { AiFillLinkedin } from 'react-icons/ai'
import { SiGithub } from 'react-icons/si'
import { SparklesText } from '../special/sparkles-text'
import { AuroraText } from '../special/aurora-text'
import { MdEmail } from 'react-icons/md'
import Link from 'next/link'
import { socialLinks } from '@/lib/about_vish'
import { SpinningText } from '../special/spinning-text'
export default function HeroSection() {
  return (
    <div className='  ' id='hero'>

      <div className='relative h-dvh overflow-hidden'>
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full w-full  [mask-image:radial-gradient(100dvw_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={6}
          color="#60A5FA"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
        {/* Avatar Hero in the background */}
        <div className="absolute inset-0 z-50">
          <AvatarHero />
        </div>
        {/* Foreground content */}
        <div className='container mx-auto relative  h-full flex flex-col justify-between'>
          <div className='flex md:flex-row flex-col items-center justify-between p-10 gap-4'>
            <div className='z-40'>
              <h1 className=' text-2xl'>Hello There, I am </h1>
              <SparklesText>
                <h1 className=' font-bold text-5xl lg:text-8xl xl:text-9xl'>
                  VISHWANATH
                </h1>
              </SparklesText>
              <AuroraText className='font-bold text-2xl lg:text-5xl xl:text-6xl'>
                FULL STACK DEVELOPER
              </AuroraText>
            </div>
            <div className='flex items-center gap-10 z-50'>
              <Link href={socialLinks.github.link} target='_noblank'>
                <SiGithub size={40} className='transform hover:scale-125 transition-all' />
              </Link>
              {/* <Link href={socialLinks.linkedin.link} target='_noblank'>
                <AiFillLinkedin size={40} className='text-[#0077B5] transform hover:scale-125 transition-all' />
              </Link> */}
              {/* <Link href={socialLinks.email.link} target='_noblank'>
                <MdEmail size={40} className='text-blue-950 transform hover:scale-125 transition-all' />
              </Link> */}
            </div>
          </div>
          <div className='absolute right-4 bottom-40 z-50'>
            <SpinningText className='lg:block hidden'>WEB • BACKEND • APP • AI •</SpinningText>
          </div>
        </div>

      </div>

    </div>
  )
}
