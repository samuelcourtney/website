import React from 'react';
import { Jumbotron, Container} from "react-bootstrap";
import styled from 'styled-components';
import blackBackground from '../src_assets/backgroundr.jpg';
import degreepdf from '../src_assets/SamuelCourtney.pdf';
import resumepdf from '../src_assets/scr.pdf'

const Styles = styled.div`
 .jumbotron {
     background: black;
     background-size: cover;
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
    padding: 0.25rem;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    max-width: 100%;
    height: auto;
    background-color: transparent;
  }
`;

class Links extends React.Component {
  
    render() {
      return (
        <React.Fragment>
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
        </React.Fragment>
      )
    }
  }
  
  export default Links
