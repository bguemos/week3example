import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/about.module.css'
import data from '../data/education.json'
import { useState } from 'react'
import Card from '../components/Card'
import Link from 'next/link'

export default function About() {
    return(
        <> About Page</>
    )
}
<main className={styles.main}>
        <div className={styles.description}>
          <p>
            
            <code className={styles.code}></code>
          </p>
          <Link href="About">About</Link>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
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
        
        <h1 className={styles.header}> Women who are CEO'S</h1>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/women.svg"
            alt="womanLogo"
            width={500}
            height={500}
            priority
          />
         
          
        </div>

        <div className={styles.grid}>
          <b className={styles.label}> Business Degrees: </b>
          {information && information.map((info, index) => {
            if(info.department === "Business"){
              return(
                <Card key={index} degree={info.degree} colour="lightPink" font="15px"/>
              )
            }
           })}
           <b className={styles.label}> Computing Degrees:</b>
           {information && information.map((info, index) => {
            if(info.department === "Computing"){
              return(
              <Card key={index} degree={info.degree} colour="lightPink" font="15px"/>
              )
            }
            })}
        </div>
      </main>
    
  









