import React from 'react'
import CardIcon from '../icons/card-icon'
import AccBal from '../icons/accbal-icon'
import DetailWrapper from './detail-wrapper'
import styles from './detail.module.css'


export default function Detail(props) {
    const {accType, availableBal, image, imageAlt} = props

    return (
      <section className={styles.logistics}>
        <div className={styles.image} alt={imageAlt}>
          <img src={`/${image}`}/>
        </div>

        <ul className={styles.list}>
        <DetailWrapper icon={AccBal}>
        <span>{availableBal}</span>
        </DetailWrapper>

        <DetailWrapper icon={CardIcon}>
        <span>{accType}</span>
        </DetailWrapper>

        </ul>

        </section>
  )
} 