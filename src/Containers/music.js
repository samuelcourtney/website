import React from "react";
import { Container, Jumbotron, Image} from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player';
import styled from 'styled-components';
import talkAboutUs from '../src_assets/tbu.mp3';


import sail from '../src_assets/header_sail_yacht_blue.jpg'
import { Jumbotron as Jumbo} from "react-bootstrap";
import somf from '../src_assets/somf.png';
import somf3 from '../src_assets/somf.mp3';
import uts3 from '../src_assets/uts.mp3';
import utsp from '../src_assets/chiraq.jpg';
const Styles = styled.div`

.jumbotron {
    color: white;
    position: relative;
    z-index: 9999;
    background-color: black;
    background-size: cover;

}

.jumbo {
     color: white;
     position: relative;
     z-index: 9999;
     background-color: black;
     background-size: cover;

 }

 .img-thumbnail {
    padding: 0.25rem;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    max-width: 100%;
}

h1 {
    font-size: 2.5rem;
    color: white !important;
}
 .overlay {
     background-color: #000;
     opacity: 0.0;
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     z-index: -2;
 }

 
`;
 
export const music = () => (
    <Container>
        <Styles>
            <React.Fragment>
            
                <Jumbotron className = "jumbo">
                    <h1 align='center'>∰ music repo ∰</h1>
                </Jumbotron>
                
                <div>
                <Image src={utsp} fluid thumbnail/> 
                </div>
                <Jumbo className = "jumbotron"> 
                    <h2>up to something - jayce</h2>
                    { /* <Image src={gut} thumbnail/>  */ }
                    <ReactAudioPlayer src={uts3} controls/>
                </Jumbo>

                <div>
                <Image src={sail} fluid thumbnail/> 
                </div>
                <Jumbo className = "jumbotron"> 
                    <h2>talk about us? - jayce</h2>
                    { /* <Image src={gut} thumbnail/>  */ }
                    <ReactAudioPlayer src={talkAboutUs} controls/>
                </Jumbo>

                <div>
                <Image src={somf} fluid thumbnail/> 
                </div>
                <Jumbo className = "jumbotron"> 
                    <h2>story of my life, with love</h2>
                    { /* <Image src={gut} thumbnail/>  */ }
                    <ReactAudioPlayer src={somf3} controls/>
                </Jumbo>


            </React.Fragment>
        </Styles>
    </Container>
)
