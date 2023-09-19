import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <section className='min-h screen py-40 bg-slate-50'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden'>
                <div className='w-full lg:w-1/2'> 
                <Image src='/signup.jpg' alt='signup_image' width={300} height={300} className='h-[510px] w-[500px]'/>
                </div>
                <div className='w-full lg:w-1/2 py-16 px-12'>
                    <h2 className='text-2xl font-extrabold text-orange-600 mb-4'>Sign Up</h2>
                    <p className='mb-4 text-sm text-slate-400'>Create Account</p>
                    <form action="">
                        <div className='grid grid-cols-2 gap-6'>
                            <input type="text" name='fnm' placeholder='Firstname' className='border border-slate-300 rounded-md outline-none py-1 px-2' />
                            <input type="text" name='snm' placeholder='Surname' className='border border-slate-300 rounded-md outline-none py-1 px-2' />
                        </div>
                        <div className='mt-5'>
                            <input type="text" name='email' placeholder='Email' className='border border-slate-300 rounded-md outline-none py-1 px-2 w-full' />
                        </div>
                        <div className='mt-5'>
                            <input type="password" name='pwd' placeholder='Password' className='border border-slate-300 rounded-md outline-none py-1 px-2 w-full' />
                        </div>
                        <div className='mt-5'>
                            <input type="password" name='pwd' placeholder='Confirm Password' className='border border-slate-300 rounded-md outline-none py-1 px-2 w-full' />
                        </div>
                        <div className='mt-5'>
                            <input type="checkbox" className='border border-slate-300 ' />
                            <span className='text-xs text-slate-400 ml-1'>I accept terms of use and privacy policy</span>
                        </div>
                        <div className='mt-5'>
                            <Link href='/login'>
                             <button className='w-full bg-orange-600 py-2 rounded-3xl text-white hover:text-orange-600 hover:bg-white border border-orange-600 '>Sign Up</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}
