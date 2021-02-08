import config from '../config';

const UserApiService = {

    createUser(newUser) {
        console.log(newUser)
        return fetch(`${config.API_ENDPOINT}/user/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
         
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
    getUser(user_id) {
     
        return fetch(`${config.API_ENDPOINT}/user/${user_id}`, {
          
            headers: {
            
            },
         
         
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        )
    },
   

}

export default UserApiService;