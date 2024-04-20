import React from 'react'
import { useState, useEffect} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import './SwiperNoSwiping.css'
import {register} from 'swiper/element/bundle'
import 'swiper/css'
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import flashcardImage from './img/flashcardsSS.jpg'
import ET from './img/Screenshot Demo App.jpg'
import ChicagoMorning from './img/sunriseSkyline.jpg'
import ChicagoAfternoon from './img/chiraq.jpg'
import ChicagoEvening from './img/chicagoEvening.jpg'
import ChicagoNight from './img/chicagoNight.jpg'
import Card from 'react-bootstrap/Card'


register();


const morning = {
  backgroundImage: `url(${ChicagoMorning})`,
  backgroundSize: 'cover', 
  backgroundRepeat: 'no-repeat',
  height: '60vh',
  width: '50vw',
  marginLeft: '0.6rem', 
  marginBottom: '1rem',
  borderRadius: '7px'
}

const afternoon = {
  backgroundImage: `url(${ChicagoAfternoon})`,
  backgroundSize: 'cover', 
  backgroundRepeat: 'no-repeat',
  height: '60vh',
  width: '50vw',
  marginLeft: '0.6rem', 
  marginBottom: '1rem',
  borderRadius: '7px'
};

const evening = {
  backgroundImage: `url(${ChicagoEvening})`,
  backgroundSize: 'cover', 
  backgroundRepeat: 'no-repeat',
  height: '60vh',
  width: '50vw',
  marginLeft: '0.6rem', 
  marginBottom: '1rem',
  borderRadius: '7px'
};

const night = {
  backgroundImage: `url(${ChicagoNight})`,
  backgroundSize: 'cover', 
  backgroundRepeat: 'no-repeat',
  height: '60vh',
  width: '50vw',
  marginLeft: '0.6rem', 
  marginBottom: '1rem',
  borderRadius: '7px'
};



export default function Swiper2() {

  
  const Widget = () => {

    var [time, setTime] = useState(new Date());
    const [date, setDate] = useState(new Date());
    
    useEffect(() => {
      var timer = setInterval(() => setTime(new Date()), 1000);
      return function cleanup() {
        clearInterval(timer);
      };
    });

    var amOrPm = new Date().toLocaleTimeString().split(" ")[1];
    var hour = new Date().toLocaleTimeString().split(":")[0];

    if (amOrPm == "AM" && hour >= 6 ) {
      return (
        <div className='container mt-5 d-flex justify-content-left' style={{height: '60vh', width: '40vw'}}>
                  <div className='card ' style={{height: '100%', width: '100%', borderRadius: '10px 10px 10px 10px'}}>
                    <div className='card-img' style={{
                      backgroundImage: `URL(${ChicagoMorning})`, 
                      backgroundSize: 'cover', 
                      backgroundRepeat: 'no-repeat', 
                      height: '100%', 
                      width: '100%', 
                      borderRadius: '10px'
                      }}>  

                      <div className='container-time' style={{color: 'whitesmoke'}}>
                        <h2>{time.toLocaleTimeString()}</h2>
                        <h2>{time.toLocaleDateString()}</h2>
                      </div>                            
                    </div>
                    <div className='card-title p-3 fw-bold fs-3'>Solar Clock Widget</div>
                    <div className='card-text mb-3'>Made with C#</div>
                  </div>
        </div>
      )
    }
    else if (amOrPm == "PM" && (hour <= 4 || hour == 12)) {
      return (
        <div className='container mt-5 d-flex justify-content-left' style={{height: '60vh', width: '40vw'}}>
                  <div className='card ' style={{height: '100%', width: '100%', borderRadius: '10px 10px 10px 10px'}}>
                    <div className='card-img' style={{
                      backgroundImage: `URL(${ChicagoAfternoon})`, 
                      backgroundSize: 'cover', 
                      backgroundRepeat: 'no-repeat', 
                      height: '100%', 
                      width: '100%', 
                      borderRadius: '10px'
                      }}>       
                      <div className='container-time' style={{color: 'whitesmoke'}}>
                        <h2>{time.toLocaleTimeString()}</h2>
                        <h2>{time.toLocaleDateString()}</h2>
                      </div>                              
                    </div>
                    <div className='card-title p-3 fw-bold fs-3'>Solar Clock Widget</div>
                    <div className='card-text mb-3'>Made with C#</div>
                  </div>
        </div>
      )
    }
    else if (amOrPm == 'PM' && (hour == 5)) {
      return (
        <div className='container mt-5 d-flex justify-content-left' style={{height: '60vh', width: '40vw'}}>
                  <div className='card ' style={{height: '100%', width: '100%', borderRadius: '10px 10px 10px 10px'}}>
                    <div className='card-img' style={{
                      backgroundImage: `URL(${ChicagoEvening})`, 
                      backgroundSize: 'cover', 
                      backgroundRepeat: 'no-repeat', 
                      height: '100%', 
                      width: '100%', 
                      borderRadius: '10px'
                      }}> 
                      <div className='container-time' style={{color: 'whitesmoke'}}>
                        <h2>{time.toLocaleTimeString()}</h2>
                        <h2>{time.toLocaleDateString()}</h2>
                      </div>                                    
                    </div>
                    <div className='card-title p-3 fw-bold fs-3'>Solar Clock Widget</div>
                    <div className='card-text mb-3'>Made with C#</div>
                  </div>
        </div>
      )
    }
    else if ((amOrPm == 'PM' && hour >= 6) || (amOrPm == 'AM' && (hour < 6 || hour == 12))) {
      return (
        <div className='container mt-5 d-flex justify-content-left' style={{height: '60vh', width: '40vw'}}>
                  <div className='card ' style={{height: '100%', width: '100%', borderRadius: '10px 10px 10px 10px'}}>
                    <div className='card-img' style={{
                      backgroundImage: `URL(${ChicagoNight})`, 
                      backgroundSize: 'cover', 
                      backgroundRepeat: 'no-repeat', 
                      height: '100%', 
                      width: '100%', 
                      borderRadius: '10px'
                      }}>     
                      <div className='container-time' style={{color: 'whitesmoke'}}>
                        <h2>{time.toLocaleTimeString()}</h2>
                        <h2>{time.toLocaleDateString()}</h2>
                      </div>                                
                    </div>
                    <div className='card-title p-3 fw-bold fs-3'>Solar Clock Widget</div>
                    <div className='card-text mb-3'>Made with C#</div>
                  </div>
        </div>
      )
    }

  }



  return (
    <div className='container'>
      

        <swiper-container 
        slides-per-view="3" 
        space-between="0" 
        centered-slides="true"
        loop="true"
        navigation="true"
        effect='coverflow'
        coverflow-effect-rotate="60"
        coverflow-effect-slide-shadows='false'
        >
          
            
              <swiper-slide>
                <div className='container mt-4 d-flex justify-content-left' style={{height: '60vh', width: '40vw'}}>
                  <div className='card ' style={{height: '100%', width: '100%', borderRadius: '10px 10px 10px 10px'}}>
                    <div className='card-img' style={{
                      backgroundImage: `URL(${flashcardImage})`, 
                      backgroundSize: 'cover', 
                      backgroundRepeat: 'no-repeat', 
                      height: '100%', 
                      width: '100%', 
                      borderRadius: '10px'
                      }}>                              
                    </div>
                    <div className='card-title p-3 fw-bold fs-3'>Flashcard App</div>
                    <div className='card-text mb-3'>Made with React</div>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                {Widget()}
              </swiper-slide>

              <swiper-slide>
              <div className='container mt-5 d-flex justify-content-left' style={{height: '60vh', width: '40vw'}}>
                  <div className='card ' style={{height: '100%', width: '100%'}}>
                    <img className='card-img' src={ET} style={{height: '100%'}}/>
                    <div className='card-title p-3 fw-bold fs-3'>Expense Tracker App</div>
                    <div className='card-text mb-3'>Made with Angular</div>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div className='container mt-5 d-flex justify-content-left' style={{height: '60vh', width: '40vw'}}>
                  <div className='card ' style={{height: '100%', width: '100%'}}>
                    <div className='card-img' style={{
                      backgroundImage: `URL(${flashcardImage})`, 
                      backgroundSize: 'cover', 
                      backgroundRepeat: 'no-repeat', 
                      height: '100%', 
                      width: '100%', 
                      borderRadius: '10px'
                      }}>                              
                    </div>
                    <div className='card-title p-3 fw-bold fs-3'>Flashcard App</div>
                    <div className='card-text mb-3'>Made with React</div>
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide>
                {Widget()}
              </swiper-slide>

              <swiper-slide>
              <div className='container mt-5 d-flex justify-content-left' style={{height: '60vh', width: '40vw'}}>
                  <div className='card ' style={{height: '100%', width: '100%'}}>
                    <img className='card-img' src={ET} style={{height: '100%'}}/>
                    <div className='card-title p-3 fw-bold fs-3'>Expense Tracker App</div>
                    <div className='card-text mb-3'>Made with Angular</div>
                  </div>
                </div>
              </swiper-slide>

        </swiper-container>

        



    </div>
  )
}
