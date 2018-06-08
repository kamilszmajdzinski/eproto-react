import React from 'react'
import Snackbar from 'material-ui/Snackbar';
import { connect } from "react-redux";

const mapStateToProps = ({ notifications }) => {
    return{
        show: notifications.show,
        text: notifications.text
    }
}

const Notifications = ({ show, text }) => {
  return (
    <Snackbar 
        open = {show}
        message = {text}
    />
  )
}

export default connect(mapStateToProps)(Notifications)