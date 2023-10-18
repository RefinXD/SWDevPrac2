import CardPanel from '@/components/cardPanel'
import styles from '@/app/page.module.css'
import Banner from '@/components/Banner'
import getHospitals from '@/libs/getHospitals'
import HospitalCatalog from '@/components/hospitalCatalog'
import { Suspense } from 'react'
import LinearProgress from '@mui/material/LinearProgress'

export default async function Home() {
  const hospital = await getHospitals()
  return (
      <main className = "text-center p-5">
        {/* <h1 className = 'text-xl font-medium'>Select Your Hospital</h1> */}
        <Banner/>
        <Suspense fallback ={<p>Loading...<LinearProgress/></p>}>
          <HospitalCatalog hospitalJson = {hospital}/>
        </Suspense>
      </main>
  )
}
