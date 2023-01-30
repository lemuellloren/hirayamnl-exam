'use client'

import Image from 'next/image'
import Link from 'next/link'

const logoURL = '/images/temokin-logo.png'
const year = new Date().getFullYear()

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="container mx-auto text-primary-blue font-semibold">
                <div className="md:flex md:items-center p-5 md:p-10">
                    <div className="md:w-3/4 md:grid md:grid-cols-3 gap-4 items-center">
                        <div>
                            <Image
                                className='hidden md:block'
                                src={logoURL}
                                alt="Logo"
                                width={200}
                                height={200}
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <p>Temokin Holdings Sdn Bhd (182413-M)</p>
                            <p>No.2, Jalan, 15/48 A,</p>
                        </div>
                        <div className="text-center md:text-left">
                            <p>Sentul Raya Boulevard</p>
                            <p>51000 Kuala Lumpur</p>
                        </div>
                    </div>
                    <div className="md:w-1/4 text-center md:text-right pt-10 md:pt-0">
                        <p>
                            &copy; Temokin Holdings {year}
                        </p>
                        <div>
                            <Link className="hover:opacity-75" href="/"><small>Term of Service</small></Link>
                            &nbsp; | &nbsp;
                            <Link className="hover:opacity-75" href="/"><small>Privacy Policy</small></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
