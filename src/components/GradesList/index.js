import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux"
import { fetchStudentByIdAction } from "../../actions/studentsActions";
import { changeView } from "../../actions/viewActions";
import './style.css'
import Notifications from '../Notifications'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class GradesList extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount = () => {
      this.props.fetchStudentByIdAction(this.props.index)
    }

    handleReturn = () => {
        this.props.changeView('students')
    }
    

  render() {
      const { student } = this.props
    return (
      <div className = 'dataContainer'>
        <p>
            <i class="fas fa-arrow-left"
                onClick = {this.handleReturn}></i>
           <span>   </span> Grades of <span> </span>
            {student && student.firstname}<span> </span>
            {student && student.lastname}<span> </span> 
            {student && `(${student.index})`}</p>
        
            <table className = 'dataTable'>
                <thead>
                    <tr>
                        <th>Grade</th>
                        <th>Course</th>
                        <th>Date</th>
                        <th>actions</th>
                    </tr>
                </thead>
            </table>

        <FloatingActionButton 
            style = {buttonStyle} 
            backgroundColor = '#1db954'
            onClick = {this.handleAddNewStudent}
            title = "Add new student">
            <ContentAdd />
        </FloatingActionButton>
        <Notifications />
      </div>
    )
  }
}

const buttonStyle = {
    position: 'fixed',
    bottom: '90px',
    right: '60px'
}

const mapStateToProps = ({ studentsReducer, viewReducer }) => {
    return{
        student: studentsReducer.student,
        index: viewReducer.index
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchStudentByIdAction,
        changeView
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GradesList)