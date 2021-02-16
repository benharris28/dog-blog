import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router'
import { useStateValue } from '../../../StateProvider'
import ProgressBar from '../../../components/ProgressBar'
import DogApiService from '../../../services/dog-api-service'
import { ResultsHero, CardList } from '../../../components'

const FoodSelection = () => {
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