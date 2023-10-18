import Head from 'next/head'
import Board from './container/Board'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tic Tac Toe </title>
      </Head>

      <main className={styles.main}>
        <Board />
      </main>
    </div>
  )
}
