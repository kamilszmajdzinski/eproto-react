import React, { Component } from 'react'
import './style.css'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AddNewStudent from "../AddNewStudent";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { fetchStudentsAction } from "../../actions/studentsAction";
import studentsReducer from '../../reducers/studentsreducer';
import CircularProgress from 'material-ui/CircularProgress';

class Students extends Component {

    state = {
        addNewStudentComponentEnabled: false
    }

    componentDidMount = () => {
      this.props.fetchStudentsAction()
      
    }
   

   handleAddNewStudent = () => {
       this.setState({
           addNewStudentComponentEnabled: true
       })
   } 

   renderStudent = (student) => {
           return(
            <tr className = 'dataRow'>
            <td>
                {student.index}
            </td>
            <td>
                {student.firstname}
            </td>
            <td>
                {student.lastname}
            </td>
            <td>
                {student.birthday}
            </td>
            <td className = 'actionCell' >
                <i class="far fa-chart-bar" title = 'Students grades'></i>
                <i class="fas fa-trash" title ='Delete student'></i>
            </td>
        </tr>
           )
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
                students.map( student =>  this.renderStudent(student))
            ):(
                <p>Brak studentow</p>
            )}
        </table>
        </form>
        )}
            <FloatingActionButton 
                style = {style} 
                backgroundColor = '#1db954'
                 onClick = {this.handleAddNewStudent}
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

const mapStateToProps = ({ studentsReducer }) => {
    return {
        students: studentsReducer.students,
        isFetching: studentsReducer.isFetching
    }
}

const mapDispatchToProps = dispatch =>{
    return bindActionCreators ({
        fetchStudentsAction
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Students)