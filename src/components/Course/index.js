import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types'

export default class Course extends Component {
    render() {
    const { course } = this.props
        return (
            <tr className = 'dataRow' key = {course.id}>
                <td>{course.name}</td>
                <td>{course.lecturer}</td>
                <td className = 'actionCell'>
                    <i class="fas fa-edit" 
                    title ='Edit course'
                    onClick = {e => this.handleEditCourse(course)}
                    ></i>
                    <i class="fas fa-trash" 
                    title ='Delete course'
                    onClick = {e => this.handleRemoveDialogOpen(course)}>
                    </i>
                </td>
            </tr>
        )
  }
}
