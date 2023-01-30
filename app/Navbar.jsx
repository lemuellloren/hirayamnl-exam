
'use client'
import React, { useState } from 'react'
import { Transition } from "@headlessui/react"
import { FiMenu, FiX } from "react-icons/fi"

import Image from 'next/image'
import Link from 'next/link'


const logoURLMobile = '/images/logo-mobile.png'
const logoURL = '/images/temokin-logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="navBar bg-white">
            <div className="container mx-auto">
                <div className="p-5 lg:p-10 flex justify-between lg:block">
                    <div className="flex items-center">
                        <div className="w-1/2 lg:w-1/6">
                            <Image
                                className='hidden lg:block'
                                src={logoURL}
                                alt="Logo"
                                width={500}
                                height={500}
                            />
                            <Image
                                className='block lg:hidden'
                                src={logoURLMobile}
                                alt="Logo"
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="lg:w-5/6 hidden md:block">
                            <div className="ml-10 flex justify-evenly text-primary-blue uppercase text-lg font-bold">
                                <Link className="mr-8 hover:opacity-75" href="/">Home</Link>
                                <Link className="mr-8 hover:opacity-75" href="/">About Temokin</Link>
                                <Link className="mr-8 hover:opacity-75" href="/">Civil Engineering</Link>
                                <Link className="mr-8 hover:opacity-75" href="/">Property Development</Link>
                                <Link className="mr-8 hover:opacity-75" href="/">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-end md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 text-primary-blue text-2xl"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <FiMenu />
                            ) : (
                                <FiX />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden bg-white" id="mobile-menu">
                        <div ref={ref} className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3 text-base font-bold text-primary-blue uppercase">
                            <Link className="p-5 hover:opacity-75" href="/">Home</Link>
                            <Link className="p-5 hover:opacity-75" href="/">About Temokin</Link>
                            <Link className="p-5 hover:opacity-75" href="/">Civil Engineering</Link>
                            <Link className="p-5 hover:opacity-75" href="/">Property Development</Link>
                            <Link className="p-5 hover:opacity-75" href="/">Contact Us</Link>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    )
}

export default Navbar
