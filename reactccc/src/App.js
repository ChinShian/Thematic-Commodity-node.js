import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

import Home from './pages/Home'
import Watch from './pages/Watch'
import Headset from './pages/Headset'
import Motion from './pages/Motion'

function App() {
  return (
    <Router>
      <>
        <Header />
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/watch">
              <Watch/>
            </Route>
            <Route path="/headset">
              <Headset />
            </Route>
            <Route path="/motion">
              <Motion />
            </Route>
          </Switch>
        <Footer />
      </>
    </Router>
  )
}

export default App
