import React from 'react';
import im from '../pages/Img/girl.png'; // Import the profile image directly (assuming it's in the assets folder)
import '../global.css'; // Import the global CSS for styling

function Homepage() {
  return (
    <div className="container"> {/* Use className for better React practices */}
      <nav className="nav">
        <div className="nav__content">
          <div className="logo">
            <a href="#">Hanan</a>
          </div>
          <label htmlFor="check" className="checkbox">
            <i className="ri-menu-line"></i>
          </label>
          <input type="checkbox" name="check" id="check" />
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Bio</a>
            </li>
            <li>
              <a href="#">Skill</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="section">
        <div className="section__container">
          <div className="content">
            <p className="subtitle">HELLO</p>
            <h1 className="title">
              I'm <span>Hanan<br />a</span> Web Developer
            </h1>
            <p className="description">
              Welcome to my web developer portfolio! I'm Hanan, a skilled and creative web developer with a passion for creating beautiful, responsive, and user-friendly websites. I've worked on a variety of web projects, ranging from personal blogs to e-commerce platforms.
            </p>
            <div className="action__btns">
              <button className="hire__me">Hire Me</button>
              <button className="portfolio">Portfolio</button>
            </div>
          </div>
          <div className="image">
            <img src={im} alt="profile" /> {/* Use process.env.PUBLIC_URL for dynamic image paths */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
