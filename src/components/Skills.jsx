import React from 'react'
import { FaReact } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import { MdOutlineSocialDistance } from "react-icons/md";
function Skills() {
  return (
    <div>
        <div>
  <div id="skills" className='headeing'>
    <h1>my skills</h1> 
  </div>
  <div className='services'>
    <div className='service'>
      <i className=''><FaReact /></i>
      <h3>web Development</h3>
      <p>we'll build a site that looks awesome and works well on all devices.
        it'll help your business hine online and make it easy for people to 
        find you </p>
       <a href="">learn more</a>
    </div>
    <div className='service'>
      <i className=''><MdWeb /></i>
      <h3>blog writing </h3>
      <p>our writers create intersting posts that attract readers and boost
        your website's visibilty on the internet  </p>
       <a href="">learn more</a>
       
    </div>
    <div className='service'>
      <i className=''><MdOutlineSocialDistance /></i>
      <h3>social marketing </h3>
      <p> we create cool posts, run ads, and manage your accounts to help you connect with more people and grow your busness online</p>
       <a href="">learn more</a>
       
    </div>

  </div>
</div>
    </div>
  )
}

export default Skills