import React, { Children } from 'react'
import styles from './detail-wrapper.module.css'

export default function DetailWrapper(props) {
 const Icon = props.icon 
  return (
    <li className={styles.item}>
      <span className={styles.icon}>
        <Icon/>
      </span>
      
      <span className={styles.content}>
          {props.children}
      </span>
    </li>
  )
}