import React from "react";
import { Container, Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';
import Scroller from '../Components/Scroller';


const Styles = styled.div`

.jumbotron {
     background-color: rgb(0 0 0 / 90%);
     background-size: fill;
     color: #ffe;
     height: 1000px;

 }

 .jumbo {
    background-color: rgb(0 0 0 / 90%);
    background-size: fill;
    color: #ffe;
    height: 370px;

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
  h1 {
    color: white;
}
h7{ color :white;}


`;

export const contact = () => (
    <React.Fragment>

<div>
        <Styles>
            <Container>
                <Jumbotron>
                    <h1>Onward, friend. ⬇️</h1>
                    <h7 className = "rellax" data-rellax-speed="17"> Or should I say, downward...? I digress.</h7>
                </Jumbotron>
                
            </Container>
        
        
        </Styles>
        </div>
    <Styles>
        <Container>
        <Jumbotron className="jumbo">
    <div>
        <h1 className = "rellax" data-rellax-speed="10"> Don't be shy!</h1> 
        <h1 className = "rellax" data-rellax-speed="5"><a href = "mailto:samuel@thecourtneyclan.com">✉️: samuel@thecourtneyclan.com</a></h1>

        <h2 className = "rellax" data-rellax-speed="3.5"><a href = "https://www.linkedin.com/in/csamcourtney/"> LinkedIn_csamcourtney</a></h2>

        <h3 className = "rellax" data-rellax-speed="2.1"><a href = "https://www.instagram.com/samuelxjc/?hl=en"> IG_@samuelxjc</a></h3>

        <h7 className = "rellax" data-rellax-speed="1"><a href = "tel:+1630-770-9601"> SECRET_SAUCE_DO_NOT_TOUCH_OR_YOU_WILL_GET_FIRED._primary_power_CELL_ph (understand the code to get this one.)</a> </h7>
    </div>
    

    </Jumbotron>
    </Container>
    </Styles>

<Scroller></Scroller>

</React.Fragment>
    
 
)