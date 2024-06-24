import React from "react";
import "./Work.css";
import Upwork from "../../img/Upwork.png";
import Fiver from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { motion } from "framer-motion";


const Work = () => {
  return (
    <div className="works">
      <div className="awesome">
        <span>Works for All these</span>
        <span>Brands & Clients</span>

        <span>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when <br /> looking at its layout. The
          point of using Lorem Ipsum
          <br />
          a long established fact that a reader will be distracted by the
          readable content
          <br />
          a long established fact that a reader will be distracted <br />
        </span>

        <button className="button s-button">Hire mes</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      <div className="w-right">
        <motion.div
        initial ={{rotate:45}}
        whileInView={{rotate:0}}
        viewport={{margin : '-40px'}}
        transition={{duration : 3.5, type: 'spring'}}

        
        
        className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} />
          </div>

          <div className="w-secCircle">
            <img src={Fiver} />
          </div>

          <div className="w-secCircle">
            <img src={Amazon} />
          </div>

          <div className="w-secCircle">
            <img src={Shopify} />
          </div>

          <div className="w-secCircle">
            <img src={Facebook} />
          </div>
        </motion.div>

        {/* Background Circle */}

        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle blueYellow"></div>
      </div>
    </div>
  );
};

export default Work;
