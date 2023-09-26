import React from 'react'
import EventList from '../../components/events/eventList'
import {getFeaturedEvent} from '../../Dummy_Data'

const fetchMyEvents = async()=>{
  const arrayData = []
  await  fetch("https://reacthttp-86c73-default-rtdb.firebaseio.com/events.json")
  .then(res=>res.json())
  .then(data=>{
    if(data){
      for(const key in data){
        arrayData.push({
          id:key,
          ...data[key]
        })
      }
    }

  })

     return arrayData
}


export default  function HomePage(props) {

  // const featuredEvents = getFeaturedEvent()

  return (
    <div>
        <EventList items={props.chi}/>
    </div>
  )
}


export async function getStaticProps(context){
  const fetchData = await fetchMyEvents()

  if(!fetchData || fetchData.length===0){
    return {
      notFound:true,
    }
  }
  return {
    props:{
      chi: fetchData
    }
  }
}