import React from 'react'
import './SwiperNoSwiping.css'
import { useState, useEffect } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
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
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import { CardImg } from 'react-bootstrap'
import CardText from 'react-bootstrap/CardText'


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
  
  const OptimumPrime = () => {

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

    console.log("amOrPm", " ", amOrPm); 
    console.log("hour", " ", hour)

    if (amOrPm == "AM" && hour >= 6) {
      return (
        <Card style={{width: '53vw'}}>
          <Card.Body>
            <div style={morning}>
              <div className='container-time' style={{color: 'white', textAlign: 'right', paddingRight: '3rem', paddingTop: '1rem'}}>
                <h2>{time.toLocaleTimeString()}</h2>
                <h2 >{time.toLocaleDateString()}</h2>
              </div>
            </div>
          </Card.Body>
          <Card.Title>Clock Widget</Card.Title>
          <Card.Text><span style={{color: 'black'}}>Made with C#</span></Card.Text>
        </Card>
      )
    }
    else if (amOrPm == "PM" && (hour <= 4 || hour == 12)) {
      return (
        <Card style={{width: '53vw'}}>
          <Card.Body>
            <div style={afternoon}>
              <div className='container-time' style={{color: 'white', textAlign: 'right', paddingRight: '3rem', paddingTop: '1rem'}}>
                <h2>{time.toLocaleTimeString()}</h2>
                <h2 >{time.toLocaleDateString()}</h2>
              </div>
            </div>
          </Card.Body>
          <Card.Title>Clock Widget</Card.Title>
          <Card.Text><span style={{color: 'black'}}>Made with C#</span></Card.Text>
        </Card>
      )
    }
    else if (amOrPm == 'PM' && (hour == 5)) {
      return (
        <Card style={{width: '53vw'}}>
          <Card.Body>
            <div style={evening}>
              <div className='container-time' style={{color: 'white', textAlign: 'right', paddingRight: '3rem', paddingTop: '1rem'}}>
                <h2>{time.toLocaleTimeString()}</h2>
                <h2 >{time.toLocaleDateString()}</h2>
              </div>
            </div>
          </Card.Body>
          <Card.Title>Clock Widget</Card.Title>
          <Card.Text><span style={{color: 'black'}}>Made with C#</span></Card.Text>
        </Card>
      )
    }
    else if ((amOrPm == 'PM' && hour >= 6) || (amOrPm == 'AM' && (hour < 6 || hour == 12))) {
      return (
        <Card style={{width: '53vw'}}>
          <Card.Body>
            <div style={night}>
              <div className='container-time' style={{color: 'white', textAlign: 'right', paddingRight: '3rem', paddingTop: '1rem'}}>
                <h2>{time.toLocaleTimeString()}</h2>
                <h2 >{time.toLocaleDateString()}</h2>
              </div>
            </div>
          </Card.Body>
          <Card.Title>Clock Widget</Card.Title>
          <Card.Text><span style={{color: 'black'}}>Made with C#</span></Card.Text>
        </Card>
      )
    }

    

  }

export default function SwiperNoSwiping() {

  return (
    <div className='container-fluid'>
        
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            initialSlide={3}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className='swiper-container'
        >

            <div className='swiper-wrapper'>

                <SwiperSlide>
                  {OptimumPrime()}
                </SwiperSlide>

                <SwiperSlide>
                    <Card style={{width: '52vw'}}>
                      <Card.Body>
                        <Card.Img src={flashcardImage} />
                        <Card.Title>Flashcard</Card.Title>
                        <CardText><span style={{color: 'black'}}>Made with react</span></CardText>
                      </Card.Body>
                    </Card>
                </SwiperSlide>


                <SwiperSlide>
                    <Card style={{width: '52vw'}}>
                      <Card.Body>
                        <Card.Img src={ET} />
                        <Card.Title>Expense Tracker</Card.Title>
                        <CardText><span style={{color: 'black'}}>Made with Angular</span></CardText>
                      </Card.Body>
                    </Card>
                </SwiperSlide>


                <SwiperSlide>
                    <Card style={{width: '52vw'}}>
                      <Card.Body>
                        <Card.Img src={flashcardImage} />
                        <Card.Title>Flashcard</Card.Title>
                        <CardText><span style={{color: 'black'}}>Made with react</span></CardText>
                      </Card.Body>
                    </Card>
                </SwiperSlide>


                <SwiperSlide>
                    {OptimumPrime()}
                </SwiperSlide>


                <SwiperSlide>
                    <Card style={{width: '52vw'}}>
                      <Card.Body>
                        <Card.Img src={flashcardImage} />
                        <Card.Title>Flashcard</Card.Title>
                        <CardText><span style={{color: 'black'}}>Made with react</span></CardText>
                      </Card.Body>
                    </Card>
                </SwiperSlide>
            </div>
           
            
        </Swiper>


       

    </div>
  )
}
