import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/info.module.css'
import data from '../data/employee.json'
import { useState } from 'react'
import Card from '../components/Card/About'
import Link from 'next/link'


export default function About() {
    const [About, setAbout] = useState([...data])
     console.log(data);
  return (
 <>

<main className={styles.main}>
<code className={styles.code}></code>

   
          
<div className={styles.grid}>
<b> Employee One </b>
{About && About.map((data, About) => {
if (data.Position === "manager") {
return (
<Card key={About} employee={data.Name} colour="lightPink" font="20px" />
 )
 }
})}
<b> Employee Two:</b>
{About && About.map((About, About) => {
if (data.Position === "ceo") {
     return (
    <Card key={About} employeeName={data.Name} colour="purple" font="20px" />
     )
     }
     })}
    </div>
    
       

    
    
    </main>
   
</>
  )
    }  
        









