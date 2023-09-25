import React from 'react'
import EventList from '../components/events/eventList'
import {getAllEvent} from '../Dummy_Data'

export default function HomePage() {
  const allEvents = getAllEvent()

  return (
    <div>
        <EventList items={allEvents}/>
    </div>
  )
}
