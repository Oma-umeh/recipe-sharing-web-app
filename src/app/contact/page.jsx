
export default function Page() {
  return (
    <section className='flex flex-col md:flex-row p-4 md:p-[102px] text-red-950 bg-slate-50'>
      <div className='md:w-1/2 p-4'>
        <h1 className='text-4xl md:text-6xl font-bold py-5'>Contact Us</h1>
        <h3 className='text-xl font-semibold px-2'>Give us a feedback to help us serve you better</h3>
        <div className='text-lg px-2 py-3'>
          <p><span className='font-bold'>Send us a mail:</span><a href="mailto:myrecipe@gmail.com" className="text-sm hover:text-blue-700"> myrecipe@gmail.com</a></p>
          <p><span className='font-bold'>Give us a call:</span><a href="tel:+2341234567890" className="text-sm hover:text-blue-700"> +234 1234567890</a> </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.54922867804!2d3.5200574109312335!3d6.45186639351262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf6ecfc7a8d45%3A0x35a632d8359df66a!2s4%20Sesan%20Awonoiki%20St%2C%20Eti-Osa%20106104%2C%20Lekki%2C%20Lagos!5e0!3m2!1sen!2sng!4v1695857822815!5m2!1sen!2sng" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <p><span className='font-bold'>Address:</span> No.4 Sesan Awonoiki Street, Bakare Estate Agungi, Lekki, Lagos State</p>
        </div>
      </div>
    </section>
  )
}
