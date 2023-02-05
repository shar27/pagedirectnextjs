import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Decor Accessories</title>
        <meta name="description" content="Home Decor Accessories" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Redirecting to Home Decor Accessories 
        </h1>

      </main>

    
    </div>
  )
}
