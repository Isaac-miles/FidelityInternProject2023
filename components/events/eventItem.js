import React from 'react'
import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/address-icon'
import styles from './eventItem.module.css'
import Button from '../util/button'
import ArrowIcon from '../icons/address-icon'
export default function eventItem(props) {
  const {title,image, location, id, date} = props

  const readableDate = new Date(date).toLocaleDateString('en-US',{
    day: 'numeric',
    month:'long',
    year:'numeric'
  })
  const detailPageLink = `/events/${id}`

  return (
    <li className={styles.item}>
      <img src={'/' + image} alt={title} />

      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>

          <div className={styles.date}>
            <DateIcon/>
            <time>{readableDate}</time>
          </div>

          <div className={styles.address}>
            <AddressIcon/>
            <address>{location}</address>
          </div>

        </div>

        <div className={styles.actions}>
         <Button link={detailPageLink}>
          <span>Explore Event</span>
          <span className={styles.icon}><ArrowIcon/></span>
         </Button>
        </div>
      </div>
    </li>
  )
}
