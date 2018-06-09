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
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';



class Students extends Component {

    state = {
        addNewStudentComponentEnabled: false,
        dialogOpen: false,
        deletingStudent: null
    }

    componentDidMount = () => {
      this.props.fetchStudentsAction()
    }
   
    componentWillReceiveProps = () => {
        this.setState({
            addNewStudentComponentEnabled: false
        })
    }

   handleAddNewStudent = () => {
       this.setState({
           addNewStudentComponentEnabled: true
       })
   }
   
   handleRemoveDialogOpen = (student) => {
       this.setState({ 
           deletingStudent: student,
           dialogOpen: true })
   }

   handleRemoveStudent = () => {
       this.props.removeStudentAction(this.state.deletingStudent.index)
       this.setState({
           dialogOpen: false
       })
       this.props.fetchStudentsAction()
   }


   handleDialogClose = () => {
        this.setState({
            dialogOpen: false
        })
   }

   renderStudent = (student) => {
           return(
            <tr className = 'dataRow' key = {student.index}>
            <td>{student.index}</td>
            <td>{student.firstname}</td>
            <td>{student.lastname}</td>
            <td>{student.birthday}</td>
            <td className = 'actionCell' >
                <i class="far fa-chart-bar" 
                   title = 'Students grades'
                   onClick></i>
                <i class="fas fa-trash" 
                   title ='Delete student'
                   onClick = {e => this.handleRemoveDialogOpen(student)}></i>
            </td>
        </tr>
        )
   }

  render() {
    const { students, isFetching } = this.props
    const { deletingStudent } = this.state

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
          onClick={this.handleRemoveStudent }
          labelStyle = {{ color: `#ba1c1e` }}
        />,
      ];

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
                students.map( student =>  this.renderStudent(student))
            ):(
                <p>Brak studentow</p>
            )}
        </table>
        </form>
        )}
            <Dialog
            title="Confirm the student's removal"
            actions={actions}
            modal={true} 
            open={this.state.dialogOpen}
            bodyStyle = {{ color: `white` }}
            titleStyle = {{ color: `white` }}
            paperClassName = 'dialog'
            >
            Do you really want to delete 
             {deletingStudent && ` ${deletingStudent.firstname}  ${deletingStudent.lastname}?`} 
            </Dialog>
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
        isFetching: studentsReducer.isFetching
    }
}

const mapDispatchToProps = dispatch =>{
    return bindActionCreators ({
        fetchStudentsAction,
        removeStudentAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Students)