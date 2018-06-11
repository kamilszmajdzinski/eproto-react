import React, { Component } from 'react'
import './style.css'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AddNewCourse from '../AddNewCourse'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCoursesAction } from "../../actions/coursesActions";
import CircularProgress from 'material-ui/CircularProgress';
import Notifications from '../Notifications/index'
import Course from '../Course'


class CourseList extends Component {
    state = {
        addNewCourseComponentEnabled: false,
    }

    componentDidMount = () => {
          this.props.fetchCoursesAction()
    }

    componentWillReceiveProps(nextProps){
        const { addCourseSuccess, hasBeenDeletedSuccessfully, fetchCoursesAction } = this.props

        if(nextProps.addCourseSuccess !== addCourseSuccess){
            this.setState({ addNewCourseComponentEnabled: false })
            fetchCoursesAction()
        }
        if (nextProps.hasBeenDeletedSuccessfully !== this.props.hasBeenDeletedSuccessfully) {
            fetchCoursesAction()
        }
    }
   
    handleAddNewCourse = () => {
        this.setState({ addNewCourseComponentEnabled: true})
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
                    courses.map(course => <Course course = {course}/>)
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
        isFetching: coursesReducer.isFetching,
        hasBeenDeletedSuccessfully: coursesReducer.hasBeenDeletedSuccessfully,
        addCourseSuccess: coursesReducer.addCourseSuccess
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchCoursesAction,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseList)