import React from 'react'
import "../../Styles/HomeStyle.css";
import Header from "../../Components/Layouts/Header"
import Section1 from "../../Pages/Home/Section1"
import Section2 from "../../Pages/Home/Section2"
import Section3 from "../../Pages/Home/Section3"

function Home(Section) {
  return (
    <>
    
      <Header />

      <Section1 /> 
      
      <Section2 />

      <Section3 />
    </>
  )
}

export default Home