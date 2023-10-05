import TopMenuItem from './TopMenuItem';
import styles from './topmenu.module.css'
import Image from 'next/image';
import Link from 'next/link';


export default function TopMenu(){
    return (
        <div className={styles.menucontainer}>
                <Image src={'/img/vaccinelogo.png'} className={styles.logoimg}
                alt='logo' width = {100} height={100} sizes='100vh'/>

            <TopMenuItem title='Booking' pageRef='/booking'/>
        </div>
        
    )
}
