
import config from '../config';

const DogApiService = {

   
    getDogById(id) {
        return fetch(`${config.API_ENDPOINT}/dog/${id}`, {
            headers: {
            
            },
          })
            .then(res =>
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
        },
        createDog(newDog) {
            console.log(newDog)
            return fetch(`${config.API_ENDPOINT}/dog/`, {
            
                method: 'POST',
                headers: {
            
                    'content-type': 'application/json'
                },
          
                body: JSON.stringify(newDog)
             
            })
            .then(res => 
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
        },
        updateDog(dog, id) {
            return fetch(`${config.API_ENDPOINT}/dog/${id}`, {
            
                method: 'PATCH',
                headers: {
            
                    'content-type': 'application/json'
                },
          
                body: JSON.stringify(dog)
             
            })
            /*.then(res => 
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )  */
        },
        createSelections(dog_id) {
      
            return fetch(`${config.API_ENDPOINT}/selections/${dog_id}`, {
            
                method: 'POST',
                headers: {
            
                    'content-type': 'application/json'
                },
          
                
             
            })
            .then(res => 
                (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
        },

}

export default DogApiService;