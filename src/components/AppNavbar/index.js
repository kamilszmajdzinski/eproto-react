import React, { Component } from 'react'
import './style.css'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { changeView } from "../../actions/viewActions";

class AppNavbar extends Component {

    handleStudentsClick = () => {
        this.props.changeView('students')
    }

    handleCoursesClick = () => {
        this.props.changeView('courses')
    }
    

  render() {
    return (
      <div className = 'navbar'>
        <ul className = 'navbarList'>
            <li onClick = {this.handleStudentsClick} >Students</li>
            <li onClick = {this.handleCoursesClick} >Courses</li>
        </ul>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        changeView
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(AppNavbar)