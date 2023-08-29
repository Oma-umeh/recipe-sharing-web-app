import Image from 'next/image'
import Link from 'next/link'



export default function Recipe({recipe}) {

    const myrecipe = recipe.map(pro => (
        <aside key={pro.id} className='space-y-2'>
            {/* <Link href={`/recipe/${pro.id}`}> */}
            <Image src={pro.image} alt={pro.name} width={300} height={300} className='h-[300px]'/>
            <h1 className='font-medium text-lg'>{pro.name}</h1>
            {/* </Link> */}
            <Button text={'View Recipe'} color={'bg-orange-500'} path={`/recipe/${pro.id}`} />
        </aside>
    ))
  return (
    <section className='grid grid-cols-3 gap-5 px-20 my-10'>
        {myrecipe}
    </section>
  )
}

export function Button({text, color, path}){
    return (
      <Link href={`${path}`} className={`${color} w-30 text-white shadow-md rounded-md text-base hover:bg-blue-950 hover:text-white border border-blue-950 active:scale-90 ease-in-out duration-75 px-8 py-2`}>{text}</Link>
    )
  }
