import { Lato } from '@next/font/google'
import Navbar from './Navbar'
import Footer from './Footer'
import './globals.css'

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable} font-lato`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  )
}
