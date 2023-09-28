import Link from 'next/link'
import React from 'react'
import styles from './mainHead.module.css'
import LoginIcon from '../icons//login-icon'
import LoanIcon from '../icons//loan-icon'
import CreditCard from '../icons//credit-card-icon'
import MoneyIcon from '../icons//money-icon'

export default function MainHeader() {
  return (
    <header className={styles.header}>

    <div className={styles.logo}>
        <Link href="/">
          <img src='images/Fidelity-logo.png' alt='Fidelity Bank' />
        </Link>
    </div>
      
    <nav className={styles.navigation} >
      <ul>
          <li>
            <LoanIcon/>
            <Link href="/events">Personal Loan</Link>
          </li>

          <li>
            <CreditCard/>
            <Link href="/events">Savings Account</Link>
          </li>

          <li>
            <CreditCard/>
            <Link href="/events">Current Account</Link>
          </li>

          <li>
            <MoneyIcon/>
            <Link href="/events">Investment Services</Link>
          </li>
      </ul>
    </nav>

    
    <div className={styles.headerright}>
         <button>
          <LoginIcon/>
          <span>Login</span>
         </button>

      <div className={styles.profile}>
        <img src='images\man-1.jpg' alt='picture of user'/>
      </div>
    </div>
    
    </header>
  )
}
