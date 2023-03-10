import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/About.module.css'
import data from '../data/eeomployees.json'
import { useState } from 'react'
import Card from '../components/Card'
import Link from 'next/link'

export default function About() {
    return(
        <> About Page</>
    )
}
<><Head>
    <title>The Office</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
</Head>
<main className={styles.main}>
   
          
<div className={styles.grid}>
<b> Employees </b>
{information && information.map((info, index) => {
if (info. === "Business") {
return (
<Card key={index} degree={info.degree} colour="lightPink" font="15px" />
 )
 }
})}
<b> Computing Degrees:</b>
{information && information.map((info, index) => {
if (info.department === "Computing") {
     return (
    <Card key={index} degree={info.degree} colour="lightPink" font="15px" />
     )
     }
     })}
    </div>
    </main>
</>
        
        









