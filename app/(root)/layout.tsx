import Loader from '@/components/models/Loader'
import FooterSection from '@/components/sections/footer-section'
import { BackgroundGradientAnimation } from '@/components/special/background-gradient-animation'
import { Pointer } from '@/components/special/custom-cursor'
import { ScrollProgress } from '@/components/special/scroll-progress'
import { SmoothCursor } from '@/components/special/smooth-cursor'
import { AOSProvider } from '@/providers/AOSProvider'
import React from 'react'

export default function Layout({ children }: { children: any }) {
    return (
        <div >
            <Loader>
                <AOSProvider>
                    {children}
                </AOSProvider>
            </Loader>
            <ScrollProgress />
        </div>
    )
}
