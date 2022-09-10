import React from 'react'
import { Fragment } from 'react'
import './social.css'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'



const Social = () => {
  return (
    <>
    <div className="display">
        <div className="icon">
            <a href="https://instagram.com/monfortdev?igshid=YmMyMTA2M2Y=" target="_blank"><BsInstagram/></a> 
        </div>
        <div className="icon">
           <a href="https://github.com/nilm9" target="_blank"> <AiOutlineGithub/></a> 
        </div>
        <div className="icon">
            <a href="https://www.linkedin.com/in/nil-monfort-761660213?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBup25yqFQxyWlbhyrQy4FA%3D%3D" target="_blank"> <BsLinkedin/></a> 
             
        </div>

        

    </div>

    </>
  )
}

export default Social