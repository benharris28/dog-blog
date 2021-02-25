import React from 'react'
import FoodCard from '../FoodCard'
import CardDeck from 'react-bootstrap/CardDeck'
import './CardList.css'

function CardList(props) {
    const { foods } = props;
    console.log(foods)

    return (
        <div className="cardlist">
            TestList
            <CardDeck>
                {props.foods.map((card,index) => <FoodCard 
                                                    data={card} 
                                                    key={index}

                                                handleFoodSelection={props.handleFoodSelection} 
                                                handleSupplements={props.handleSupplements}/>
                                                
                                                )}
            </CardDeck>
        </div>
    )
}

export default CardList
