import Link from "next/link";
import { AiOutlineFacebook, AiOutlineGooglePlus, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import { BsArrowRight, BsEnvelope } from "react-icons/bs"


export default function Footer() {
  return (
    <footer className="bg-orange-600">
      <section className="text-white grid md:flex md:flex-row justify-between py-10 pl-[26px] md:px-[100px]">
        <div className="">
          <ul className="">
            <Link href='/'>
            <li className='hover:text-blue-700 text-xs cursor-pointer py-2'>Home</li>
            </Link>
            <Link href='/about'>
            <li className='hover:text-blue-700 text-xs cursor-pointer py-2'>About</li>
            </Link>
            <Link href='/explore'>
            <li className='hover:text-blue-700 text-xs cursor-pointer py-2'>Explore</li>
            </Link>
            <Link href='/contact'>
            <li className='hover:text-blue-700 text-xs cursor-pointer py-2'>Contact Us</li>
            </Link>
          </ul>
        </div>

        <div className="">
          <ul>
            <li className='hover:text-blue-700 text-xs cursor-pointer py-2'>Our Team</li>
            <li className='hover:text-blue-700 text-xs cursor-pointer py-2'>Feedback</li>
            <li className='hover:text-blue-700 text-xs cursor-pointer py-2'>Learn More</li>
            <li className='hover:text-blue-700 text-xs cursor-pointer py-2'>Tips</li>
          </ul>
        </div>

        <div className="">
          <ul>
            <li className='hover:text-blue-700 text-xs cursor-pointer py-2'>Main Dishes</li>
            <li className='hover:text-blue-700 text-xs cursor-pointer py-2'>Side Dishes</li>
            <li className='hover:text-blue-700 text-xs cursor-pointer py-2'>Snack</li>
            <li className='hover:text-blue-700 text-xs cursor-pointer py-2'>Soup</li>
          </ul>
        </div>

        <div className="">
          <h3 className="tex-xs mt-3 mb-2 ml-4">Newsletter</h3>
          <div className="flex">
            <BsEnvelope className="px-1"/>
            <input type="text" name='email' placeholder='Enter your email' className='outline-none border-solid border-b-2 bg-orange-600  border-white'/>
            <BsArrowRight />
         </div>

          <div className="flex justify-center py-4 gap-2 text-2xl text-gray-600">
          <AiOutlineFacebook  className="bg-white rounded-full p-1  hover:text-blue-700"/>
          <AiOutlineInstagram  className="bg-white rounded-full p-1  hover:text-blue-700"/>
          <AiOutlineTwitter  className="bg-white rounded-full p-1  hover:text-blue-700"/>
          <AiOutlineYoutube  className="bg-white rounded-full p-1  hover:text-blue-700"/>
          <AiOutlineGooglePlus  className="bg-white rounded-full p-1  hover:text-blue-700"/>
          <AiOutlineLinkedin className="bg-white rounded-full p-1  hover:text-blue-700" />
          </div>
        </div>
        </section>
        <hr />
      <p className="text-xs text-white text-center py-4"><sup>&copy;</sup>Tasty Shoppers{new Date().getFullYear()}</p>
    </footer>
  )
}



