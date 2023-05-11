import Head from 'next/head'
import HomePage from '../components/templates/Home'
import styles from '../styles/Home.module.css'
import GrainedWrapper from '../components/templates/Grained'

export default function Home() {
  return (
    <GrainedWrapper>
      <div className={styles.container} id='noisy-background-filter'>
        <Head>
          <title>HOME - Thelastepistles Records</title>
          <meta name="description" content="Official record label of indian Christian/Gospel Artists" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HomePage />
      </div>
    </GrainedWrapper>
  )
}
