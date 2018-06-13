import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class Student extends Component {

    constructor(props){
        super(props)
        const { student } = this.props
        this.state = {
            dialogOpen: false,
            editStudentView: false,
            student: {
                index: student.index,
                firstName: student.firstname,
                lastname: student.lastname,
                birthday: student.birthday,
            },
            tempStudent: {
                index: null,
                firstname: '',
                lastname: '',
                birthday: ''
            }
        }
    }

    handleRemoveDialogOpen = () => {
        this.setState({ dialogOpen: true })
    }

    handleDialogClose = () => {
        this.setState({ dialogOpen: false })
    }

    handleEditStudent = () => {
        this.setState({ editStudentView: true })
    }

  render() {
      const { student } = this.state

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
            <tr className = 'dataRow' key = {student.index}>
                <td>{student.index}</td>
                <td>{student.firstname}</td>
                <td>{student.lastname}</td>
                <td>{student.birthday}</td>
                <td className = 'actionCell' >
                    <i class="far fa-chart-bar" 
                    title = 'Students grades'
                    onClick></i>
                    <i class="fas fa-edit" 
                        title ='Edit student'
                        onClick = {e => this.handleEditStudent()}
                    ></i>
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
            </tr>
        )
    }else{
        return(
            <tr className = 'dataRow activeRow' key = {student.index}>
                <td>{student.index}</td>
                <td>
                    <input 
                        value = {student.firstname}
                        onChange = {e => this.setState({ firstname: e.target.value })}
                    />
                </td>
                <td>
                    <input 
                        value = {student.lastname}
                        onChange = {e => this.setState({ lastname: e.target.value })}
                    />
                </td>
                <td>
                    <input type = 'date'
                        value = {student.birthday}
                        onChange = {e => this.setState({ birthday: e.target.value })}
                    />
                </td>
                <td className = 'actionCell' >
                    <i class="fas fa-check" 
                        title ='Save changes'
                        onClick = {e => this.handlePutCourse()}></i>
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

export default Student