'use client'

import Link from 'next/link'
import Image from 'next/image'


const LatestLaunches = ({ heading = 'Latest Launches' }) => {

    return (
        <div className="latest-launches relative bg-white">
            <div className="px-5 md:px-10 py-36 bg-center bg-no-repeat bg-cover"
                style={{
                    backgroundImage: "linear-gradient(0deg, rgb(255 255 255 / 30%), rgb(255 255 255 / 30%)), url('/images/launches-bg.png')",
                }}>
                <div className="container mx-auto">
                    <h2 className="uppercase text-2xl md:text-5xl font-bold text-center tracking-widest mb-28 text-primary-blue">{heading}</h2>
                    <div className="grid gap-20 md:flex md:justify-center md:items-center">
                            <Image
                                className="w-full"
                                src="/images/town-house.jpg"
                                alt="Mahligai"
                                width={300}
                                height={300}
                            />
                        <div className="md:w-1/2 text-center md:text-left text-primary-blue">
                            <div className="text-right md:text-center">
                                <Image
                                    className="mb-5 mx-auto md:ml-0"
                                    src="/images/mahligai.png"
                                    alt="Mahligai"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <h4 className="uppercase text-xl font-bold tracking-widest my-5">
                                2 & 2.5 Storey Terrace Homes <br />
                                | 20' x 70' | FREEHOLD
                            </h4>
                            <p className="text-base leading-normal pb-10 max-w-xl">
                                Mahligai offers spacious yet affordable terrace homes with perimeter
                                fencing and 24-hour security, nestled in the growing township of
                                Nusa Damai with all the features to call it your ideal home.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-28 text-center">
                    <Link className="primaryButton uppercase font-bold text-white hover:text-primary-blue transition-all bg-primary-blue hover:bg-white hover:text-white border-2 hover:border-2 border-primary-blue" href="/">Im Interested</Link>
                </div>
            </div>
        </div >
    )
}


export default LatestLaunches
