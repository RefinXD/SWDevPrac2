import CardPanel from '@/components/cardPanel'
import styles from '@/app/page.module.css'
import Banner from '@/components/Banner'

export default function Home() {
  return (
      <main className = {styles.main}>
        <Banner/>
        <CardPanel/>
      </main>
  )
}
