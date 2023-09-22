
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineEye} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'

export default function page() {
  return (
    <section className='bg-gray-50 min-h-screen flex items-center justify-center py-40'>
      <div className='bg-gray-100 flex rounded-2xl py-5 item-center shadow-2xl'>
        <div className='w-1/2 p-1 md:block hidden'> <Image src="/login10.jpg" alt="login_image" className='rounded-2xl' width={300} height={300}/></div>
        <div className='md:w-1/2 px-16'>
          <h2 className='font-extrabold text-2xl text-orange-900'>Login</h2>
          <p className='text-sm mt4 text-orange-900'>If you are already a member, login</p>
          <form action="" className='flex flex-col gap-4'>
          <input type="text" name='email' placeholder='Email' className='p-2 mt-8 rounded-md border outline-none'/>
          <div className='relative'>
          <input type="text" name='pwd' placeholder='Password'className='p-2 rounded-md border w-full outline-none'/>
          <AiOutlineEye className='absolute top-1/2 right-3 -translate-y-1/2 text-gray-400'/>
          </div>
          <button className='bg-orange-700 rounded-xl text-white py-2 hover:scale-105 duration-300'>Login</button>
          </form>
          <div className='mt-10 grid grid-cols-3 text-gray-500'>
            <hr className='border-gray-500'/>
            <p className='text-center text-[10px]'>OR</p>
            <hr className='border-gray-500'/>
          </div>
          <button className='bg-white py-2 rounded-lg w-full mt-5 flex justify-center items-center text-sm text-orange-900 hover:scale-105 duration-300'>
            <FcGoogle className='mr-3'/>
            Login with Google
          </button>
          <div className='mt-5 text-xs  border-b border-gray-500 py-4 text-orange-900 cursor-pointer'>Forgot your password?</div>
          <div className='mt-3 text-xs flex justify-between items-center text-orange-900'>
            <p>If you don&apos;t have an account...</p>
            <Link href='/signup'>
            <button className='py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300'>SignUp</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
