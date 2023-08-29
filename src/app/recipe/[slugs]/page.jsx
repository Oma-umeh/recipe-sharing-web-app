import { data } from '@/app/page'
import Image from 'next/image'
import { Button } from '@/app/components/Recipe'
// import { useRouter } from 'next/navigation';


export default function page({params}) {
// const router = useRouter();
//   const { id } = router.query;

    const recipe = data.find(pro => pro.id === params.slugs)
    console.log({params});
   
    
  return (
    <section>
        <h1>{recipe?.name}</h1>
        <Image src={recipe?.image} alt={recipe?.name} width={300} height={300}/>
        <p>Ingredients: {recipe?.ingredients}</p>
        <p>Instruction: {recipe?.instructions}</p>
        <Button text={'Back'} color={'bg-black'} path={'/'}/>
    </section>
  )
}


