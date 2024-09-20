import React from 'react'
import "../../Styles/HomeStyle.css";
import Header from "../../Components/Layouts/Header"
import Section1 from "../../Pages/Home/Section1"
import Section2 from "../../Pages/Home/Section2"
import Section3 from "../../Pages/Home/Section3"
import Section4 from "../../Pages/Home/Section4";
import Section5 from "../../Pages/Home/Section5";
import Section6 from "../../Pages/Home/Section6";
import Section7 from "../../Pages/Home/Section7";
import Section8 from '../../Pages/Home/Section8';
import Section9 from '../../Pages/Home/Section9';
import Footer from '../../Components/Layouts/Footer';

function Home(Section) {
  return (
    <>
    
      <Header />

      <Section1 /> 
      
      <Section2 />

      <Section3 />

      <Section4 />

      <Section5 />

      <Section6 />

      <Section7 />

      <Section8 />

      <Section9 />

      <Footer />
      
    </>
  )
}

export default Home