import React, { Component } from 'react'
import './style.css'

export default class AppNavbar extends Component {
  render() {
    return (
      <div className = 'navbar'>
        <ul className = 'navbarList'>
            <li>Students</li>
            <li>Courses</li>
        </ul>
      </div>
    )
  }
}
