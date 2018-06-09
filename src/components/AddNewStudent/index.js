import React, { Component } from 'react'
import './style.css'
import { showNotification } from "../../actions/notificationsActions";
import { addStudentAction } from "../../actions/studentsActions";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'

class AddNewStudent extends Component {

    state = {
        firstname: '',
        lastname: '',
        birthday: '',
        grades: []
    }

    validateForm = () => {
        const { firstname, lastname, birthday } = this.state
        if (!firstname) {
            this.props.showNotification('Please fill in firstname of student')
            return false
        }else if (!lastname) {
            this.props.showNotification('Please fill in lastname of student')
            return false
        }else if (!birthday) {
            this.props.showNotification('Please fill in birthday of student')
            return false
        }else return true
    }

    handleAddNewStudent = () => {
        if(this.validateForm()){
            console.log('good')
            this.props.addStudentAction(this.state)
        }
    }

  render() {
    return (
        <tr className = 'dataRow' id = 'addStudentRow'>
                <td></td>
                <td><input type = 'text' required value = {this.state.firstname} onChange = {(e) => {this.setState({ firstname: e.target.value})}} /></td>
                <td><input type = 'text' required value = {this.state.lastname} onChange = {(e) => {this.setState({ lastname: e.target.value})}} /></td>
                <td><input type = 'date' required value = {this.state.birthday} onChange = {(e) => {this.setState({ birthday: e.target.value})}} /></td>
                <td className = 'actionCell' ><i class="fas fa-check" title = "Add student " onClick={this.handleAddNewStudent}></i></td>
        </tr>
    )
  }
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators ({
        showNotification,
        addStudentAction
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddNewStudent)