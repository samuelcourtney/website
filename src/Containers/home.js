import React from 'react'
import { Jumbotron as Jumbo, Container, Image, Row, Col} from 'react-bootstrap';
import './Home.css';
import styled from 'styled-components';
import blackBackground from '../src_assets/longboi.jpeg';
import blackBackground1 from '../src_assets/IMG_0222.jpg';
import formula from '../src_assets/formula.jpg';
import Scroller from '../Components/Scroller';

const Styles = styled.div`

.jumbo {
     background: url(${blackBackground1}) no-repeat right center;
     filter: grayscale(100%);
     background-size: cover;
     color: #ffe;
     height: 770px;
 }

 .jumbo1 {
  background-size: cover;
  color: #000;
  position: relative;
  height: 700px;
}
 
 .overlay {
     background-color: #000;
     opacity: 0.6;
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     z-index: -2;
 }
 .pimg {
     background: url(${formula}) no-repeat right center;
     filter: grayscale(100%);
     background-size: cover;
     color: #ffe;
     height: 5px;
 }

 .h3 {
   color: #666666;
   margin-bottom: 200px;
 }

 .jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 0rem;
  background-color: #e9ecef;
}

.glink{
  width: 50px;
  height: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  
}
.llink{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40px;
  height: 40px;
  margin-top: 7px;
}
.gmlink{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 140px;
  height: 70px;
  margin-bottom: 10px;
}
 
 .row {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      margin-right: 0px;
      margin-left: 0px;
}
`;

export const home = () => (
<React.Fragment>
  <Styles>
    <Jumbo fluid className = "jumbo">
        <Container>
        </Container>
    </Jumbo>
  </Styles>
 
 <Container>
  <div className="rellax" data-rellax-speed="5" data-rellax-zindex="5">
  <Styles> 
  <div className="rellax" data-rellax-speed="-0.5" data-rellax-zindex="5">
    <Jumbo fluid className = 'jumbo1'>
        <Container fluid className="row justify-content-center">
            <h1 align='center'>Samuel Courtney</h1>
            <br></br>
                <h3 className = "h3" align='center'>An experienced, recent college graduate with a creative mind, a track record of leading teams through project management, whilst being passionate about deep-tech innovation that leads to impact.</h3>
        </Container>
    </Jumbo>
    </div>
    
  </Styles>
  </div>
</Container>

<Styles>
  <div>
        <Row className="show-grid text-center">
          <Col xs={222} sm={4}>
            <Image className="glink" src="assets/GitHub-Mark.png" roundedCircle center fluid/>
          </Col> {/*work on clickable links*/}
          <Col xs={222} sm={4} className="person-wrapper">
            <Image className="llink" src="assets/768px-LinkedIn_logo_initials.png" center fluid/>
          </Col>
          <Col xs={222} sm={4} className="person-wrapper">
            <Image className="gmlink" src="assets/newgmaillogo.jpg" center fluid/>
          </Col>
        </Row> 
  </div>
</Styles>

<Styles>
<div className="rellax" data-rellax-speed="7" data-rellax-percentage="0.5" data-rellax-zindex="6">       
<div className="rellax" data-rellax-speed="1" data-rellax-zindex="1">
  <h2 align = 'center'>samuel courtney
  <br/> samuel courtney
  <br/> samuel courtney
  <br/> samuel courtney
  <br/> samuel courtney
  <br/> samuel courtney
  <br/> samuel courtney 
  <br/> samuel courtney  
  <br/> samuel courtney 

  </h2>
  </div>

  </div>
</Styles>


{/* some code to mess/scrap
  <div className="rellax" data-rellax-speed="30" data-rellax-zindex="1">
  <h2 align = 'center'>samuel courtney
  <br/> samuel courtney
  <br/> samuel courtney
  <br/> samuel courtney
  <br/> samuel courtney
  <br/> samuel courtney
  <br/> samuel courtney
  <br/> samuel courtney
  <br/> samuel courtney
  <br/> samuel courtney
  <br/> samuel courtney
  <br/> samuel courtney
  <br/> samuel courtney
  <br/> samuel courtney
  <br/> samuel courtney
  </h2>
  </div>
*/}

{/* full page scrolling */}

  <Scroller>
  </Scroller> {/* this is to enable the rellax feature */}

{/* ADDING BLOBS 
  <div className="rellax" data-rellax-speed="7" data-rellax-percentage="0.5" data-rellax-zindex="6">       
  <Container fluid className="row justify-content">
  <Row>
    <Col xs={6} md={4}>
    <Image className="pimg" src="assets/organic_blob_1.png" fluid/>
    </Col>
    <Col xs={8} md={4}>
    </Col>
    <Col xs={6} md={4}>
      <Image className="pimg" src="assets/organic_blobs_2.png" fluid justify-content="right"/>  
    </Col>
   </Row>
  </Container>
    I’m that default chill speed of "-2"
  </div>

extra shit
  <div className="rellax" data-rellax-speed="7">
    I’m super fast!! 
  </div>
  <div className="rellax" data-rellax-speed="-4">
    I’m extra slow and smooth
  </div>
*/}
</React.Fragment>

)




/*
import React from "react";

export const home = () => (
    <div>
        <h2>hello :~)  <br/><br/> </h2>
        <h3 align='center'>there is nothing here yet!</h3>
        <p align ="center">so we beat on, boats against the current, borne back ceaselessly into the past. </p>
    </div>
)*/

//saved code for picturs
/*
          <Row className="show-grid text-center">
          <Col xs={12} sm={4}>
            <Image src="assets/sam1.jpg" roundedCircle fluid/>
            <h3>Sam</h3>
            <p align='left'>a hard-working, self-motivated, and fast-learning student in Electrical and Computer Engineering at The University of Alabama, eager to apply undergraduate education and professional experience to successfully deliver projects and efficiently complete tasks.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/paddy1.jpg" roundedCircle fluid/>
            <h3>Bolger</h3>
            <p>Only the finest</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/reeder.jpg" roundedCircle fluid/>
            <h3>Reeder</h3>
            <p align='right'>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
        </Row>    
*/ 