"use client"
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineStar, AiOutlineSearch} from 'react-icons/ai'
import { EmblaCarousel } from './Carousel'
import { useState } from 'react'





export default function Recipe({recipe}) {

  // const [searchRecipe, setSearchRecipe] = useState('')

  // function onChange(e){
  //   setSearchRecipe(e.target.value)
  // }

  // const recipefiltered = data.filter(recipe => recipe.name.toLowerCase().includes(searchRecipe.toLowerCase) === searchRecipe)

    const myrecipe = recipe.map(pro => (
      <ProductCard recipe={pro}/>
    ))
  return (
    <>
  

     <div className='relative top-0 left-0 right-0 -z-50'>
          <EmblaCarousel />
        </div>
    
    <div className='flex flex-col items-center justify-center ' >
      <div className='flex flex-rows-2 mt-10'>
    <input type="text" name="" id="" placeholder='search for recipe' className='w-[300px] outline-none border-solid border-b-4  border-red-950'
    // value={searchRecipe}
    // onChange={onChange}
    />
    <AiOutlineSearch className='text-red-950'/>
      </div>
       <section className='grid grid-cols-4 gap-10 my-[120px]'>
        {myrecipe}
    </section>
    </div>
    </>
 
  )
}




export const ProductCard = ({ recipe }) => {

  return (
    <>
    
      <div key={recipe.id} className="w-full max-w-xs  overflow-hidden bg-white shadow-lg rounded-lg cursor-pointer hover:scale-110 duration-100 ">
        <Image src={recipe.image} alt={recipe.name} className=" w-[100%] h-[250px]" width={300} height={300} />
      <div className="p-4">
        <div className='flex items-center justify-between'>
        <h2 className="text-xl font-extrabold text-red-950">{recipe.name}</h2>
        <div className="flex items-center space-x-1">
          <Rating rating={2} />
          <span className="text-gray-600"></span>
        </div>
        </div>
        
        <div className="w-full mt-4 font-bold">
      
           <Button text={'View Recipe'} color={'bg-gray-300'} path={`/recipe/${recipe.id}`} />
        </div>
      </div>
    </div>
    </>
  
  );
};



export function Button({text, color, path}){
    return (
      <Link href={`${path}`} className={`${color} w-30 text-white shadow-md rounded-md text-base hover:bg-gray-400 hover:text-white border border-orange-950 hover:scale-110 duration-300 px-8 py-2`}>{text}</Link>
    )
  }


  const Rating = ({ rating }) => {
    const stars = [];
  
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <AiOutlineStar key={i} fill={  i <= rating ? 'text-yellow-500' : 'text-gray-300'}/>
      );
    }
  
    return <div className="flex space-x-1">{stars}</div>;
  };