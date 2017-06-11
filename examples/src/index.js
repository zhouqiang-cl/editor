import React from 'react'
// import { Route } from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Admin from './admin'
import Article from "./article"
import { render } from 'react-dom'
require('react-tap-event-plugin')()

render((
<Router>
  <div>
    <Route exact path="/write" component={Admin}/>
    <Route path="/article" component={Article}/>
  </div>
</Router>
), document.getElementById('app'))

