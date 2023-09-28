import React from 'react'
import styles from './profile-summary.module.css'

export default function ProfileSummary(props) {

  return (
    <section className={styles.title}>
      <h1>{props.name}</h1>
    </section>
  )
}