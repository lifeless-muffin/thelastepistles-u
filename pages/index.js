import Head from 'next/head'
import HomePage from '../components/templates/Home'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HOME - Thelastepistles Records</title>
        <meta name="description" content="Official record label of indian Christian/Gospel Artists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </div>
  )
}
