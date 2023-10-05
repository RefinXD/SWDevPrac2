'use client'
import styles from './banner.module.css'
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function Banner (){
    const router = useRouter()
    const covers = ['/img/background.jpeg','/img/background2.jpeg','/img/background3.jpeg','/img/background4.jpeg']
    const [index, setIndex] = useState(0);
    return (
        <div className={styles.banner} onClick ={()=> setIndex(index+1)}>
            
               <Image src={covers[index%4]}
               alt='cover'
               fill={true} 
               objectFit='cover'/>
                <div className={styles.bannerText}>
                    <h1 className='text-4xl font-medium'>Welcome To VacQ</h1>
                    <h3 className='text-2xl font-serif'>Stay safe from viruses with us</h3>
                </div>
                <button className='bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent'
                onClick={(e)=>{e.stopPropagation();router.push('/hospital')}}>
                    Enter Now
                </button>
        </div>
    )
}