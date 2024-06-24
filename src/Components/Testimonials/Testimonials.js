import React from 'react'
import './Testimonials.css'
import { Swiper,SwiperSlide } from 'swiper/react'
import profilePic1 from "../../img/profile1.jpg"
import profilePic2 from "../../img/profile2.jpg"
import profilePic3 from "../../img/profile3.jpg"
import profilePic4 from "../../img/profile4.jpg"
import { Pagination } from 'swiper/modules'
import 'swiper/css/pagination';
import 'swiper/css'

const Testimonials = () => {

 const  client =[{
    img : profilePic1,
    review :" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, an"
  },

  {
    img : profilePic2,
    review :" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, an"
  },


  {
    img : profilePic3,
    review :" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, an"
  },


  {
    img : profilePic4,
    review :" Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, an"
  },

]
  return (
    <div className='t-wrapper' id='Testimonials'>
      <div className='t-heading'>
        <span>Clients always get</span>
        <span> Exceptional Work</span>
        <span> from me....</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
        
      </div>

      {/* slider */}

      <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination ={{clickable : true}}
      
      
      >
          {client.map((client, index)=>{
            return(
              <SwiperSlide key={index}>
                <div className='testimonial'>
                <img src={client.img} />
                <span>{client.review}</span>
                </div>
              </SwiperSlide>
            )
          })}

      </Swiper>

    </div>
  )
}

export default Testimonials