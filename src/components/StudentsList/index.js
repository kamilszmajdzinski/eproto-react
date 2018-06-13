import React, { Component } from 'react'
import './style.css'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AddNewStudent from "../AddNewStudent";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { fetchStudentsAction, removeStudentAction } from "../../actions/studentsActions";
import studentsReducer from '../../reducers/studentsreducer';
import CircularProgress from 'material-ui/CircularProgress';
import Notifications from '../Notifications'


import Student from '../Student'



class StudentsList extends Component {

    state = {
        addNewStudentComponentEnabled: false,
        deletingStudent: null
    }

    componentDidMount = () => {
      this.props.fetchStudentsAction()
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.putSuccess !== this.props.putSuccess) {
            this.props.fetchStudentsAction()
        }
    }
   
    componentWillReceiveProps = () => {
        this.setState({
            addNewStudentComponentEnabled: false
        })
    }

   handleAddNewStudent = () => {
       this.setState({ addNewStudentComponentEnabled: true })
   }
   
  
  render() {
    const { students, isFetching } = this.props

    return (
      <div className = 'dataContainer'>
        <p> Students </p>
        {isFetching ? (
            <CircularProgress size={60} thickness={7} color = '#1db954' style = {spinnerStyle}/>
        ):(
        <form>
        <table className = 'dataTable'>
            <thead>
                <tr>
                    <th>Index</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Birthday</th>
                    <th>actions</th>
                </tr>
            </thead>
            {this.state.addNewStudentComponentEnabled && <AddNewStudent />}

            {students ? (
                students.map( student =>  <Student student = {student} />)
            ):(
                <p>Brak studentow</p>
            )}
        </table>
        </form>
        )}
            
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



const spinnerStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%'
}

const mapStateToProps = ({ studentsReducer }) => {
    return {
        students: studentsReducer.students,
        isFetching: studentsReducer.isFetching,
        putSuccess: studentsReducer.putSuccess
    }
}

const mapDispatchToProps = dispatch =>{
    return bindActionCreators ({
        fetchStudentsAction,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList)