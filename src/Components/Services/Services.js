import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import { motion } from "framer-motion";

const Services = () => {
  const transition = {duration : 1, type: 'spring'}
  return (
    <div className='services' id='Services'>
      {/* Left side */}
      <div className='awesome'>

        <span>My Awesome</span>
        <span>services</span>

        <span>It is a long established fact that a reader will be distracted by the readable content of a page when <br /> looking at its layout. The point of using Lorem Ipsum</span>

        <button className='button s-button'>Download CV</button>
        <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>

      </div>

      {/* right side */}
      <div className='cards'>
          <motion.div
           whileInView={{left: '14rem'}}
           initial = {{left : "8rem"}}
           transition={transition}
          
          
          style={{left:'14rem'}}>
            <Card 
            emoji ={HeartEmoji}
            heading = {"Design"}
            detail = {"Figma , Sketch , Photoshop , Adobe , Adobe xd"}
            
            />
          </motion.div>

          <motion.div
           whileInView={{left: '-4rem'}}
           initial={{left: '8rem'}}
           transition={transition}
          
          
          
          style={{left:'-4rem', top: '12rem'}}>
            <Card 
            emoji ={Glasses}
            heading = {"Developer"}
            detail = {"Html , Css , JavaScript , React"}
            
            />
          </motion.div>

          <motion.div 
             whileInView={{left: '12rem'}}
             initial={{left: '8rem'}}
             transition={transition}
          
          
          style={{left:'12rem', top: "19rem"}}>
            <Card 
            emoji ={Humble}
            heading = {"UI/UX"}
            detail = {"Figma , Sketch , Photoshop , Adobe , Adobe xd"}
            
            />
          </motion.div>
          <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>
      </div>
  
    </div>
  )
}

export default Services