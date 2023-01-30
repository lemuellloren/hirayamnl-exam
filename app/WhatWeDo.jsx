'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// {
//     id: '2',
//     title: 'Property Development',
//     description: `Temokin has a collective property development experience of over 50 years, having designed and built complex skyscrapers, hospitals, and vast modern retail spaces on behalf of our clients. Our current portfolio includes the building of high-quality duplex homes and the new Istana Negara (Malaysia's national palace).`,
//     image: '/images/property.jpg',
// }

const WhatWeDo = ({ heading = 'What we do'}) => {

    const services = [
        {
            id: '1',
            title: 'Civil Engineering',
            description: ` From its humble beginnings as a high-quality pipe jacking specialist, Temokin led the way with Malaysia&apos;s first micro tunnelling project and has since expanded into the
            building of electricity substations, major underground sewage lines, complex bridges and major highways.`,
            image: '/images/ce.jpg',
        },
    ]


    return (
        <div className="services relative bg-white">
            <div className="overlayTopBox"></div>
            <div className="overlayBottomBox"></div>
            <div className="slantLg bg-primary-blue px-5 md:px-10 py-36 md:py-[500px]">
            <div className="container mx-auto">
                <h2 className="uppercase text-2xl md:text-5xl font-bold text-center tracking-widest mb-28">{heading}</h2>
                {services && services.map((service) => (
                    <div key={service.id} className="gap-20 flex md:justify-center md:items-center flex-col-reverse md:flex-row">
                        <div className="md:w-1/2 text-center md:text-right">
                            <h3 className="uppercase text-xl md:text-3xl font-bold tracking-widest mb-5">
                                {service.title}
                            </h3>
                            <p className="text-base leading-normal pb-10 max-w-xl ml-auto">
                                {service.description}
                            </p>
                            <div className="pt-10 text-center md:text-right">
                                <Link className="primaryButton uppercase font-bold text-primary-blue transition-all	hover:bg-primary-blue hover:text-white border-2 hover:border-2 border-white" href="/">Check out our work</Link>
                            </div>
                        </div>
                        <div className="md:w-1/2 mx-auto">
                            <Image
                                className="grayscale hover:grayscale-0"
                                src={service.image}
                                alt={service.title}
                                width={600}
                                height={600}
                            />
                        </div>
                    </div>
                ))}

            </div>
        </div>
        </div >
    )
}


export default WhatWeDo
