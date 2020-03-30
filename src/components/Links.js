import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Merchandise from './Merchandise';
import Events from './Events';
import Profiles from './Profiles';
import Galleries from './Galleries'
import Contact from './Contact'
import Home from './Home';


class Links extends Component {
  
    render(){
      return(
  
        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
  
              <li>
                <Link to="/profiles">Profiles</Link>
              </li>
  
              <li>
                <Link to="/galleries">Galleries</Link>
              </li>
  
              <li>
                <Link to="/events">Upcoming Events</Link>
              </li>

              <li>
                <Link to="/merchandise">Merchandise</Link>
              </li>

              <li>
                <Link to="/contact">Contact US</Link>
              </li>

            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>

            <Route path="/">
              <Home />
            </Route>

            <Route path="/merchandise">
              <Merchandise />
            </Route>
  
            <Route path="/profiles">
              <Profiles />
            </Route>
  
            <Route path="/galleries">
              <Galleries />
            </Route>
  
            <Route path="/events">
              <Events />
            </Route>

            <Route path="/contact">
              <Contact />
            </Route>

           
          </Switch>
        </div>
      </Router>
  

      );
    }
  }
  

  export default Links;
