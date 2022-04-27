import React, {useState} from 'react'
import { FaFacebookSquare,FaLinkedin,FaAngleDown } from "react-icons/fa";
import { AiOutlineInstagram,AiFillPhone,AiOutlineMail } from "react-icons/ai"
import { GoLocation } from "react-icons/go";
import { TiFlash } from "react-icons/ti";

import './footer.css'


const Resfooter = () => {
    const [company,setCompany] = useState(false)
    const [legal,setLegal] = useState(false)
    const [support,setSupport] = useState(false)
    const [hotels,setHotels] = useState(false)

     const [sub,setSub] = useState("")

  return (
    <section className='res-foot'>
            <h4>subscribe for update</h4>
        <form action="">
            <input type="text" placeholder='Enter your E-mail' id='sub' value={sub} onChange={(e) => {setSub(e.target.value)}} />
            <button>Subscribe</button>
        </form>
      <div className="res">
          <h1 onClick={() => setCompany(!company)}>ABOUT US <FaAngleDown className={`${company ? 'rotate' : null}`} /></h1>
          {
              company &&  <div className='alias'>
              <h3><TiFlash/>fast kitchen</h3>
                  <li> <GoLocation className="icons"/>   Lagos, Nigeria</li>
                  <li><AiFillPhone className="icons"/>   +234 000 400 1234</li>
                  <li><AiOutlineMail className="icons"/>  fastKitchen@gmail.com</li>
          </div>
          }
      </div>
      <div className="res">
          <h1 onClick={() => setLegal(!legal)}>POLICIES AND INFO <FaAngleDown className={`${legal ? 'rotate' : null}`}/></h1>
          {
              legal && <ul>
                  <li>delivery information</li>
                  <li>Terms and Condition</li>
                  <li>Privacy policy and cookies Statement</li>
                  <li>Dispute Resolution</li>
                  <li>about us</li>
          </ul>
          }
      </div>
      <div className="res">
          <h1 onClick={() => setSupport(!support)}>HELPFUL LINKS <FaAngleDown className={`${support ? 'rotate' : null}`}/></h1>
          {
              support &&  <ul>
                  <li>contact us</li>
                  <li>returns</li>
                  <li>site map</li>
                  <li>wish list</li>
          </ul>
          }
      </div>
      <div className="res">
          <h1 onClick={() => setHotels(!hotels)}>QUICK LINKS <FaAngleDown className={`${hotels ? 'rotate' : null}`}/></h1>
          {
              hotels && <ul>
                  <li>newsletter</li>
                  <li>specials</li>
                  <li>affliate</li>
          </ul>
          }
      </div>
      <hr />
      <div className="down">
      <ul>
              <li><FaFacebookSquare /></li>
              <li><AiOutlineInstagram /></li>
              <li><FaLinkedin /></li>
          </ul>
          <p >EUR EN</p>
      </div>
      <p>copyright 2020 travelWorld Global Limited. All right reserved. GIT_VERSION</p>
    </section>
  )
}

export default Resfooter
