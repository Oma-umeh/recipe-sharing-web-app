import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineStar } from 'react-icons/ai'
import { EmblaCarousel } from './Carousel'





export default function Recipe({ recipe }) {

  const myRecipe = recipe.map(pro => (
    <ProductCard key={pro.id} recipe={pro} />
  ))
  return (
    <>
      <div className='relative top-0 left-0 right-0 -z-50'>
        <EmblaCarousel />
      </div>

      <div className='flex flex-col items-center justify-center ' >
        
        <section className='grid md:grid-cols-3 lg:grid-cols-4 gap-10 my-[120px]'>
          {myRecipe}
        </section>
      </div>
    </>

  )
}




export const ProductCard = ({ recipe }) => {

  return (
    <div >

      <section  className="w-full max-w-xs  overflow-hidden bg-white shadow-lg rounded-lg cursor-pointer">
         <Image src={recipe.image} alt={recipe.name} className=" w-[100%] h-[250px] hover:scale-110 duration-100" width={300} height={300} />
        <div className="p-4">
          <div className='flex items-center justify-between'>
            <h2 className="text-xl font-extrabold text-red-950">{recipe.name}</h2>
            <div className="flex items-center space-x-1">
              <Rating rating={2} />
              <span className="text-gray-600"></span>
            </div>
          </div>
            <p className='text-red-950 text-lg font-semibold'>{recipe.type}</p>

          <div className="w-full mt-4 font-bold">

            <Button text={'View Recipe'} color={'bg-slate-300'} path={`/recipe/${recipe.id}`} />
          </div>
        </div>
      </section>
    </div>

  );
};



export function Button({ text, color, path }) {
  return (
    <Link href={`${path}`} className={`${color} w-30 text-white shadow-md rounded-md text-base hover:bg-gray-400 hover:text-white border border-orange-950 hover:scale-110 duration-300 px-8 py-2`}>{text}</Link>
  )
}


const Rating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <AiOutlineStar key={i} fill={i <= rating ? 'text-yellow-500' : 'text-gray-300'} />
    );
  }

  return <div className="flex space-x-1">{stars}</div>;
};