import React from "react";
import "./Intro.css";
import GitHub from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instargram from "../../img/instagram.png";
import vector1 from "../../img/Vector1.png";
import vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import glassesimoji from "../../img/glassesimoji.png";
import Crown from "../../img/crown.png";
import { motion } from "framer-motion";

import FloatingDiv from "../FloatingDiv/FloatingDiv";


function Intro() {

  const transition = {duration : 2, type: 'spring'}
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
          <span>Andrew Thomas</span>
          <span>
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets
          </span>
        </div>

        <button className="i-button">Hire me</button>
        <div className="i-icons">
          <img src={GitHub} />
          <img src={Instargram} />
          <img src={LinkedIn} />
        </div>
      </div>

      <div className="i-right">
        <img src={vector1} />
        <img src={vector2} />
        <img src={boy} />
        <motion.img
        initial ={{left: '-36%'}}
        whileInView={{left : '-24%'}}
        transition={transition}
        
        
        src={glassesimoji} />
        <motion.div
            initial ={{left: '74% ' , top: '-4%'}}
            whileInView={{left : '68%'}}
            transition={transition}
        
        style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div 
        
        initial ={{left: '9rem ' , top: '18rem'}}
        whileInView={{left : '0rem'}}
        transition={transition}
        
        
        style={{ top: "18rem", left: "orem" }}>
          <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>

        {/* Blur divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>

        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-19rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
