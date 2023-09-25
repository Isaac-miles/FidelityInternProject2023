import React from 'react'
import styles from './event-detail.module.css'

export default function EventContent(props) {
  return (
    <section className={styles.content}>
      {props.children}
    </section>
  )
}
