import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/info.module.css'
import data from '../data/employee.json'
import { useState } from 'react'
import Card from '../components/Card/About'
import Link from 'next/link'


export default function About() {
    const [information, setInformation] = useState([...data])
     console.log(data);
  return (
    <>

        <main className={styles.main}>
        <code className={styles.code}></code>

        <div className={styles.grid}>
            <b> Employee One </b>
                {information && information.map((info, index) => {
                if (info.Position === "manager") {
                    return (
                        <div key={index}>
                            <Card key={About} employee={info.name} colour="lightPink" font="20px" />
                        </div>
                    )}
                })}
            <b> Employee Two:</b>
                {information && information.map((info, index) => {
                if (info.Position === "ceo") {
                    return (
                        <div key={index}>
                            <Card key={About} employeeName={info.name} colour="purple" font="20px" />
                        </div>
                    )}
                })}
        </div>
        </main>
    </>
  )
}  
        









