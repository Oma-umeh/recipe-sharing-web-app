
export default function Page() {
  return (
    <section className='flex flex-col md:flex-row p-4 md:p-[102px] text-red-950 bg-slate-50'>
      <div className='md:w-1/2 p-4'>
        <h1 className='text-4xl md:text-6xl font-bold py-5'>Contact Us</h1>
        <h3 className='text-xl font-semibold px-2'>Get In Touch</h3>
        <div className='text-lg px-2 py-3'>
          <p><span className='font-bold'>Send us a mail:</span><a href="mailto:myrecipe@gmail.com" className="text-sm hover:text-blue-700"> myrecipe@gmail.com</a></p>
          <p><span className='font-bold'>Give us a call:</span><a href="tel:+2341234567890" className="text-sm hover:text-blue-700"> +234 1234567890</a> </p>
          <p><span className='font-bold'>Address:</span> No.4 Sesan Awonoiki Street, Bakare Estate Agungi, Lekki, Lagos State</p>
        </div>
      </div>
    </section>
  )
}
