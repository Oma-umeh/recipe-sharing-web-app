import Link from "next/link";

export default function Navbar() {
  
  return (
    <nav className="">
      <ul className="flex justify-between h-[100px] bg-white  text-red-950 items-center text-sm fixed top-0 right-0 left-0">
        <img src="./logo.png" alt="Logo" className="cursor-pointer" />
        <div className="flex flex-row space-x-10 px-7">
          <Link href='/'>
            <li className=" hover:text-orange-600 hover:border-b-2 border-orange-600">Home</li>
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

        <Link href='/login' className="text-white bg-orange-600 p-2 hover:bg-orange-700 hover:text-[#fff] mr-5 rounded-md">Login / Signup</Link>
      </ul>

    </nav>
  )
}
