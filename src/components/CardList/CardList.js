import React from 'react'
import Card from '../FoodCard'
import CardDeck from 'react-bootstrap/CardDeck'
import './CardList.css'

function CardList(props) {
    const { foods } = props;
    console.log(foods)

    return (
        <div className="cardlist">
            TestList
            <CardDeck>
                {props.foods.map(card => <Card data={card} 
                                                handleFoodSelection={props.handleFoodSelection} 
                                                handleSupplements={props.handleSupplements}/>
                                                
                                                )}
            </CardDeck>
        </div>
    )
}

export default CardList
