import React, { Component }from 'react';
import Nav from './components/Nav.js'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Resume from './components/Resume'
import Work from './components/Work'
import Contact from './components/Contact'

class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route exact path='/' component={Home} />
          <Route path='/work' component={Work} />
          <Route path='/resume' component={Resume} />
          <Route path='/contact' component={Contact} />

        </div>
      </BrowserRouter>
    );
  }
}


export default App;
