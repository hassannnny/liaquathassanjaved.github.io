import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import myLogo from './img/cocneptpng.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import flashcardImage from './img/flashcardsSS.jpg';
import ET from './img/Screenshot Demo App.jpg';
import Colorado from './img/Colorado.jpg';
import { motion } from "framer-motion";
import ChicagoMorning from './img/sunriseSkyline.jpg'
import ChicagoAfternoon from './img/chiraq.jpg'
import ChicagoEvening from './img/chicagoEvening.jpg'
import ChicagoNight from './img/chicagoNight.jpg'
import Swiper2 from './Swiper2';
import Resume from '../src/JavedResumeIT.pdf';
import * as Icon from 'react-bootstrap-icons'
import TextTransition, { presets } from 'react-text-transition';

const morning = {
  backgroundImage: `url(${ChicagoMorning})`,
  backgroundSize: 'cover', 
  backgroundRepeat: 'no-repeat',
  height: '70vh',
  width: '56.5vw',
  marginLeft: '0.6rem', 
  marginBottom: '1rem',
  borderRadius: '7px'
}

const afternoon = {
  backgroundImage: `url(${ChicagoAfternoon})`,
  backgroundSize: 'cover', 
  backgroundRepeat: 'no-repeat',
  height: '70vh',
  width: '56.5vw',
  marginLeft: '0.6rem', 
  marginBottom: '1rem',
  borderRadius: '7px'
};

const evening = {
  backgroundImage: `url(${ChicagoEvening})`,
  backgroundSize: 'cover', 
  backgroundRepeat: 'no-repeat',
  height: '70vh',
  width: '56.5vw',
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

const Labels = ['Full Stack Engineer', 'Web Developer', 'A+ Computer Repair', 'Network+', 'Coder of this website']

function App() {
  
  const [toggle, setToggle] = useState(true);

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1), 3000);
      return () => clearTimeout(intervalId);
  }, []);


  return (
    <div className="App">

    <Navbar expand="lg" style={{height: "10vh", paddingLeft: '10vw'}}>
      <Container fluid>
        <Navbar.Brand style={{color: "whitesmoke", fontWeight: "bold"}}>portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link className='px-3' href='#projectsPage' style={{color: "white"}} onClick={() => setToggle(!toggle)}>Projects</Nav.Link>
            <Nav.Link href={Resume} target='_blank' title='Resume' className='px-3'style={{color: "white"}}>
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container fluid style={{justifyContent: 'right', paddingRight: '10vw'}}>
        <Nav.Link className='px-4' href='https://www.linkedin.com/in/liaquathassanjaved/' target='_blank' style={{color: "white"}}>
          <Icon.Linkedin size={30} />
        </Nav.Link>
        <Nav.Link className='px-4' href='https://github.com/hassannnny' style={{color: "white"}}>
          <Icon.Github size={30}/>
        </Nav.Link>
        <Nav.Link className='px-4' href="mailto:hassanjaved6336@gmail.com" target='_blank' style={{color: "white"}}>
          <Icon.Envelope size={30}/>
        </Nav.Link>
      </Container>
    </Navbar>

     <Container fluid>

        {/* <Row id='topRow' className='justify-content-md-center justify-content-sm-left' >

            <Col lg={5} sm={1} className=''>
              <motion.img 
              id='myLogo'
              className='img-fluid'
              initial ={{repeatDelay: 0}}
              animate= {{rotate: [0, 360], scale: [1, 1, 1, 1, 1]}}
              transition={{duration: 2, 
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 3 }}
              
              src={myLogo}
              alt='logo'
            /></Col>
            
        </Row> */}

        {/* <Row className='justify-content-md-center' id='rowName' style={{height: '30vh'}}>
          <Col md={12} style={{color: 'whitesmoke', fontSize: '60px', height: '2vh'}}><span className='firstAndLastName'>Liaquat <span className='middleName' style={{fontStyle: 'italic', fontSize: '60px'}}>Hassan</span> Javed</span></Col>
          <Col md={12} style={{color: 'whitesmoke', fontSize: '16px'}}>Genius. Billionare. Playboy. Philanthropist.</Col>
        </Row> */}


        <Row style={{height: '90vh'}} className='align-items-center'>
          <Col md={7} style={{textAlign: 'left', paddingLeft: '10vw'}}>
            <h3 style={{color: 'white', fontFamily: 'Prompt300', fontSize: '60px'}}>&#123; Liaquat</h3>
            <h1 style={{color: 'white', fontFamily: 'Prompt300', fontSize: '90px'}}>Hassan</h1>
            <h3 style={{color: 'white', fontFamily: 'Prompt300', fontSize: '60px'}}>Javed &#125;</h3>
            

            <h5 style={{color: 'white', paddingTop: '10vh', fontFamily: 'Prompt300'}}>
            <TextTransition springConfig={presets.wobbly}>{Labels[index % Labels.length]}</TextTransition>
            </h5>

          </Col>


          <Col md={5} style={{paddingRight: '10vw'}}>

            <motion.img 
              id='myLogo'
              className='img-fluid'
              initial ={{repeatDelay: 0}}
              animate= {{rotate: [0, 360], scale: [1, 1, 1, 1, 1]}}
              transition={{duration: 2, 
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 3 }}
              src={myLogo}
              alt='logo'
            />

          </Col>

        </Row>


      </Container>

      <Container fluid id='projectsPage' style={{height: 'auto', paddingBottom: '10vh', paddingRight: '0px'}}>

            <Row><h1 style={{fontSize: '100px', paddingBottom: '3vh', fontFamily: 'serif', paddingRight: '0px'}}>projects</h1></Row>

            <Row style={{height: 'auto'}}>

              <Swiper2 />
                
            </Row>

      </Container>
       
      {!toggle && (<></>)}
            
    </div>
  );
}

export default App;



{/* <h1 style="font-family: 'Amiri', serif; text-align: center; padding-top: 50vh; color:aliceblue">حَسْبُ الآدَمِيِّ لُقَيْمَاتٌ يُقِمْنَ صُلْبَهُ</h1> */}


{/* <img src={myLogo} className='myLogo' alt='logo'/> */}




{/* <Container fluid>

<Row id='topRow' className='justify-content-md-center justify-content-sm-left' >

    <Col lg={5} sm={1} className=''>
      <motion.img 
      id='myLogo'
      className='img-fluid'
      initial ={{repeatDelay: 0}}
      animate= {{rotate: [0, 360], scale: [1, 1, 1, 1, 1]}}
      transition={{duration: 2, 
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 3 }}
      
      src={myLogo}
      alt='logo'
    /></Col>
    
</Row>

<Row className='justify-content-md-center' id='rowName' style={{height: '30vh'}}>
  <Col md={12} style={{color: 'whitesmoke', fontSize: '60px', height: '2vh'}}><span className='firstAndLastName'>Liaquat <span className='middleName' style={{fontStyle: 'italic', fontSize: '60px'}}>Hassan</span> Javed</span></Col>
  <Col md={12} style={{color: 'whitesmoke', fontSize: '16px'}}>Genius. Billionare. Playboy. Philanthropist.</Col>
</Row>


</Container> */}