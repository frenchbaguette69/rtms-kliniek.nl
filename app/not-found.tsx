import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import notfoundpicture from "@/public/rTMS kliniek.png"
 
export default function NotFound() {
  return (
    <div className='h-screen items-center flex justify-center gap-8 flex-col'>
      <div className='bg-white p-16 rounded-3xl items-center justify-center text-center'>
      <Image src={notfoundpicture} alt='404 niet gevonden pagina' height={1000} width={1000}/>
      <h2 className='text-3xl font-semibold'>Helaas deze pagina bestaat niet</h2>
      <Link href="/"><Button className='mt-4'>Terug naar home</Button></Link>
      </div>
    </div>
  )
}