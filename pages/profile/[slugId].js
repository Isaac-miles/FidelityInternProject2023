import React,{Fragment, useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import { getEventById } from '../../Dummy_Data'
import ProfileContent from '../../components/profile-detail/profile-content'
import ProfileSummary from '../../components/profile-detail/profile-summary'
import Detail from '../../components/profile-detail/detail'

export default function ProfileDetailPage() {
    const [fetchedProfile, setFetchedProfile] = useState()
    const router = useRouter()
    const profileId = router.query.slugId
    const profile = getEventById(profileId)

    useEffect(()=>{
        setFetchedProfile(profile)
      },[profile])
  
  
    if(!fetchedProfile){
      return (
        <h1>loading.....</h1>
      )
    }

    return (
      <Fragment>
        <ProfileSummary name={fetchedProfile.name} />
        <Detail 
            availableBal={fetchedProfile.availableBal}
            accType={fetchedProfile.accType}
            image={fetchedProfile.image}
            imageAlt={fetchedProfile.name}
        />
        <ProfileContent>
            <p>{fetchedProfile.accStatus}</p>
        </ProfileContent>
      </Fragment>
  
    );
}

