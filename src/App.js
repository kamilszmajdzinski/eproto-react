import React, { Component } from 'react';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import AppNavbar from './components/AppNavbar';
import Students from "./components/Students";
import { connect } from "react-redux";
import './style.css'


class App extends Component {

  renderComponent = () => {
    if (this.props.view === 'none') {
      return(
        <p className = 'chooseViewParagraph'>Wybierz widok z menu</p>
      )
    }else if(this.props.view === 'students'){
        return(
          <Students />
        )
    }
  }


  render() {
    const { view } = this.props

    return (
      <div className="App">
        <AppHeader />
          <div className = 'container'>
            <AppNavbar />
            <div className = 'content'>
              {this.renderComponent()}
              
            </div>
          </div>
        <AppFooter />
      </div>
    );
  }
}

const mapStateToProps = ({ viewReducer }) => {
  return {
    view: viewReducer.view
  }
}

export default connect(mapStateToProps)(App);
