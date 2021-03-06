import React, { Component } from 'react';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import AppNavbar from './components/AppNavbar';
import StudentsList from "./components/StudentsList";
import CourseList from './components/CourseList'
import GradesList from './components/GradesList'
import { connect } from "react-redux";
import './style.css'


class App extends Component {

  renderComponent = () => {
    if (this.props.view === 'none') {
      return(
        <p className = 'chooseViewParagraph'>Choose view from Menu</p>
      )
    }else if(this.props.view === 'students'){
        return(
          <StudentsList />
        )
    }else if(this.props.view === 'courses'){
      return (
        <CourseList />
      )
    }else if (this.props.view === 'grades') {
      return(
        <GradesList />
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
