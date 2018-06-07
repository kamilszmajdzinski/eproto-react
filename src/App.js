import React, { Component } from 'react';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import AppNavbar from './components/AppNavbar';
import Students from "./components/Students";
import './style.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
          <div className = 'container'>
            <AppNavbar />
            <div className = 'content'>
              <Students />
            </div>
          </div>
        <AppFooter />
      </div>
    );
  }
}

export default App;
