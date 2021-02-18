import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router'
import { useStateValue } from '../../../StateProvider'
import ProgressBar from '../../../components/ProgressBar'
import DogApiService from '../../../services/dog-api-service'
import { ResultsHero, CardList } from '../../../components'
import FoodList from '../../../data/FoodList'

const FoodSelection = () => {

    const history = useHistory();

    const [{ dog, progress }, dispatch] = useStateValue()

    const [state, setState] = useState({
        progress: '10',
        dog: ''
    })

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

     const dogAttribute = dog.attributes

     const match = (arr, dogAttribute) => dogAttribute.every(v => arr.includes(v));

     // Generate the list of recommended foods
     const generateFoodRecos = () => {
        

        return FoodList.foodResults.filter(food => match(food.attribute_list, dogAttribute) === true).sort((a, b) => b.rank_score - a.rank_score).slice(0,3).map(f => test)
     }

     const foodReco = generateFoodRecos()

     console.log(foodReco)

    return (
        <div>
            <ProgressBar />
            
            <div>
                <ResultsHero />
                <CardList />
            </div>

           

            
        </div>

    )
    

}

export default FoodSelection;