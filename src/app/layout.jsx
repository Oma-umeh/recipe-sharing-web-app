import { EmblaCarousel } from './components/Carousel'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'

const inter = Poppins({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Recipe App',
  description: 'Recipe App for all kinds of food recipe',
  keywords:'food, recipe'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='z-50'>
        <Navbar/>
        </div>
    
       
        <main className='-z-50 '>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
