import React from 'react'
import EventList from '../components/events/eventList'
import {getAllEvent} from '../Dummy_Data'
import { BrowserRouter } from 'react-router-dom'

export default function HomePage() {
  const allEvents = getAllEvent()
  console.log(allEvents)
  return (
    <div>
        <EventList items={allEvents}/>
    </div>
  )
}
