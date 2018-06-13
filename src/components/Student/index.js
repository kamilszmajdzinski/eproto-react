import React, { Component } from 'react'

class Student extends Component {
  render() {
      const { student } = this.props
    return (
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
}

export default Student