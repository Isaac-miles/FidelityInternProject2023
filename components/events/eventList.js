import React from 'react'
import EventItem from './eventItem'
import styles from './eventList.module.css'

export default function eventList(props) {
  return (
    <div>
      <ul  className={styles.list}>
        {props.items.map((event)=>(
          <EventItem title={event.title}
          key={event.id}
            id={event.id}
            image={event.image}
            location={event.location}
            date={event.date}
          /> 
        ))}
      </ul>
    </div>
  )
}
