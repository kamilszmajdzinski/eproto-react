import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCourseAction } from '../../actions/coursesActions'
import { showNotification } from "../../actions/notificationsActions";

class AddNewCourse extends Component {

    state = {
        name: '',
        lecturer: ''
    }

    validateForm = () => {
        const { name, lecturer } = this.state
        if(!name){
            this.props.showNotification('Please fill in name of the course')
            return false
        }else if(!lecturer){
            this.props.showNotification(`Please fill in name of lecturer of ${name}`)
            return false
        }else return true
    }

    handleAddNewCourse = () => {
        if (this.validateForm()) {
            this.props.addCourseAction(this.state)
        }
    }

  render() {
    return (
        <tr className = 'dataRow' id = 'addStudentRow'>
                <td><input 
                        type = 'text' 
                        required
                        value = {this.state.name}
                        onChange = {e => this.setState({ name: e.target.value })}/></td>
                <td><input 
                        type = 'text' 
                        required
                        value = {this.state.lecturer}
                        onChange = {e => this.setState({ lecturer: e.target.value })}/></td>
            <td className = 'actionCell' >
            <i class="fas fa-check" title = "Add course" onClick = {this.handleAddNewCourse}></i>
            </td>
        
    </tr> 
    )
  }
}

export const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addCourseAction,
        showNotification
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddNewCourse)