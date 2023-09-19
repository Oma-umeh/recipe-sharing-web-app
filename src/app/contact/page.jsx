
export default function Page() {
  return (
    <section className='flex flex-col md:flex-row p-4 md:p-[102px] text-red-950 bg-slate-50'>
      <div className='md:w-1/2 p-4'>
        <h1 className='text-4xl md:text-6xl font-bold py-5'>Contact Us</h1>
        <h3 className='text-xl font-semibold px-2'>Get In Touch</h3>
        <div className='text-lg px-2 py-3'>
          <p><span className='font-semibold'>Email:</span> myrecipe@gmail.com</p>
          <p><span className='font-semibold'>Phone:</span> +234 1234567890</p>
          <p><span className='font-semibold'>Address:</span> No.4 Sesan Awonoiki Street, Bakare Estate Agungi, Lekki, Lagos State</p>
        </div>
      </div>
    </section>
  )
}
