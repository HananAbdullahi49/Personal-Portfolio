import React from 'react'
import icon1 from '../pages/Img/image-2.jpg'
import icon2 from '../pages/Img/image-1.jpg'
import icon7 from '../pages/Img/image-7.jpg'
import icon4 from '../pages/Img/image-4.jpg'
import icon5 from '../pages/Img/image-5.jpg'
import icon6 from '../pages/Img/image-6.jpg'
function Project() {
  return (
    <div>
        <div id='projects' className="containeres">

<h1 className="heading">my Projects</h1>

<div className="box-containers">

    <div className="box-1">
        <img src={icon1} alt="" />
        <h3> healthcare website</h3>       
        <a href="#" className="btn">Live Demo</a>
    </div>
    <div className="box-1">
   <img src={icon2} alt="" />
        <h3>Contact website</h3>
        <a href="#" className="btn">Live Demo</a>
    </div>
    <div className="box-1">
      <img src={icon7} alt="" />
        <h3>Calculator website</h3>    
        <a href="#" className="btn">Live Demo</a>
    </div>
    <div className="box-1">
       <img src={icon4} alt="" />
        <h3>car rental system</h3>
        <a href="#" className="btn">Live Demo</a>
    </div>
    <div className="box-1">
   <img src={icon5} alt="" />
        <h3>school management system</h3>
        <a href="#" className="btn">Live Demo</a>
    </div>
    <div className="box-1">
      <img src={icon6} alt="" />
        <h3>Task management system</h3>
        <a href="#" className="btn">Live Demo</a>
    </div> 
</div> 
</div>
    </div>
  )
}
export default Project