import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import data from '../data/education.json'
import { useState } from 'react'
import Card from '../components/Card'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [information, setInformation] = useState([...data])
     console.log(data);
  return (
    <>
      <Head>
        <title>The Office</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            
            <code className={styles.code}></code>
          </p>
          <Link href="About">About</Link>
          <div>
            <a
             
              
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
        
        <h1 className={styles.header}> Choose your employee</h1>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="women.png"
            alt="womanLogo"
            width={500}
            height={500}
            priority
          />
         
          
        </div>

        <div className={styles.grid}>
          <b> Business Degrees: </b>
          {information && information.map((info, index) => {
            if(info.department === "Business"){
              return(
                <Card key={index} degree={info.degree} colour="lightPink" font="15px"/>
              )
            }
           })}
           <b> Computing Degrees:</b>
           {information && information.map((info, index) => {
            if(info.department === "Computing"){
              return(
              <Card key={index} degree={info.degree} colour="lightPink" font="15px"/>
              )
            }
            })}
        </div>
      </main>
    </>
  )
}
