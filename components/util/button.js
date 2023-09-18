import React from 'react'
import styles  from './button.module.css'
export default function button(props) {
  return (
    <button className={styles.btn} onClick={props.onClick}>
      {props.children}
    </button>
  )
}
