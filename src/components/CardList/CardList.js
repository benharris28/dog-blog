import React from 'react'
import Card from '../FoodCard'

function CardList(props) {
    const { foods } = props;
    console.log(foods)

    return (
        <div>
            TestList
            {props.foods.map(card => <Card data={card} />)}
        
        </div>
    )
}

export default CardList
