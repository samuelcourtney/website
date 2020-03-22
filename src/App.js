import React, { Component } from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import { home } from './Containers/home';
import { about } from './Containers/about';
import { contact } from './Containers/contact';
import { nomatch } from './Containers/nomatch';
import { Layout } from './Components/Layout';
import { NavBar } from './Components/NavBar';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
            <Layout>
              <HashRouter>
                <Switch>
                  <Route path='/' exact component={home}/>
                  <Route path='/about' exact component={about} />
                  <Route path='/contact' exact component={contact} />
                  <Route component={nomatch} />
                </Switch>
              </HashRouter>
            </Layout>
        </React.Fragment>
    );
  }
}

export default App;