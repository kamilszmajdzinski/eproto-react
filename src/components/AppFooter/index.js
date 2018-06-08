import React from 'react'
import './style.css'

const style = {
    height: '7%',
    backgroundColor: '#121212',
    position: 'fixed',
    bottom:'0',
    left: '0',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.75)'
}

const AppFooter = () => {
  return (
    <div style = {style}>
      <p 
        className = 'footerParagraph'>
        Student Grade Manager - Kamil Szmajdziński 
            <a className = 'footerLink' href = 'https://fc.put.poznan.pl/index.php'> WIPP </a> </p>
            <i class="fab fa-github"></i>
    </div>
  )
}

export default AppFooter
