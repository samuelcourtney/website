import React from "react";
import { Container, Jumbotron } from 'react-bootstrap';
import Scroller from '../Components/Scroller';
import { Jumbotron as Jumbo, Image} from "react-bootstrap";
import styled from 'styled-components';
import blackBackground from '../src_assets/IMG_0001.jpeg';
import './about.css';


const Styles = styled.div`

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

.jumbotron {
    color: white;
    margin-bottom: 0;
    background-color: black;
    position: relative;
    z-index: 9999;
    background-color: black;
    background-size: cover;

}


`;

export const about = () => (
    <React.Fragment>
            <Container>
            <Styles>
                <Jumbotron>
                    
                    <h1 align='bottom left'>>> samuelcourtney$ would like you to know...</h1> 
                </Jumbotron>
                
                <Jumbotron>
                    <h1>I am a creative yet critical thinker that really enjoys data engineering as a whole 😎</h1>
                    <br></br>
                    <h3>ECE Major from The University of Alabama - Roll Tide! 🐘</h3>
                    (summa cum laude: 3.961/4.0 GPA)
                    <br></br>
                    <br></br>
                    <h3>I'm 24 years young</h3>
                    <br></br>
                    <h3>I have worked in IT for a while, doing Co-op and internships @ JobCost Inc., United Airlines, GE Appliances, and worked professionally in IT @ United and Sentry Insurance 🛩</h3>
                        (3 years professional experience)
                        <br></br><br></br>
                    <h3>I currently live in Steven's Point, WI - it's cold.</h3>
                    at least the ice szn is fun
                    <br></br><br></br>
                    <h3>I am a DBA! Been avoiding select * from production since 2021</h3>
                    id recommend using a select top(10) * instead, cheers.
                    
                </Jumbotron>
                </Styles>
            </Container>
     
     <Scroller>
    </Scroller>
    {/*
        <div className="rellax">
        I’m that default chill speed of "-2"
    </div>
    <div className="rellax" data-rellax-speed="7">
        I’m super fast!! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero nulla, volutpat lacinia orci eget, commodo hendrerit urna. Vestibulum interdum, elit finibus interdum posuere, ligula libero tincidunt mauris, quis lacinia magna nibh ut augue. Suspendisse feugiat accumsan lorem et interdum. Pellentesque at tempor diam, ac imperdiet lacus. Praesent libero massa, accumsan ut est ut, tincidunt molestie magna. Ut condimentum justo id fermentum vehicula. Aenean aliquam pharetra tortor, et pulvinar erat. Fusce ullamcorper vestibulum metus ac faucibus. Pellentesque pharetra varius nulla sed molestie. Pellentesque vulputate turpis ut libero luctus porta. Maecenas ultricies non nisl id vulputate. Suspendisse non volutpat tortor, sed venenatis augue. Suspendisse tincidunt hendrerit quam id consectetur.
    </div>
    <div className="rellax" data-rellax-speed="-4">
        I’m extra slow and smooth
    </div>*/}
    </React.Fragment>
)