const URL = 'http://localhost:8085';

export const fetchResources = (endpoint) => {
    return fetch(URL + `/${endpoint}`,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        mode: 'cors' 
        
    })
}

export const addResource = (endpoint, body) => {
    return fetch(URL + `/${endpoint}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(body),  
        mode: 'cors' 
    })
}

export const removeResource = (endpoint, index) => {
    return fetch(URL + `/${endpoint}/${index}`, {
        method: 'DELETE',
        mode: 'cors'
    })
}

export const fetchGrades = () => {
    return fetch(URL + '/grades', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        mode: 'cors' 
    })
}

export const putResource = (endpoint, index, body) => {
    return fetch(URL + `/${endpoint}/${index}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        mode: 'cors' 
    })
}