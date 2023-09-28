import React from 'react'
import AccBal from '../icons/accbal-icon'
import CardIcon from '../icons/card-icon'
import styles from './eventItem.module.css'
import Button from '../util/button'
import ArrowIcon from '../icons/arrow-right-icon'

export default function eventItem(props) {
  const {name, image, accType, id, availableBal, accStatus} = props

  const profilePageLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <img src={'/' + image} alt={name} />

      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{name}</h2>

          <div className={styles.availableBal}>
            <AccBal/>
            <span>{availableBal}</span>
          </div>

          <div className={styles.accType}>
            <CardIcon/>
            <span>{accType}</span>
          </div>

          <div className={styles.accStatus}>
            <h6>Status</h6>
            <span>{accStatus}</span>
          </div>

        </div>

        <div className={styles.actions}>
         <Button onClick={profilePageLink}>
          <span>View Profile</span>
          <span className={styles.icon}><ArrowIcon/></span>
         </Button>
        </div>
      </div>
    </li>
  )
}
