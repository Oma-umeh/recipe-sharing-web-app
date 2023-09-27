"use client"
import { AiOutlineSearch } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { data } from '../page'
import { ProductCard } from '../components/Recipe'

export default function Recipe() {
  const [searchRecipe, setSearchRecipe] = useState('')
  const [recipe, setRecipe] = useState([])

  function handleSearchChange(e) {
    setSearchRecipe(e.target.value)
  }

  useEffect(() => {
    if (searchRecipe.trim().length == 0) {
      setRecipe([])
      return
    }

    const recipeFiltered = data.filter(recipe => 
      recipe.name.toLowerCase().includes(searchRecipe.toLowerCase()) ||
      recipe.type.toLowerCase().includes(searchRecipe.toLowerCase())
    )

    setRecipe(recipeFiltered)
  }, [searchRecipe])

  return (
    <>
      <div className='flex items-center justify-center'>
        <div className='flex flex-col mt-[120px] md:mt-20 h-[290px]'>
          <h1 className='text-2xl md:text-5xl lg:text-7xl font-extrabold text-red-900 my-2 md:my-10'>
            Explore All Recipes
          </h1>
          <div className='flex justify-center'>
            <input
              type='text'
              name='search'
              id='search'
              placeholder='Search for recipe by name or category'
              className='w-full md:w-[500px] lg:w-[600px] xl:w-[700px] flex outline-none border-b-4 border-red-900'
              value={searchRecipe}
              onChange={handleSearchChange}
            />
            <AiOutlineSearch className='text-red-900' />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-8 md:my-16 px-4 md:px-20'>
        {recipe.map(recipe => (
          <ProductCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  )
}
