import React from 'react'
import EventList from '../../components/events/eventList'
import {getEnrolledEvent} from '../../Dummy_Data'

const fetchMyProfiles = async()=>{
  const arrayData = []
  await fetch("https://internproject-bf7f6-default-rtdb.firebaseio.com/User%20Data.json")
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

export default function ProfilePage(props) {
  //const enrolledProfile = getEnrolledEvent(props)

  return (
    <div>
      <EventList items = {props.userData}/>
    </div>
  );
}

export async function getStaticProps(context){
  const fetchData = await fetchMyProfiles()

  if(!fetchData || fetchData.length===0){
    return {
      notFound:true,
    }
  }
  return {
    props:{
      userData: fetchData
    }
  }
}