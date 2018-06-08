import React, { Component } from 'react'
import './style.css'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AddNewCourse from '../AddNewCourse'


class Courses extends Component {

    state = {
        addNewCourseComponentEnabled: false
    }

    handleAddNewCourse = () => {
        this.setState({ addNewCourseComponentEnabled: true})
    }

  render() {
    return (
      <div className = 'dataContainer'>
        <p> Courses </p>
        <table className = 'dataTable' id = 'coursesTable'>
            <thead>
                <tr>
                    <th>
                        Course name
                    </th>
                    <th>
                        Lecturer
                    </th>
                    <th>
                        actions
                    </th>
                </tr>
            </thead>
            <tbody>

                {this.state.addNewCourseComponentEnabled && <AddNewCourse /> }

                <tr className = 'dataRow'>
                    <td>
                        Programowanie
                    </td>
                    <td>
                        Kajko Kokosz
                    </td>
                    <td className = 'actionCell'>
                        <i class="fas fa-edit" title ='Eit course'></i>
                        <i class="fas fa-trash" title ='Delete course'></i>
                    </td>
                </tr>
            </tbody>
        </table>

        <FloatingActionButton 
                style = {style} 
                backgroundColor = '#1db954'
                 onClick = {this.handleAddNewCourse}
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


export default Courses