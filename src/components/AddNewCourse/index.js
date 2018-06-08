import React, { Component } from 'react'

export default class AddNewCourse extends Component {
  render() {
    return (
        <tr className = 'dataRow' id = 'addStudentRow'>
            
                <td>
                    <input type = 'text' required/>
                </td>
                <td>
                    <input type = 'text' required/>
                </td>
            <td className = 'actionCell' >
            <i class="fas fa-check" title = "Add course"></i>
            </td>
        
    </tr>
    )
  }
}
