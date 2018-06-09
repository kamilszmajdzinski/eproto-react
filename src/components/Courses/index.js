import React, { Component } from 'react'
import './style.css'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AddNewCourse from '../AddNewCourse'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCoursesAction, removeCourseAction } from "../../actions/coursesActions";
import CircularProgress from 'material-ui/CircularProgress';
import Notifications from '../Notifications/index'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


class Courses extends Component {
    state = {
        addNewCourseComponentEnabled: false,
        dialogOpen: false,
        deletingCourse: null
    }

    componentDidMount = () => {
      this.props.fetchCoursesAction()
    }

    componentWillReceiveProps = () => {
        this.setState({
            addNewCourseComponentEnabled: false
        })
    }
    

    handleAddNewCourse = () => {
        this.setState({ addNewCourseComponentEnabled: true})
    }

    handleRemoveDialogOpen = (course) => {
        this.setState({ 
            deletingCourse: course,
            dialogOpen: true })
    }

    handleRemoveCourse = () => {
        this.props.removeCourseAction(this.state.deletingCourse.id)
        this.setState({
            dialogOpen: false
        })
        this.props.fetchCoursesAction()
    }

    handleDialogClose = () => {
        this.setState({
            dialogOpen: false
        })
   }

    renderCourse = (course) => {
        return(
            <tr className = 'dataRow' key = {course.id}>
                <td>{course.name}</td>
                <td>{course.lecturer}</td>
                <td className = 'actionCell'>
                    <i class="fas fa-edit" 
                       title ='Edit course'></i>
                    <i class="fas fa-trash" 
                       title ='Delete course'
                       onClick = {e => this.handleRemoveDialogOpen(course)}></i>
                </td>
            </tr>
        )
    }

  render() {
    const { courses, isFetching } = this.props
    const { deletingCourse } = this.state

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

    return (
      <div className = 'dataContainer'>
        <p> Courses </p>
        {isFetching ? (
            <CircularProgress size={60} thickness={7} color = '#1db954' style = {spinnerStyle}/>
        ) : ( 
        <table className = 'dataTable' id = 'coursesTable'>
            <thead>
                <tr>
                    <th>Course name</th>
                    <th>Lecturer</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>

                {this.state.addNewCourseComponentEnabled && <AddNewCourse /> }

                {courses ? (
                    courses.map(course => this.renderCourse(course))
                ):(
                    <p>There's no courses</p>
                )}

                
            </tbody>
        </table>
        )}

        <Dialog
            title="Confirm the course removal"
            actions={actions}
            modal={true} 
            open={this.state.dialogOpen}
            bodyStyle = {{ color: `white` }}
            titleStyle = {{ color: `white` }}
            paperClassName = 'dialog'
            >
            Do you really want to delete 
             {deletingCourse && ` ${deletingCourse.name}?`} 
            </Dialog>

        <FloatingActionButton 
                style = {style} 
                backgroundColor = '#1db954'
                 onClick = {this.handleAddNewCourse}
                 title = "Add new student">
                <ContentAdd />
            </FloatingActionButton>
            <Notifications />
      </div>
    )
  }
}

const style = {
    position: 'fixed',
    bottom: '90px',
    right: '60px'
}

const spinnerStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%'
}


const mapStateToProps = ({ coursesReducer }) => {
    return {
        courses: coursesReducer.courses,
        isFetching: coursesReducer.isFetching
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchCoursesAction,
        removeCourseAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses)