import React from 'react'
import styles from './event-summary.module.css'
export default function EventSummary(props) {

  return (
    <section className={styles.summary}>
      <h1>{props.title}</h1>
    </section>
  )
}
