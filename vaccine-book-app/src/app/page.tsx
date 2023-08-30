import Image from 'next/image'
import ProductCard from '@/components/ProductCard'
import styles from './page.module.css'
import Banner from '@/components/Banner'

export default function Home() {
  return (
      <main className = {styles.main}>
        <Banner/>
        <div style={{margin:"20px", display: "flex", flexDirection: "row",alignContent: "space-around", justifyContent: "space-around", flexWrap:"wrap"}}>
          <ProductCard hospitalName='Chula' imgSrc='/img/chula.jpg'/>
          <ProductCard hospitalName='Rajavithi' imgSrc='/img/rajavithi.jpg'/>
          <ProductCard hospitalName='Thammasat' imgSrc='/img/thammasat.jpg'/>
        </div>
      </main>
  )
}
