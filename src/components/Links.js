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
        <div class="ui teal inverted six item menu">
              <a class="active item"> <Link to="/">Home</Link></a>
              <a class="item"><Link to="/profiles">Profiles</Link></a>
              <a class="item"><Link to="/galleries">Galleries</Link></a>
              <a class="item"><Link to="/events">Events</Link></a>
              <a class="item"><Link to="/merchandise">Merchandise</Link></a>
              <a class="item"><Link to="/contact">Contact US</Link></a>
        </div>
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contact">
            <Contact />
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


          <Route path="/merchandise">
            <Merchandise />
          </Route>


          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
      );
    }
  }
  

  export default Links;
