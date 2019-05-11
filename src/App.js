import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { home } from './home';
import { about } from './about';
import { contact } from './contact';
import { nomatch } from './nomatch';
import { Layout } from './components/Layout';
import { NavBar } from './components/NavBar';
//import { Jumbotron } from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
          <Router>
            <Layout>
              <Switch>
                <Route exact path="/" component={home} />
                <Route path="/about" component={about} />
                <Route path="/contact" component={contact} />
                <Route component={nomatch} />
              </Switch>
            </Layout>
          </Router>
      </React.Fragment>
    );
  }
}

export default App;