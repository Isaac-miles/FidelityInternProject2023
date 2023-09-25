import React from 'react'
import EventList from '../../components/events/eventList'
import {getFeaturedEvent} from '../../Dummy_Data'

export default function HomePage() {
  const featuredEvents = getFeaturedEvent()
  return (
    <div>
        <EventList items={featuredEvents}/>
    </div>
  )
}
