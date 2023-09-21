import Image from 'next/image'
import { recipeData } from '../../Shared'

export default function Page({ params }) {
  const recipe = recipeData.find(pro => pro.id == +(params.slugs))

  return (
    <section className='flex items-center justify-center py-24 px-6 md:p-40'>
      <div className='flex flex-col items-center justify-center text-lg text-red-950 font-bold p-4 md:p-10 gap-4 md:gap-6'>
        <h1 className='text-xl md:text-2xl lg:text-3xl font-extrabold'>{recipe.name}</h1>
        <Image src={recipe.image} alt={recipe.name} width={300} height={300} className='h-[300px] w-[300px] rounded-md' />
        <p className='text-sm md:text-base'>Category: {recipe.type}</p>
        <p className='text-sm md:text-base'>Ingredients: {recipe.ingredients}</p>
        <p className='text-sm md:text-base'>Instruction: {recipe.instructions}</p>
      </div>
    </section>
  )
}


