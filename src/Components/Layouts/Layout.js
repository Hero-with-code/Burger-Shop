import React from 'react'
import Header from './Header'

import Section1 from '../../Pages/Home/Section1'
import Section2 from '../../Pages/Home/Section2'
import Section3 from '../../Pages/Home/Section3'
import Section4 from '../../Pages/Home/Section4'
import Section5 from '../../Pages/Home/Section5'
import Section6 from '../../Pages/Home/Section6'
import Section7 from '../../Pages/Home/Section7'
import Footer from './Footer'

function Layout() {
  return (
    <>
    <Header />

    {/* Layout Home Section Hero Banner */}
      <Section1 /> 
      <Section2 />  
      <Section3 />  
      <Section4 /> 
      <Section5 />
      <Section6 />
      <Section7 />
      
    <Footer />
    </>
  )
}

export default Layout