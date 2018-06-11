import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types'

export default class Course extends Component {

    state = {
        editCourseView: false
    }

    handleEditCourse = () => {
        this.setState({  editCourseView: true})
    }

    handleCancelEdit = () => {
        this.setState({ editCourseView: false })
    }
    
    render() {
    const { course } = this.props

    if (!this.state.editCourseView) {
        return(
            <tr className = 'dataRow' key = {course.id}>
                <td>{course.name}</td>
                <td>{course.lecturer}</td>
                <td className = 'actionCell'>
                    <i class="fas fa-edit" 
                    title ='Edit course'
                    onClick = {e => this.handleEditCourse()}
                    ></i>
                    <i class="fas fa-trash" 
                    title ='Delete course'
                    onClick = {e => this.handleRemoveDialogOpen(course)}>
                    </i>
                </td>
            </tr> 
        )
    }else{
        return(
            <tr className = 'dataRow' key = {course.id}>
                <td>{course.name}</td>
                <td>{course.lecturer}</td>
                <td className = 'actionCell'>
                
                    <i class="fas fa-check" 
                    title ='Edit course'
                    onClick = {e => this.handleEditCourse(course)}
                    ></i>
                    <i class="fas fa-times" 
                    title ='Delete course'
                    onClick = {e => this.handleCancelEdit()}>
                    </i>
                </td>
            </tr>
        )
    }
  }
}
