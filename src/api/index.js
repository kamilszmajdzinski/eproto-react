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