import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router'
import { useStateValue } from '../../../../StateProvider'
import ProgressBar from '../../../../components/ProgressBar'
import DogApiService from '../../../../services/dog-api-service'
import SelectionsApiService from '../../../../services/selections-api-service'
import { ResultsHero, CardList } from '../../../../components'
import supplementResults from '../../../../data/SupplementList'

const SupplementSelection = () => {

    const history = useHistory();

    const [{ dog }, dispatch] = useStateValue()

    const [state, setState] = useState({
        progress: '10',
        selectedSupplements: [],
        supplementResults: supplementResults.supplementResults
    })




    // Compare the array of attributes in the dog object to the array of attributes for each food
    // Filter if there is an exact match
    // Create a new array with foods that have exact matches

    const matchFoods = () => {
        const dogAttribute = dog.attributes

        const match = (arr, dogAttribute) => dogAttribute.every(v => arr.includes(v));
        
        const matchedSupplements = state.supplementResults
                                .filter(supplement => match(supplement.attribute_list, dogAttribute) === true)
                                .sort((a, b) => b.rank_score - a.rank_score)
                                .slice(0,3)
                                .map(supplementResult => supplementResult)

       return matchedSupplements
    }


    useEffect(() => {
        // Update the document title using the browser API
        window.scrollTo(0, 0);

        updateDog()


    }, []);

  
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

     console.log(state)
     
     // Call the match function to populate the array of foods to pass as props to the food cards
     const newlist = matchFoods()

 
     // Submit food selection from food card and update selections table in database

     const handleSupplements = (id) => {
         console.log('function ran')
         console.log(id)
        let clonedSupplements = state.supplementResults
      
        clonedSupplements.forEach((supplement) => {
          if (supplement.id == id)
            supplement.checked = !supplement.checked
        });
      
        let selectedSupplements = clonedSupplements.filter(supplement => supplement.checked === true)
      
        setState({
            ...state,
          supplementResults: clonedSupplements,
          selectedSupplements: selectedSupplements
        });
      
       }
    

     

    return (
        <div>
            <ProgressBar />
      
            <div>
                <ResultsHero />
                
                <CardList foods={newlist} handleSupplements={handleSupplements}/>
            </div>

           

            
        </div>

    )
    

}

export default SupplementSelection;