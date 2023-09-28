import React from 'react'
import styles from './profile-detail.module.css'

export default function ProfileContent(props) {
  return (
    <section className={styles.content}>
      {props.children}
    </section>
  )
}