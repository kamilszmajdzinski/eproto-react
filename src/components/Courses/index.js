import React, { Component } from 'react'
import './style.css'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AddNewCourse from '../AddNewCourse'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCoursesAction } from "../../actions/coursesActions";
import CircularProgress from 'material-ui/CircularProgress';

class Courses extends Component {
    state = {
        addNewCourseComponentEnabled: false
    }

    componentDidMount = () => {
      this.props.fetchCoursesAction()
    }
    

    handleAddNewCourse = () => {
        this.setState({ addNewCourseComponentEnabled: true})
    }

    renderCourse = (course) => {
        return(
            <tr className = 'dataRow'>
                <td>{course.name}</td>
                <td>{course.lecturer}</td>
                <td className = 'actionCell'>
                    <i class="fas fa-edit" title ='Edit course'></i>
                    <i class="fas fa-trash" title ='Delete course'></i>
                </td>
            </tr>
        )
    }

  render() {

    const { courses, isFetching } = this.props

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
        <FloatingActionButton 
                style = {style} 
                backgroundColor = '#1db954'
                 onClick = {this.handleAddNewCourse}
                 title = "Add new student">
                <ContentAdd />
            </FloatingActionButton>
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
        fetchCoursesAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses)