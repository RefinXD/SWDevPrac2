import styles from './productcard.module.css'
import Image from 'next/image'

export default function ProductCard (){
    return(
        <div className={styles.card}>
            <div className ={styles.cardimg}>
                <Image src={'/img/vaccine.jpeg'}
                    alt='Product Picture'
                    fill={true}
                    objectFit='cover'/>            
            </div>
            <div className={styles.cardtitle}>Fact 1</div>
            <div className={styles.cardtext}>All vaccines contain an active component (the antigen) which generates an immune response, or the blueprint for making the active component.</div>
        </div>
    )
}