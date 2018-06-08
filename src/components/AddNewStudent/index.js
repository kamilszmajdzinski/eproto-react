import React, { Component } from 'react'
import './style.css'

export default class AddNewStudent extends Component {
  render() {
    return (
        <tr className = 'dataRow' id = 'addStudentRow'>
            
                <td>
                    <input type = 'number' required/>
                </td>
                <td>
                    <input type = 'text' required/>
                </td>
                <td>
                    <input type = 'text' required/>
                </td>
                <td>
                    <input type = 'date' required/>
                </td>
            <td className = 'actionCell' >
            <i class="fas fa-check" title = "Add student"></i>
            </td>
        
    </tr>
    )
  }
}
