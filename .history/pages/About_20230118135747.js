import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/info.module.css'
import data from '../data/employees.json'
import { useState } from 'react'
import Card from '../components/Card/About'
import Link from 'next/link'


export default function About() {
    const [information, setInformation] = useState([...data])
     console.log(data);
  return (
 <>

<main className={styles.main}>
   
          
<div className={styles.grid}>
<b> Employee One </b>
{information && information.map((info, About) => {
if (info.employeePosition === "manager") {
return (
<Card key={About} employeeName={info.employeeName} colour="lightPink" font="20px" />
 )
 }
})}
<b> Employee Two:</b>
{information && information.map((info, About) => {
if (info.employeePosition === "ceo") {
     return (
    <Card key={About} employeeName={info.employeeName} colour="purple" font="20px" />
     )
     }
     })}
    </div>
    <div className={styles.forbes}>
        <img src="rihanna.png" alt="forbes"></img>
        <img src="forbesAsia.jpeg" alt='asia'></img>

    </div>
    
    </main>
   
</>
  )
    }  
        









