
export default function Page() {
  return (
    <section className='flex items-center justify-center bg-slate-50 min-h-screen relative mt-[100px] text-red-900 cursor-pointer -z-50'>
      <div className='flex flex-col lg:flex-row items-center gap-4 bg-white shadow-2xl lg:h-[600px] rounded-2xl p-14'>
        <div className='text-4xl lg:text-5xl font-extrabold w-full lg:w-1/2 text-center lg:text-left'>
          <p>Delicious, Made Easy</p>
        </div>
        <div className='text-lg lg:text-xl font-semibold w-full lg:w-1/2'>
          <p>These days, it only takes a quick Google search or Instagram browse to find incredible food inspiration. But often, these drool-worthy recipes come with ingredients lists and cook times that’ll have your eyes water instead. It can feel pretty overwhelming.

            That’s why we created MyRecipes. It’s your one-stop destination for no-fuss, super-delicious recipes that are as much fun to prepare as they are to devour!

            Every recipe features clever time-saving techniques and trusted Nestle products. Which means you can deliver maximum wow-factor with a minimum time spent in the kitchen.
          </p>
        </div>
      </div>
    </section>
  )
}
