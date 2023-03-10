import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Day1 from '../components/Day1'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Advent of Code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Day1 />
      </main>

     
    </div>
  )
}

export default Home
