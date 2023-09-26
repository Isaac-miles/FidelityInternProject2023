import React,{Fragment,useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import { getEventById } from '../../Dummy_Data'
import EventContent from '../../components/event-detail/event-content'
import EventSummary from '../../components/event-detail/event-summary'
import Detail from '../../components/event-detail/detail'

export default function  EventDetailPage() {
  const [fetchedEvent, setFetchedEvent] = useState()
  const router = useRouter()
  const eventId = router.query.slugId
  const event =  getEventById(eventId)

    useEffect(()=>{
      setFetchedEvent(event)
    },[event])


  if(!fetchedEvent){
    return (
      <h1>loading.....</h1>
    )
  }

    return (
      <Fragment>
      <EventSummary title={fetchedEvent.title} />
      <Detail 
        date={fetchedEvent.date}
        address={fetchedEvent.location}
        image={fetchedEvent.image}
        imageAlt={fetchedEvent.title}
      />
      <EventContent>
        <p>{fetchedEvent.description}</p>
      </EventContent>
      </Fragment>
  
    )
  }




