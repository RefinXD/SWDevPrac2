import Image from 'next/image'
import styles from '@/app/page.module.css'
import Banner from '@/components/Banner'


const mockData = new Map() 
mockData.set("1",{"hid":"1",
"name":"Chula",
"imgSrc":"/img/chula.jpg"})
mockData.set("2",{"hid":"2",
"name":"Rajavithi",
"imgSrc":"/img/rajavithi.jpg"})
mockData.set("3",{"hid":"3",
"name":"Thammasat",
"imgSrc":"/img/thammasat.jpg"})


export default function DetailPage({params}:{params:{hid:string}}) {
  return (
      <main className = {styles.main}>
        <Banner/>
        <main className='text-center p-5'>
        <h1 className='text-center text-xl font-medium'>Hospital ID {params.hid}</h1>
        <div className='flex flex-row my-5'>
            <Image src={(mockData.get(params.hid)).imgSrc} alt="Hospital"
            width={0} height={0} sizes='100vw' className='round-lg w-[30%] bg-black'/>
        <div className='text-md mx-5'>{(mockData.get(params.hid)).name}</div>
    </div>
    </main>
      </main>
  )
}