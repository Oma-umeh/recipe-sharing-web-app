"use client"
import { useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'
import Sidebar from './components/Sidebar'

const inter = Poppins({ subsets: ['latin'], weight: ['400'] })



export default function RootLayout({ children }) {
  const [showMenu, setShowMenu] = useState(false)

  function handleClick() {
    setShowMenu((previousValue) => !previousValue)
  }
  console.log(showMenu, 'show');

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='z-50'>
          <Navbar showMenu={showMenu} setShowMenu={setShowMenu} handleClick={handleClick} />
        </div>
        <div>
          <div className="md:hidden block">
            <Sidebar isOpen={showMenu} toggleNav={handleClick} />
          </div>
          <main className='-z-50 '>
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
