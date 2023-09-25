import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";


export default function Navbar({showMenu, setShowMenu, handleClick}) {
  console.log(showMenu);
  return (
    <nav className="">
      <ul className="flex justify-between h-[100px] bg-white  text-red-900 items-center text-sm fixed top-0 right-0 left-0 z-50">
        <div className="w-full md:w-auto flex items-center justify-between">
          <div className="md:hidden block px-5" onClick={handleClick}>
            {showMenu ? <AiOutlineClose size={34} /> : <GiHamburgerMenu size={34} />}
          </div>
          <Link href='/'>
          <Image src="/logo.png" alt="Logo" className="cursor-pointer" width={120} height={120}/>
          </Link>
        </div>
        <div className="hidden md:flex flex-row space-x-10 px-7">
          <Link href='/'>
            <li className=" hover:text-orange-600 z hover:border-b-2 border-orange-600">Home</li>
          </Link>
          <Link href='/about'>
            <li className=" hover:text-orange-600 hover:border-b-2 border-orange-600">About</li>
          </Link>
          <Link href='/explore'>
            <li className=" hover:text-orange-600 hover:border-b-2 border-orange-600">Explore</li>
          </Link>
          <Link href='/contact'>
            <li className=" hover:text-orange-600 hover:border-b-2 border-orange-600">Contact</li>
          </Link>
        </div>

        <Link href='/login' className="hidden md:block text-white bg-orange-600 p-2 hover:bg-orange-700 hover:text-white mr-5 rounded-md">Login / Signup</Link>
      </ul>

    </nav>
  )
}
