import React from 'react'
import APV from '../../assets/APV.png'
import './portfolio.css'
import WT from '../../assets/WT.png'
import './portfolio.css'
import MAI from "../../assets/MAI.png"
import TRAVEL from "../../assets/TRAVEL.png"
import MERAKI from "../../assets/MERAKI.png"
import { useEffect, useState } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

const Portfolio = () => {

  const [load ,setLoad] = useState(false);
  console.log(load);

  const data =[ {
    id: 1,
    image: APV,
    title: "APV, MERN App for Vet logistics",
    web: null
  },
  {
    id: 2,
    image: TRAVEL,
    title: "Traveling Agency, made with Node & MYSQL",
    web: null


  },
  {
    id: 3,
    image: WT,
    title: "WiTruck Website, with HTML, CSS & JS",
    web: "https://witruck.es/"


  },
  {
    id: 4,
    image: MAI,
    title: "Mindful & Inspirational Website, done with WordPress",
    web: 'https://mindfulandinspirational.com/'
    
  },
  {
    id: 5,
    image: MERAKI,
    title: "Meraki Group Website, done with WordPress",
    web: 'https://associaciomeraki.com/'

    
  },
  // {
  //   id: 6,
  //   image: WT,
  //   title: "PROVA2",
    
  // }
];
    useEffect(()=>{
      Aos.init({duration: 2000})  

    },[])
  return (
    <section id='portfolio' className='bg-port'>


     <div className="container ">

     <h5 className='text-pf'>My recent Work</h5>
      <h2 className='text-pf'>Portfolio</h2>



      <div className=" portfolio__container" >
        

        {
          data.map(({id, image, title, web}) =>{

            return(
              <article key={id} className={!load&&id>4 ? 'portfolio__item hidden  ' :'portfolio__item '} data-aos="fade-up">
                 <div className="portfolio__item-image">
                  <img src={image} alt="" />
                 </div>
                 <div className="content-img">
                                   <h3>{title}</h3>

                 <button className='btn btn-primary' ><a target="_blank" href={ web ? web :"https://github.com/nilm9"}>View more</a> </button>
                 </div>

              </article>
            )
          })
        }
     </div>
     <button className='btn' onClick={()=>setLoad(!load)}> {load? 'Load less' : 'Load more' } </button>
     
      </div>
    </section>
  )
}

export default Portfolio