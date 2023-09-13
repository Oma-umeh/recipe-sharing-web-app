"use client"
import { data } from '@/app/page'
import Image from 'next/image'
// import { Button } from '@/app/components/Recipe'



export default function page({params}) {

    const recipe = data.find(pro => pro.id === +(params.slugs))
    console.log(params);
    console.log({recipe});
    console.log(data);
   
    
  return (
    <section className='flex  items-center justify-center p-20 '>
        <div className='flex flex-col items-center justify-center text-lg text-red-950 font-bold p-10 gap-6'>
        <h1 className='text-2xl font-extrabold'>{recipe.name}</h1>
        <Image src={recipe.image} alt={recipe.name} width={300} height={300} className='h-[300px] w-[300px] rounded-md'/>
        <p>Ingredients: {recipe.ingredients}</p>
        <p>Instruction: {recipe.instructions}</p>
        {/* <Button text={'Back'} color={'bg-black'} path={'/'}/> */}
        </div>
    </section>
  )
}


