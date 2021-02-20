
import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import './FoodCard.css'

function FoodCard(props) {
    const { data } = props;

    return (
        <div>
            <Card>
                <Card.Header>
                    <Card.Img variant="top" src={data.image} />
                </Card.Header>
                
                <Card.Body>
                    <Card.Title>{data.brand}</Card.Title>
                    <Card.Text  style={{ height: '150px' }}>
                        {data.description_text}
                    </Card.Text>
                    <Button variant="primary" onClick={() => props.handleFoodSelection(data.id)}>Select</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default FoodCard
