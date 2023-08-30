import styles from './banner.module.css'
import Image from 'next/image';
export default function Banner (){
    return (
        <div className={styles.banner}>
               <Image src={'/img/background.jpeg'}
               alt='cover'
               fill={true} 
               objectFit='cover'/>
                <div className={styles.bannerText}>
                    <h1 className='text-4xl font-medium'>Welcome To VacQ</h1>
                    <h3 className='text-2xl font-serif'>Stay safe from viruses with us</h3>
                </div>
        </div>
    )
}