import React from 'react'
import './style.css'


const AppHeader = () => {
  return (
    <div className = 'header'>
     <img src = {require('./logo.png')} style = {{width: `50px`, marginRight: `1em`}}></img> <p> Student Grade Manager</p>
    </div>
  )
}

export default AppHeader