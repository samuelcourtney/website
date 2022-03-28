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
     background-color: rgb(0 0 0 / 90%);
     filter: grayscale(100%);
     background-size: fill;
     color: #ffe;
     background-image: url("../img/jumbotron_bg.jpg");
    background-size: cover;

 }

 .img-thumbnail {
  padding: 0.1rem;
  background-color: #fff;
  border: -4px solid #dee2e6;
  border-radius: 20.25rem;
  max-width: 100%;
  height: 500px;
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

.jumbotron {
  padding: 2px 1em;
  margin-bottom: 2rem;
  border-radius: 0.3rem;
}
`;

export const home = () => (
<React.Fragment>

<Styles>
  <Jumbo className = "rellax" data-rellax-speed="-1" center>
    <Image src={sam} fluid thumbnail roundedCircle center justify-content="right"/>  
  </Jumbo>
</Styles>

  <Styles>
    <Jumbotron>
      <div className = "rellax" data-rellax-speed="-2">
      <h2 ><a href = "https://github.com/samuelcourtney">💻 GitHub </a></h2>
        <div>
        <h2><a href = "https://www.linkedin.com/in/csamcourtney/">🔗 LinkedIn </a></h2>
        </div>
        <h2><a href = "https://www.instagram.com/samuelxjc/?hl=en">📱 Instagram</a></h2>

        <div className = "Aapp">
          <a href = {resumepdf} target = "_blank"><h2>📄 Resume</h2></a>
        </div>

        <div className = "App">
          <a href = {degreepdf} target = "_blank"><h2>🎓 Degree</h2></a>
        </div>



        <a href="#/about" class="button"><h2>📚 Studies</h2></a>
        <a href="#/music" class="button"><h2>🎹 Music</h2></a>
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

{/*
<Scroller>
  </Scroller> 
*/ }

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