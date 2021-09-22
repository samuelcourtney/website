import React from "react";
import Rellax from 'rellax';

class Scroller extends React.Component {
    componentDidMount() {
      // We can keep a reference to Rellax in case we need it later
      this.rellax = new Rellax('.rellax')
    }
  
    render() {
      return (
        <React.Fragment>
        </React.Fragment>
      )
    }
  }
  
  export default Scroller