"use client"
import Image from 'next/image'
import {recipeData} from '../../Shared'



export default function page({ params }) {

  const recipe = recipeData.find(pro => pro.id == params.slugs)


  return (
    <section className='flex  items-center justify-center p-40 '>
      <div className='flex flex-col items-center justify-center text-lg text-red-950 font-bold p-10 gap-6'>
        <h1 className='text-2xl font-extrabold'>{recipe.name}</h1>
        <Image src={recipe.image} alt={recipe.name} width={300} height={300} className='h-[300px] w-[300px] rounded-md' />
        <p>Category: {recipe.type}</p>
        <p>Ingredients: {recipe.ingredients}</p>
        <p>Instruction: {recipe.instructions}</p>
      </div>
    </section>
  )
}


