import Link from 'next/link'
import React from 'react'
import styles from './mainHead.module.css'

export default function MainHeader() {
  return (
    <header className={styles.header}>

    <div className={styles.logo} >
      <Link href="/">Events</Link>
    </div>
    <nav className={styles.navigation} >
    <ul>
        <li>
            <Link href="/events">Featured Events</Link>
        </li>
    </ul>
    </nav>
    </header>
  )
}
