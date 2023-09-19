import Link from 'next/link'

export default function Sidebar({ isOpen, toggleNav }) {
  return (
    <div>
      <div className=" fixed inset-0 z-50 top-[100px] w-full">
        {isOpen && (
          <div className=''>
            <nav className="px-4 py-8 bg-orange-600 h-full w-90%">
              <ul className='space-y-4'>
                <li>
                  <a onClick={toggleNav} href="/" className="block py-2 text-white font-bold">
                    Home
                  </a>
                </li>
                <li>
                  <a onClick={toggleNav} href="/about" className="block py-2 text-white font-bold">
                    About
                  </a>
                </li>
                <li>
                  <a onClick={toggleNav} href="/explore" className="block py-2 text-white font-bold">
                    Explore
                  </a>
                </li>
                <li>
                  <a onClick={toggleNav} href="/contact" className="block py-2 text-white font-bold">
                    Contact
                  </a>
                </li>
              </ul>

              <Link onClick={toggleNav} href='/login' className="md:hidden block text-center font-bold bg-white text-orange-600 p-2 shadow-md mt-10 rounded-md">Login / Signup</Link>
            </nav>
          </div>

        )}
      </div>
    </div>
  )
}
