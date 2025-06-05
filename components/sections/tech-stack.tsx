import React from 'react'

import Image from 'next/image'
import { MdStorage } from 'react-icons/md'
import { TracingBeam } from '../special/tracing-beam'
import { VelocityScroll } from '../special/scroll-based-velocity'
import { techStacks } from '@/lib/about_vish'



export default function TechStack() {
    return (
        <section className="" id='tech-stack'>
            <div className="container mx-auto space-y-12  border-t lg:px-16 lg:py-16 px-6 py-8">
                <TracingBeam className='hidden lg:block'>
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                            I Am Versed in These Tech Stacks
                        </h1>

                        <p className=" text-lg max-w-2xl mx-auto">
                            I don't just know tools — I build systems from frontend to infra, like building blocks stacked with purpose.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-10 pt-10">
                        {techStacks.map((stack, index) => (
                            <div
                                key={index}
                                className=""

                            >
                                <div className="flex items-center gap-3 mb-4" data-aos="zoom-in">
                                    {stack.icon}
                                    <h2 className="text-xl font-semibold">{stack.title}</h2>
                                </div>
                                <div className="grid xl:grid-cols-6 lg:grid-cols-5 grid-cols-2 gap-6" >
                                    {stack.items.map((item, idx) => (
                                        <div key={idx} className="flex items-center text-sm gap-2 transform hover:scale-110 !transition-all" data-aos="zoom-in">
                                            {item.icon ? (
                                                <span className="text-indigo-500">
                                                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
                                                        <Image
                                                            src={item.icon}
                                                            alt="logo"
                                                            width={100} // Required but ignored due to layout="fill"
                                                            height={100}
                                                            className="w-full h-full object-contain"
                                                        />
                                                    </div>
                                                </span>
                                            ) : (
                                                <span className="w-2 h-2 rounded-full bg-gray-400" />
                                            )}
                                            {item.name}
                                        </div>
                                    ))}
                                </div>

                            </div>
                        ))}
                    </div>
                </TracingBeam>
                <div className='block lg:hidden'>
                    <div className="text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                            I Am Versed in These Tech Stacks
                        </h1>

                        <p className=" text-lg max-w-2xl mx-auto">
                            I don't just know tools — I build systems from frontend to infra, like building blocks stacked with purpose.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-14 pt-10">
                        {techStacks.map((stack, index) => (
                            <div
                                key={index}
                                className=""

                            >
                                <div className="flex items-center gap-3 mb-4" data-aos="zoom-in">
                                    {stack.icon}
                                    <h2 className="text-xl font-semibold">{stack.title}</h2>
                                </div>
                                <div className="grid xl:grid-cols-6 lg:grid-cols-5 grid-cols-2 gap-6" >
                                    {stack.items.map((item, idx) => (
                                        <div key={idx} className="flex items-center text-sm gap-2 transform hover:scale-110 !transition-all" data-aos="zoom-in">
                                            {item.icon ? (
                                                <span className="text-indigo-500">
                                                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12">
                                                        <Image
                                                            src={item.icon}
                                                            alt="logo"
                                                            width={100} // Required but ignored due to layout="fill"
                                                            height={100}
                                                            className="w-full h-full object-contain"
                                                        />
                                                    </div>
                                                </span>
                                            ) : (
                                                <span className="w-2 h-2 rounded-full bg-gray-400" />
                                            )}
                                            {item.name}
                                        </div>
                                    ))}
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='border-t container mx-auto'>

            </div>
            <div className="relative flex h-dvh w-full flex-col items-center justify-center overflow-hidden ">
                <h1 className='text-center text-4xl lg:text-5xl font-bold mb-4 flex items-center gap-2'>Things Running on my Brain  </h1>
                <VelocityScroll> &nbsp; EAT &nbsp; CODE &nbsp; GAME &nbsp; KNOWLEDGE &nbsp; SLEEP &nbsp; FRIENDS &nbsp; </VelocityScroll>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                <VelocityScroll>&nbsp; FAMILY &nbsp; HEALTH &nbsp; TEAMWORK &nbsp; RESPECT &nbsp; MONEY &nbsp;</VelocityScroll>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>

        </section>
    )
}
