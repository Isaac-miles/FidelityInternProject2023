import React from 'react'
import MainHeader from './mainHeader'
export default function Nav(props) {
  return (
   <>
   <MainHeader/>

   <main>
    {props.children}
    </main>
   </>
  )
}
