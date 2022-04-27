import React, {useState} from 'react'
import { FaFacebookSquare,FaLinkedin } from "react-icons/fa";
import { AiOutlineInstagram,AiFillPhone,AiOutlineMail } from "react-icons/ai"
import { GoLocation } from "react-icons/go";
import { TiFlash } from "react-icons/ti";


import './footer.css'

const Footer = () => {

    const [sub,setSub] = useState("")

  return (
    <section  className='footer'>
            <h4>subscribe for update</h4>
        <form action="">
            <input type="text" placeholder='Enter your E-mail' id='sub' value={sub} onChange={(e) => {setSub(e.target.value)}} />
            <button>Subscribe</button>
        </form>
      <div className="lists">
          <div>
              <h3><TiFlash/>fast kitchen</h3>
                  <li> <GoLocation className="icons"/>   Lagos, Nigeria</li>
                  <li><AiFillPhone className="icons"/>   +234 000 400 1234</li>
                  <li><AiOutlineMail className="icons"/>  fastKitchen@gmail.com</li>
          </div>
          <ul>
              <h3>POLICIES AND INFO</h3>
                  <li>delivery information</li>
                  <li>Terms and Condition</li>
                  <li>Privacy policy and cookies Statement</li>
                  <li>Dispute Resolution</li>
                  <li>about us</li>
          </ul>
          <ul>
              <h3>HELPFUL LINKS</h3>
                  <li>contact us</li>
                  <li>returns</li>
                  <li>site map</li>
                  <li>wish list</li>
          </ul>
          <ul>
              <h3>QUICK LINKS</h3>
                  <li>newsletter</li>
                  <li>specials</li>
                  <li>affliate</li>
          </ul>
      </div>
      <hr />
      <div className="hr">
          <p>copyright 2020 fast kitchen . All right reserved </p>
          <ul>
              <li><FaFacebookSquare /></li>
              <li><AiOutlineInstagram /></li>
              <li><FaLinkedin /></li>
              <li className='with-icon'>EUR EN</li>
          </ul>
      </div>
    </section>
  )
}

export default Footer
