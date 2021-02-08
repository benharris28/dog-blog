
import config from '../config';

const SelectionsApiService = {

   
    getSelectionsById(id) {
        return fetch(`${config.API_ENDPOINT}/selections/${id}`, {
            headers: {
            
            },
          })
            .then(res =>
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
        },
        getDogWithSelections(id) {
            return fetch(`${config.API_ENDPOINT}/selections/mealplan/${id}`, {
                headers: {
                
                },
              })
                .then(res =>
                  (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                )
            },
       
        updateSelections(dogSelections, id) {
            return fetch(`${config.API_ENDPOINT}/selections/${id}`, {
            
                method: 'PATCH',
                headers: {
            
                    'content-type': 'application/json'
                },
          
                body: JSON.stringify(dogSelections)
             
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

export default SelectionsApiService;