import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { removeCourseAction } from "../../actions/coursesActions";
import { putCourseAction } from "../../actions/coursesActions";

import './style.css'

class Course extends Component {

    constructor(props){
        super(props)
        this.state = {
            editCourseView: false,
            name: this.props.course.name,
            lecturer: this.props.course.lecturer,
            id: this.props.course.id,
            dialogOpen: false,
            tempCourse: {
                name: '',
                lecturer: ''
            }
        }
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.hasBeenPuttedSuccessfully !== this.props.hasBeenPuttedSuccessfully) {
            this.setState({ editCourseView: false })
        }
    }

    handleRemoveDialogOpen = () => {
        this.setState({ dialogOpen: true })
    }

    handleDialogClose = () => {
        this.setState({ dialogOpen: false })
    }
    
    handleRemoveCourse = () => {
        this.props.removeCourseAction(this.state.id)
        this.setState({ dialogOpen: false })
    }
    
    handleEditCourse = () => {
        const { tempCourse, name, lecturer } = this.state
        this.setState({  editCourseView: true})
        tempCourse.name = name
        tempCourse.lecturer = lecturer
    }

    handleEditCancel = () => {
        const { tempCourse } = this.state
        this.setState({ 
            editCourseView: false,
            name: tempCourse.name,
            lecturer: tempCourse.lecturer
        })
    }

    handlePutCourse = () => {
        const { name, lecturer, id } = this.state
        const body = {
            name,
            lecturer
        }
        this.props.putCourseAction(id, body)
    }
    
    render() {
    const course = {
        name: this.state.name,
        lecturer: this.state.lecturer,
        id: this.props.id
    }


    const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.handleDialogClose}
          labelStyle = {{ color: `#1db954` }}
        />,
        <FlatButton
          label="Delete"
          primary={true}
          onClick={this.handleRemoveCourse }
          labelStyle = {{ color: `#ba1c1e` }}
        />,
      ];

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

                <Dialog
                    title="Confirm the course removal"
                    actions={actions}
                    modal={true} 
                    open={this.state.dialogOpen}
                    bodyStyle = {{ color: `white` }}
                    titleStyle = {{ color: `white` }}
                    paperClassName = 'dialog'>
                    Do you really want to delete {` ${this.state.name}`}?
                </Dialog>
            </tr> 
        )
    }else{
        return(
            <tr className = 'dataRow activeRow' key = {course.id}>
                <td>
                    <input 
                        value = {this.state.name}
                        onChange = {e => this.setState({ name: e.target.value })}
                    />
                </td>
                <td>
                    <input
                        value = {this.state.lecturer}
                        onChange = {e => this.setState({ lecturer: e.target.value })}
                    />
                </td>
                <td className = 'actionCell'>
                    <i class="fas fa-check" 
                        title ='Save changes'
                        onClick = {e => this.handlePutCourse()}></i>
                    <i class="fas fa-times" 
                       title ='Cancel'
                       onClick = {e => this.handleEditCancel()}></i>
                </td>
            </tr>
        )
    }
  }
}

const mapStateToProps = ({ coursesReducer }) => {
    return{
        hasBeenPuttedSuccessfully: coursesReducer.hasBeenPuttedSuccessfully
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        removeCourseAction,
        putCourseAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Course)
