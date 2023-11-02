import TopMenuItem from './TopMenuItem';
import styles from './topmenu.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';




export default async function TopMenu(){

    const session = await getServerSession(authOptions)
    console.log(session)
    return (
        <div className={styles.menucontainer}>
                <Image src={'/img/vaccinelogo.png'} className={styles.logoimg}
                alt='logo' width = {100} height={100} sizes='100vh'/>

            <TopMenuItem title='Booking' pageRef='/booking'/>
            <div className='flex-row'>
                
            {
                session? <Link href="/api/auth/signout"><div className='flex items-center absolute left-0 h-full px-2
                absolute left-0 text-cyan-600 text-sm'>Sign-Out of {session.user?.name}</div></Link>
                : <Link href="/api/auth/signin"><div className='flex items-center absolute left-0 h-full px-2
                absolute left-0 text-cyan-600 text-sm'>Sign-In</div></Link>
            }
            <Link href="/mybooking"><div className='flex items-center absolute left-60 h-full px-2
            text-cyan-600 text-xl'>My Booking</div></Link>
            </div>
        </div> 
    );
}
