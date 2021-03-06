import * as React from "react";
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Home from '../Home/Home'
import Schedule from '../Schedule/Schedule'
import Playground from '../Playground/PlayGround'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/schedule' component={Schedule}/>
      <Route path="/playground" component={Playground}/>
     </Switch>
  </main>
)

export default Main
