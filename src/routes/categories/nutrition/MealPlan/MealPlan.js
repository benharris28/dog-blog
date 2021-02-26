import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router'
import { useStateValue } from '../../../../StateProvider'
import { ResultsHero, CardList } from '../../../../components'
import FoodCard from '../../../../components/FoodCard'
import CardDeck from 'react-bootstrap/CardDeck'
import DogApiService from '../../../../services/dog-api-service'
import SelectionsApiService from '../../../../services/selections-api-service'
import supplementResults from '../../../../data/SupplementList'
import foodResults from '../../../../data/FoodList'


const MealPlan = (props) => {

    const history = useHistory();

    const [{ dog }, dispatch] = useStateValue()

    const [state, setState] = useState({
        progress: '10',
        food_selection: '',
        supplement_selection: []
    })

    useEffect(() => {
        // Update the document title using the browser API
        window.scrollTo(0, 0);

        updateSelections()


    }, []);

    const updateSelections = () => {
        const dogId = Number(props.match.params.id)

        SelectionsApiService.getDogWithSelections(dogId)
        .then(res => {
            dispatch({ type: 'UPDATE_DOG', payload: res })

            SelectionsApiService.getSelectionsById(res.id)
            .then(res => {
                console.log(res)
                
                setState({
                    ...state,
                    food_selection: res.food_selection,
                    supplement_selection: res.supplement_selection
                })
            })

        })
        .catch(err => console.log(err))
            
        }
     


    return (
        <div>
            Food
            <CardDeck>
                
                {foodResults.foodResults.filter(foodResult => foodResult.id == state.food_selection).map(foodResult => 
                    <FoodCard data={foodResult}/>
                
                )}
                
            </CardDeck>

            Supplements
            <CardDeck>
                
                {supplementResults.supplementResults.filter(a => state.supplement_selection.includes(a.id)).map(foodResult => 
                    <FoodCard data={foodResult}/>
                
                )}
                
            </CardDeck>

            

        </div>
    )
}

export default MealPlan
