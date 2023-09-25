import React,{Fragment} from 'react'
import { useRouter } from 'next/router'
import { getEventById } from '../../Dummy_Data'
import EventContent from '../../components/event-detail/event-content'
import EventSummary from '../../components/event-detail/event-summary'
import Detail from '../../components/event-detail/detail'

export default function EventDetailPage() {
  const router = useRouter()
  const eventId = router.query.slugId
  const event = getEventById(eventId)


  return (
    <Fragment>
    <EventSummary title={event.title} />
    <Detail 
      date={event.date}
      address={event.location}
      image={event.image}
      imageAlt={event.title}
    />
    <EventContent>
      <p>{event.description}</p>
    </EventContent>
    </Fragment>

  )
}
