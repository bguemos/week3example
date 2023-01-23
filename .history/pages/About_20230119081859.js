import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/info.module.css'
import data from '../data/employee.json'
import { useState } from 'react'
import Card from '../components/Card/About'
import Link from 'next/link'


export default function info() {
    const [information, setInformation] = useState([...data])
     console.log(data);
  return (
 <>

<main className={styles.main}>
<code className={styles.code}></code>

   
          
<div className={styles.grid}>
<b> Employee One </b>
{information && information.map((info, About) => {
if (info.employeePosition === "manager") {
return (
<Card key={About} employee={info.employeeName} colour="lightPink" font="20px" />
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
    
       

    
    
    </main>
   
</>
  )
    }  
        









