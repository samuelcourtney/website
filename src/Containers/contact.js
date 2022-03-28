import React from "react";
import { Container, Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`

.jumbotron {
     background-color: rgb(0 0 0 / 90%);
     filter: grayscale(100%);
     background-size: fill;
     color: #ffe;

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
   color: #666666;
   margin-bottom: 200px;
 }
`;

export const contact = () => (
    <Styles>
        <Container>
        <Jumbotron>
    <div>
        <h1> Don't be shy!</h1> 
        <h3 className = "rellax" data-rellax-speed="-7"></h3>
        <h7 className = "rellax" data-rellax-speed="-7"><a href = "mailto:samuel@thecourtneyclan.com">✉️: samuel@thecourtneyclan.com</a></h7>
    </div>
    
    <div>
        <h7 className = "rellax" data-rellax-speed="-7"><a href = "tel:+1630-770-9601"> 📱: (630) 770-9601</a> </h7>
    </div>
    
    <div>
        <h7 className = "rellax" data-rellax-speed="-7"><a href = "https://www.linkedin.com/in/csamcourtney/"> 🔗: csamcourtney</a></h7>
    </div>

    <div>
        <h7 className = "rellax" data-rellax-speed="-7"><a href = "https://www.instagram.com/samuelxjc/?hl=en"> 📷: @samuelxjc</a></h7>
    </div>
    
    <div>
        <h7 className = "rellax" data-rellax-speed="-7"><a href = "https://twitter.com/samuelxjc"> 🐥: @samuelxjc</a></h7>
    </div>

    </Jumbotron>
    </Container>
    </Styles>
 
)