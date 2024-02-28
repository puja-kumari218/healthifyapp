import React from 'react';
import "./Footer.scss";
import {FaFacebookSquare} from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer-container'>
         <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Healthify <i>A Healthy Diet, A Better Life</i> <br/> Helps Senior Adults for Physically, Spiritually, Mentally Healthy. </p>
            <img src="https://masterbundles.com/wp-content/uploads/2023/04/1-342-2.jpg"  id="logo-img" />
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Blogs</h6>
            <ul className="footer-links">
              <li>
                <Link to="https://www.greatseniorliving.com/articles/yoga-for-seniors">Yoga Benefits</Link>
              </li>
              <li>
                <Link to="https://iskcondesiretree.com/profiles/blogs/list/tag/spiritual">Spiritual</Link>
              </li>
              <li>
                <Link to="https://www.healthifyme.com/blog/balanced-diet/">Balanced Diet</Link>
              </li>
              <li>
                <Link to="https://realhappiness.org/blog/">Meditation</Link>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Videos Links</h6>
            <ul className="footer-links">
              <li>
                <Link to="https://www.youtube.com/@SwamiMukundanandaHindi">Spiritual</Link>
              </li>
              <li>
                <Link to="youtube.com/watch?v=a8IKp0znasY">Physical Health</Link>
              </li>
              <li>
                <Link to="https://www.youtube.com/@GunjanShouts/videos">Diet</Link>
              </li>
              <li>
                <Link to="https://www.youtube.com/@SpiritualMantra">Meditation</Link>
              </li>
              <li>
                <Link to="https://www.youtube.com/@SoothingRelaxation">Instrumental Music</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by   &nbsp; 
         <Link to="/">Healthify</Link>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <Link className="facebook" to="/"><FaFacebookSquare /></Link>
              </li>
              <li>
                <Link className="twitter" to="/"><BsInstagram /></Link>
              </li>
              <li>
                <Link className="dribbble" to="/"><BsTwitter /></Link>
              </li>
              <li>
                <Link className="linkedin" to="/"><BsLinkedin /></Link>
              </li>   
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;