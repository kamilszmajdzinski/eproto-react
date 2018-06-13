import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux"
import { fetchStudentByIdAction } from "../../actions/studentsActions";
import { changeView } from "../../actions/viewActions";
import './style.css'

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
      </div>
    )
  }
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