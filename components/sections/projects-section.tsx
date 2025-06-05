"use client"
import React from 'react';
import { TextAnimate } from '../special/text-animate';
import { my_works } from '@/lib/about_vish';
import { Button } from '../ui/button';
import { PulsatingButton } from '../special/pulsating-buttons';
import { useRouter } from 'next/navigation';
import { TracingBeam } from '../special/tracing-beam';
import Link from 'next/link';


export default function ProjectsSection() {

    const router = useRouter()

    return (
        <div className=' min-h-dvh' id='projects'>

            <div className='container mx-auto py-12 px-4 border-t'>

                <div className='flex flex-col gap-20'>
                    <div>
                        <h1 className="text-4xl lg:text-5xl text-center font-bold mb-4">
                            Things I have builded
                        </h1>
                        <p className="text-center text-lg max-w-2xl mx-auto">
                            Ideas turned into digital experiences — crafted with creativity, code, and a lot of coffee.
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        {
                            my_works?.map((work: any, index: number) => (
                                <div key={index}>
                                    <h1 className='text-center text-3xl pb-6 font-bold text-pink-700'>{work.title}</h1>
                                    <div className='grid lg:grid-cols-3 gap-10'>
                                        {work?.projects?.map((item: any, index: any) => {
                                            const number = index + 1
                                            const string = number?.toString()
                                            return <div key={index} data-aos="zoom-in">
                                                <Link href={item.link} target="_blank" rel="noopener noreferrer">
                                                    <div className="p-4 hover:bg-violet-100 hover:scale-110 transform transition-all rounded-md min-h-40" >
                                                        <h1 className="text-5xl font-bold">
                                                            {string}
                                                        </h1>
                                                        <h1 className="text-2xl font-semibold">
                                                            {item.name}
                                                        </h1>
                                                        <p className=''>{item?.description}</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            ))
                        }
                        <div>

                        </div>


                    </div>

                </div>
            </div>

        </div>
    );
}
