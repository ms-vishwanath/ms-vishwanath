'use client'

import React, { useEffect, useState } from 'react'
import Spinner from '@/components/ui/spinner'
import { AnimatedCircularProgressBar } from '@/components/special/animated-progress'

export default function Loading() {
  const [progress, setProgress] = useState(100)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 95) return prev
        return prev + 5
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex items-center h-dvh flex-col justify-center'>

      <div>
        <AnimatedCircularProgressBar
          max={100}
          min={0}
          value={progress}
          gaugePrimaryColor="rgb(178, 103, 252)"
          gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
        />
      </div>

    </div>
  )
}
