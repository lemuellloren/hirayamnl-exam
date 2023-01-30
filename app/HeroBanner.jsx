'use client'
import { Fragment, useState, useEffect } from 'react'
import { Transition } from '@headlessui/react'

const HeroBanner = () => {
    const [isShowing, setIsShowing] = useState(false)

    useEffect(() => {
        setIsShowing(true)
    });

    return (
        <div
            className="bannerBg mx-auto py-32 sm:py-48 lg:py-56 flex justify-center"
            style={{
                background: "linear-gradient(0deg, rgb(255 255 255 / 30%), rgb(255 255 255 / 30%)), url('/images/banner-img.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>

            <Transition
                as={Fragment}
                show={isShowing}
                enter="transform transition duration-[400ms]"
                enterFrom="opacity-0 rotate-[-120deg] scale-50"
                enterTo="opacity-100 rotate-0 scale-100"
                leave="transform duration-200 transition ease-in-out"
                leaveFrom="opacity-100 rotate-0 scale-100 "
                leaveTo="opacity-0 scale-95 "
            >
                <h1 className="text-4xl font-bold leading-normal text-primary-blue uppercase text-center pt-24">
                    Winning <br />
                    your trust <br />
                    everytime
                </h1>
            </Transition>
        </div>
    )
}

export default HeroBanner
