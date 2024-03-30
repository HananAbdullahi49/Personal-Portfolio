import React from "react";
import Homepage from '../components/Homepage'
import Bio from "../components/Bio";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Homes =() =>{
   return( <div>
    <Homepage/>
   <Bio/>
   <Skills/>
   <Projects/>
   <Contact/>
   </div>
   )
   
}
export default Homes