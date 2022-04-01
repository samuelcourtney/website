import React from 'react'
import { Jumbotron as Jumbo, Container, Image, Row, Col, Jumbotron, Button} from 'react-bootstrap';
import './Home.css';
import styled from 'styled-components';
import blackBackground from '../src_assets/longboi.jpeg';
import degreepdf from '../src_assets/SamuelCourtney.pdf';
import resumepdf from '../src_assets/scr.pdf'
import blackBackground1 from '../src_assets/IMG_0222.jpg';
import formula from '../src_assets/formula.jpg';
import Scroller from '../Components/Scroller';
import sam from '../src_assets/IMG_0001.jpeg'

const Styles = styled.div`

.jumbotron {
  padding: 1rem 1rem;
  /* margin-bottom: 2rem; */
  background-color: black;
  border-radius: 0.3rem;
}

.text-center {
    text-align: center!important;
    background-color: black!important;
}

 a:link {
  color: wheat;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color:wheat;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: blue;
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}
 .img-thumbnail {

  background-color: ##808080;
  border: -4px solid #808080;
  border-radius: 20.25rem;
  max-width: 100%;
  height: 600px;
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

 .h3 {
   color: #FFFFFF;
   margin-bottom: 200px;
 }


 .rounded-circle {
  border-radius: 3%!important;
}

.IN {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
}
`;

export const home = () => (
<React.Fragment>

<Styles>
<Jumbotron>
    <Image src={sam} thumbnail roundedCircle justify-content="right"/>  
    </Jumbotron>
</Styles>

  <Styles>
    <Jumbotron>
      <div className = "rellax" data-rellax-speed="1">
      <h2><a href = "https://github.com/samuelcourtney">💻 GitHub </a></h2>
        <div>
        <h2><a href = "https://www.linkedin.com/in/csamcourtney/">🔗 LinkedIn </a></h2>
        </div>
        <h2><a href = "https://www.instagram.com/samuelxjc/?hl=en">📱 Instagram</a></h2>
{/* 
        <div className = "Aapp">
        <h2><a href = {resumepdf} target = "_blank">📄 Resume</a></h2>
        </div>
*/}
        <div>
          <h2><a href = {degreepdf} target = "_blank">🎓 Degree</a></h2>
        </div>

        <h2><a href="#/music" class="button">🎹 Music</a></h2>
      </div>
    </Jumbotron>
  </Styles>



{/*
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
*/}

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


<Scroller>
  </Scroller> 


  {/* this is to enable the rellax feature */}

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