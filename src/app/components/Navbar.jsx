import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="">
        <ul className="flex justify-between h-[100px] bg-blue-950  text-white items-center text-3xl fixed top-0 right-0 left-0">
                <img src="./logo.png" alt="Logo" className="cursor-pointer"/>
            <div className="flex flex-row gap-10 px-7">
            <Link href='/'>
            <li>Home</li>
            </Link>
            <Link href='/about'>
            <li>About</li>
            </Link>
            <Link href='/explore'>
            <li>Explore</li>
            </Link>
            <Link href='/contact'>
            <li>Contact</li>
            </Link>
            </div>
        </ul>
    </nav>
  )
}
