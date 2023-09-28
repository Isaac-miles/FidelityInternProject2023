import React from 'react'
import MainFooter from './mainFooter'
export default function Footer(props) {
  return (
   <>
   <MainFooter/>

   <main>
    {props.children}
    </main>
   </>
  )
}