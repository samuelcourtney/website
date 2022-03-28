import React from 'react';
import { Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import blackBackground from '../src_assets/backgroundr.jpg';

const Styles = styled.div`
 .jumbo {
     background: url(${blackBackground}) no-repeat center;
     background-size: cover;
     color: #ffe;
     position: relative;
     z-index: -2;

 }

 .overlay {
     background-color: #000;
     opacity: 0.6;
     position: absolute
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     z-index: -2;
 }
`;

export const Jumbotron = () => (
    <Styles> 
        <Jumbo fluid className = "jumbo">
            <div className="overlay"></div>
            <Container>
            </Container>
        </Jumbo>
    </Styles>
)