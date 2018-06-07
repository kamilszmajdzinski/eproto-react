import React, { Component } from 'react'
import './style.css'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AddNewStudent from "../AddNewStudent";

export default class Students extends Component {

    state = {
        addNewStudentComponentEnabled: false
    }

   handleAddNewStudent = () => {
       this.setState({
           addNewStudentComponentEnabled: true
       })
   } 

  render() {
    return (
      <div className = 'studentsContainer'>
        <p> Students </p>
        
        <table className = 'dataTable'>
            <tr>
                <th>
                    Index
                </th>
                <th>
                    First name
                </th>
                <th>
                    Last name
                </th>
                <th>
                    Birthday
                </th>
                <th>
                    actions
                </th>
            </tr>

            {this.state.addNewStudentComponentEnabled && <AddNewStudent />}

            <tr className = 'dataRow'>
                <td>
                    122376
                </td>
                <td>
                    Kamil
                </td>
                <td>
                    Szmadjzinski
                </td>
                <td>
                    11.11.1005
                </td>
                <td className = 'actionCell' >
                    <i class="far fa-chart-bar" title = 'Oceny studenta'></i>
                    <i class="fas fa-trash" title ='Usuń studenta'></i>
                </td>
            </tr>

            <tr className = 'dataRow'>
                <td>
                    122376
                </td>
                <td>
                    Kamil
                </td>
                <td>
                    Szmadjzinski
                </td>
                <td>
                    11.11.1005
                </td>
                <td className = 'actionCell' >
                    <i class="far fa-chart-bar" title = 'Oceny studenta'></i>
                    <i class="fas fa-trash" title = 'Usuń studenta'></i>
                </td>
            </tr>


            {/* <tr>
                <td>
                    122376
                </td>
                <td>
                    Kamil
                </td>
                <td>
                    Szmadjzinski
                </td>
                <td>
                    11.11.1005
                </td>
                <td>
                    <i class="far fa-chart-bar"></i>
                    <i class="fas fa-trash"></i>
                </td>
            </tr> */}


        </table>
        
            <FloatingActionButton style = {style} backgroundColor = '#1db954' onClick = {this.handleAddNewStudent}>
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