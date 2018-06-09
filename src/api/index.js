const URL = 'http://localhost:8085';

export const fetchStudents = () => {
    return fetch(URL + '/students',{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        mode: 'cors' 
        
    })
}

export const addStudent = (body) => {
    return fetch(URL + '/students', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(body),  
        mode: 'cors' 
    })
}

export const removeStudent = (index) => {
    return fetch(URL + `/students/${index}`, {
        method: 'DELETE',
        mode: 'cors'
    })
}