import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/info.module.css'
import data from '../data/employee.json'
import { useState } from 'react'
import CardEmployee from '../components/CardEmployee'
import Link from 'next/link'


export default function About() {
    const [information, setInformation] = useState([...data])
     console.log(data);
  return (
    <>

        <main className={styles.background}>
        <code className={styles.code}></code>

        <div className={styles.grid}>
            <b> Employee One </b>
                {information && information.map((info, index) => {
                if (info.position === "manager") {
                    return (
                        <div key={index}>
                            <CardEmployee employeeName={info.name} colour="lightPink" font="20px" />
                        </div>
                    )}
                })}
            <b> Employee Two:</b>
                {information && information.map((info, index) => {
                if (info.position === "ceo") {
                    return (
                        <div key={index}>
                            <CardEmployee employeeName={info.name} colour="purple" font="20px" />
                        </div>
                    )}
                })}
        </div>
        <div className={styles.images}>
            <img 
            src="/assets/woman5.svg" 
            alt="logo"
            
         />
         <img
         src="/assets/woman2.svg"
         alt="pic"
        />
        </div>
        <h1 className={styles.header}> Woman of the office</h1>
       
        </main>
    </>
  )
}  
        









