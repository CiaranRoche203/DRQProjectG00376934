import logo from './logo.svg';
import { Home } from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
//imports of all the necessary items
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CreatePlayer } from './components/createPlayer';
import { Squad } from './components/squad';
import { EditPlayer } from './components/editPlayer';
import React, { Component } from 'react';
import { Other} from './components/other';
//main class of the app. 
class App extends Component {
  //method where the methods of the other classes are called essentially.
  //navbar is created here
  //route to the other pages on the app are also here. 
  render() {
    return (
      <Router>
        {// creating a navigation to different urls and a navbar for convinience
         //nav bar means user doesnt have to enter the specific url
        }
        <div className="App">
          <Navbar bg="danger" variant="light">
            <Navbar.Brand href="#home">Manchester United Football Club</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/squad">View Squad</Nav.Link>
              <Nav.Link href="/createPlayer">Manage Squad </Nav.Link>
              <Nav.Link href="/other">Other</Nav.Link>
            </Nav>
          </Navbar>

          <Switch>
            {
            // this is how when we navigate to the required function on the app
            //that it returns the function of what we want to do
            }
            <Route path='/' component={Home} exact />
            <Route path='/createplayer' component={CreatePlayer} exact />
            <Route path='/squad' component={Squad} exact />
            <Route path='/editplayer/:id' component={EditPlayer} exact />
            <Route path='/other' component={Other} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;