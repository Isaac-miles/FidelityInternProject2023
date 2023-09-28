import React from 'react'
import EventItem from './eventItem'
import styles from './eventList.module.css'

export default function eventList(props) {
  return (
    <div>
      <ul  className={styles.list}>
        {props.items.map((event)=>(
          <EventItem name={event.name}
          key={event.id}
            id={event.id}
            image={event.image}
            accType={event.accType}
            availableBal={event.availableBal}
            accStatus={event.accStatus}
          /> 
        ))}
      </ul>
    </div>
  )
}
