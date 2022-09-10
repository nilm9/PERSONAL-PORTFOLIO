import React from 'react'
import APV from '../../assets/APV.png'
import './portfolio.css'
import WT from '../../assets/WT.png'
import './portfolio.css'
import MAI from "../../assets/MAI.png"
import TRAVEL from "../../assets/TRAVEL.png"

const Portfolio = () => {
  const data =[ {
    id: 1,
    image: APV,
    title: "APV, MERN App for Vet logistics"
  },
  {
    id: 2,
    image: TRAVEL,
    title: "Traveling Agency, made with Node & MYSQL",

  },
  {
    id: 3,
    image: WT,
    title: "WiTruck Website, with HTML, CSS & JS",

  },
  {
    id: 4,
    image: MAI,
    title: "Mindful & Inspirational Website, done with WordPress",
    
  },
  // {
  //   id: 5,
  //   image: WT,
  //   title: "WiTruck Website, with HTML, CSS & JS",
    
  // },
  // {
  //   id: 6,
  //   image: WT,
  //   title: "WiTruck Website, with HTML, CSS & JS",
    
  // }
];
  return (
    <section id='portfolio' className='bg-port'>


     <div className="container ">

     <h5 className='text-pf'>My recent Work</h5>
      <h2 className='text-pf'>Portfolio</h2>



      <div className=" portfolio__container">
        

        {
          data.map(({id, image, title}) =>{

            return(
              <article key={id} className='portfolio__item'>
                 <div className="portfolio__item-image">
                  <img src={image} alt="" />
                 </div>
                 <div className="content-img">
                                   <h3>{title}</h3>

                 <button className='btn btn-primary'><a href="https://github.com/nilm9">View more</a> </button>
                 </div>

              </article>
            )


          })





        }
     </div>
      </div>
    </section>
  )
}

export default Portfolio