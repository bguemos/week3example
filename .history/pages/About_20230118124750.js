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

  









