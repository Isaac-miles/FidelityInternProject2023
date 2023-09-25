import React from 'react'
import AddressIcon from '../icons/address-icon'
import DateIcon from '../icons/date-icon'
import DetailWrapper from './detail-wrapper'
import styles from './detail.module.css'

export default function Detail(props) {
  const {date,address, image, imageAlt} = props

  const readableDate = new Date(date).toLocaleDateString('en-US',{
    day: 'numeric',
    month:'long',
    year:'numeric'
  })
  const addressText = address.replace(',', '\n')
  return (
    <section className={styles.logistics}>
      <div className={styles.image} alt={imageAlt}>
        <img src={`/${image}`}/>
      </div>

    <ul className={styles.list}>
    <DetailWrapper icon={DateIcon}>
      <time>{readableDate}</time>
    </DetailWrapper>

    <DetailWrapper icon={AddressIcon}>
      <address>{addressText}</address>
    </DetailWrapper>

    </ul>

    </section>
  )
}
