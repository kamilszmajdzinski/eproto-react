import React, { Component } from 'react'

export default class AddNewStudent extends Component {
  render() {
    return (
        <tr className = 'dataRow'>
            <td>
                <input />
            </td>
            <td>
                <input />
            </td>
            <td>
                <input />
            </td>
            <td>
                <input />
            </td>
            <td className = 'actionCell' >
            <i class="fas fa-check" title = "Add student"></i>
            </td>
    </tr>
    )
  }
}
