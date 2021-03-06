import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { putStudentAction, removeStudentAction } from "../../actions/studentsActions";
import { changeView } from "../../actions/viewActions";
import Notifications from '../Notifications'

class Student extends Component {

    constructor(props){
        super(props)
        this.state = {
            dialogOpen: false,
            editStudentView: false,
            index: this.props.student.index,
            firstname: this.props.student.firstname,
            lastname: this.props.student.lastname,
            birthday: this.props.student.birthday,
        
            tempStudent: {
                index: null,
                firstname: '',
                lastname: '',
                birthday: ''
            }
        }
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.putSuccess !== this.props.putSuccess) {
            this.setState({ editStudentView: false })
        }
    }

    handleRemoveDialogOpen = () => {
        this.setState({ dialogOpen: true })
    }

    handleDialogClose = () => {
        this.setState({ dialogOpen: false })
    }

    handleRemoveStudent = () => {
        this.props.removeStudentAction(this.state.index)
        this.setState({ dialogOpen: false })
    }

    handleEditStudent = () => {
        const { tempStudent, firstname, lastname, birthday } = this.state
        this.setState({ editStudentView: true })
        tempStudent.firstname = firstname
        tempStudent.lastname = lastname
        tempStudent.birthday = birthday
    }

    handleEditCancel = () => {
        const { tempStudent } = this.state
        this.setState({
            editStudentView: false,
            firstname: tempStudent.firstname,
            lastname: tempStudent.lastname,
            birthday: tempStudent.birthday     
        })
    }

    handlePutStudent = () => {
        const { index, firstname, lastname, birthday } = this.state
        const body = {
            firstname,
            lastname,
            birthday
        }
        this.props.putStudentAction(index, body)
    }

    handleGradesView = () => {
        this.props.changeView('grades', this.state.index)
    }

  render() {
      const { index, firstname, lastname, birthday } = this.state

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

    if (!this.state.editStudentView) {
        return(
            <tr className = 'dataRow' key = {index}>
                <td>{index}</td>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>{birthday}</td>
                <td className = 'actionCell' >
                    <i class="far fa-chart-bar" 
                       title = 'Students grades'
                       onClick = {e => this.handleGradesView()}></i>
                    <i class="fas fa-edit" 
                        title ='Edit student'
                        onClick = {e => this.handleEditStudent()}></i>
                    <i class="fas fa-trash" 
                       title ='Delete student'
                       onClick = {e => this.handleRemoveDialogOpen()}></i>
                </td>
                <Dialog
                    title="Confirm the student's removal"
                    actions={actions}
                    modal={true} 
                    open={this.state.dialogOpen}
                    bodyStyle = {{ color: `white` }}
                    titleStyle = {{ color: `white` }}
                    paperClassName = 'dialog'
                    >
                    Do you really want to delete {this.state.firstname} {this.state.lastname} ?
                </Dialog>
                <Notifications />
            </tr>
        )
    }else{
        return(
            <tr className = 'dataRow activeRow' key = {index}>
                <td>{index}</td>
                <td>
                    <input 
                        value = {firstname}
                        onChange = {e => this.setState({ firstname: e.target.value })}
                    />
                </td>
                <td>
                    <input 
                        value = {lastname}
                        onChange = {e => this.setState({lastname: e.target.value })}
                    />
                </td>
                <td>
                    <input type = 'date'
                        value = {birthday}
                        onChange = {e => this.setState( {birthday: e.target.value })}
                    />
                </td>
                <td className = 'actionCell' >
                    <i class="fas fa-check" 
                        title ='Save changes'
                        onClick = {e => this.handlePutStudent()}></i>
                    <i class="fas fa-times" 
                       title ='Cancel'
                       onClick = {e => this.handleEditCancel()}></i>
                </td>
                <Dialog
                    title="Confirm the student's removal"
                    actions={actions}
                    modal={true} 
                    open={this.state.dialogOpen}
                    bodyStyle = {{ color: `white` }}
                    titleStyle = {{ color: `white` }}
                    paperClassName = 'dialog'
                    >
                    Do you really want to delete {this.state.firstname} {this.state.lastname} ?
                </Dialog>
            </tr>
        )
    }
  }
}

const mapStateToProps = ({ studentsReducer }) => {
    return {
        putSuccess: studentsReducer.putSuccess
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        putStudentAction,
        removeStudentAction,
        changeView
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Student)