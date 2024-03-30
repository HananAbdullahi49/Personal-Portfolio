import React from 'react'
import contact from"../pages/Img/contact.png"
function Contact() {
  return (
    <div className='Bodys'>
 <div className="contact-container">
 <div className="contact-content">
<div className="image-box">
<img src={contact} alt="" />
 </div>
<form action="#">
<div className="topic">Send us a message</div>
<div className="input-box">
<input type="text" required />
 <label>Enter your name</label>
 </div>
 <div className="input-box">
 <input type="text" required />
<label>Enter your email</label>
</div>
<div className="message-box">
 <textarea></textarea>
 <label>Enter your message</label>
</div>
 <div className="input-box">
     <input type="submit" value="Send Message" />
    </div>
    </form>
    </div>
    </div>
    </div>
  )
}

export default Contact