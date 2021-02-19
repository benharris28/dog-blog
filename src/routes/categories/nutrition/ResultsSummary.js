import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router'
import { useStateValue } from '../../../StateProvider'
import ProgressBar from '../../../components/ProgressBar'
import DogApiService from '../../../services/dog-api-service'

const ResultsSummary = () => {
    const history = useHistory();

    const [{ dog, progress }, dispatch] = useStateValue()


 

    useEffect(() => {
        // Update the document title using the browser API
        window.scrollTo(0, 0);

        updateDog()
    }, [dog]);

    
    const updateDog = () => {
        // const dogId = localStorage.getItem('dogId') ? localStorage.getItem('dogId') : null
         const dogId = Number(localStorage.getItem('dogId'))
         
         if(dogId) {
         DogApiService.getDogById(dogId)
         .then(res => {
                 console.log(res)
                 dispatch({ type: 'UPDATE_DOG', payload: res })
             
         })
         .catch(err => console.log(err))
         } 
     
     
     }

    

    const handleClick = () => {
      
        history.push('/foodadvisor/food')
    }

  
        

      
        return (
            <div>
        

                <div>
                <ProgressBar progress={progress} />
                
                <div>
        
                <div className="form-header white">
                <div className="content-section contain">
                  
                <div>
                    <h1 className="bar-heading center">We found the perfect mealplan for {dog.name}</h1>
                </div>

           
                        <div class="content-container center">

                         
                         
                      
                       
                                <div className="center">
                                   
                                    <p style={{marginTop: 20}}>We narrowed down thousand of options to just 3. All three are ideally suited for a {dog.age_group} {dog.breed} like {dog.name}</p>
                        {dog.issues.length > 0 && 
                            <p style={{marginTop: 20}}>These foods will also help address {dog.name}'s issues, including 
                                {dog.issues.map((issue, i) => {
                                
                                if(dog.issues.length > 2) {
                                  
                                    if(i < (dog.issues.length - 1)) {
                                       return ` ${issue}, `
                                    }

                                    else return ` and ${issue}`
                                }

                                else {
                                    if(i < (dog.issues.length - 1)) {
                                        return ` ${issue} and `
                                     }
 
                                     else return issue
                                }
                                })}</p>
                        }

                                </div>
                         
                        
                    
                            
                            <div style={{marginTop: 20}}>
                                <button 
                                    className="button"
                                    onClick={handleClick}
                                    >
                                    See {dog.name}'s Plan
                                        </button>
                                        </div>
                         
                        </div>
                    </div>
                    </div>
                  

                </div>

              
                </div>
                
             
            </div>
        )
    
}

export default ResultsSummary;