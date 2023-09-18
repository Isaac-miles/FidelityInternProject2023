import '../styles/globals.css'
import Nav from '../components/nav/nav'

function MyApp({ Component, pageProps }) {
  return (

   <Nav > 
   <Component {...pageProps} /> 
  
   </Nav>
       
       
     
   
      
  )
}

export default MyApp
