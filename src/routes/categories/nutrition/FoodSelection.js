import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router'
import { useStateValue } from '../../../StateProvider'
import ProgressBar from '../../../components/ProgressBar'
import DogApiService from '../../../services/dog-api-service'
import { ResultsHero, CardList } from '../../../components'
import foodResults from '../../../data/FoodList'

const FoodSelection = () => {

    const history = useHistory();

    const [{ dog }, dispatch] = useStateValue()

    const [state, setState] = useState({
        current_dog: ''
    })


    useEffect(() => {
        // Update the document title using the browser API
        window.scrollTo(0, 0);

        updateDog()

        setState({ ...state, current_dog: dog})


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

  
     
     
    

     const list = foodResults.foodResults
     console.log(list)

     const matchFoods = () => {
        const dogAttribute = state.current_dog.attributes

        const match = (arr, dogAttribute) => dogAttribute.every(v => arr.includes(v));
        
        const matchedFoods = list.filter(food => match(food.attribute_list, dogAttribute) === true).sort((a, b) => b.rank_score - a.rank_score).slice(0,3).map(foodResult => "test")

        return matchedFoods
     }

     

    return (
        <div>
            <ProgressBar />
            {matchFoods()}
            <div>
                <ResultsHero />
                
                <CardList />
            </div>

           

            
        </div>

    )
    

}

export default FoodSelection;