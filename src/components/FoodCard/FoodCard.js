
import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button, Form } from 'react-bootstrap'
import './FoodCard.css'

function FoodCard(props) {
    const { data } = props;
    console.log(data)
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



                    {data.product_category === "food" &&
                        <Button variant="primary" onClick={() => props.handleFoodSelection(data.id)}>Select</Button>
                    }


                    {data.product_category === "supplement" &&
                        <Form>
                            <Form.Check 
                                type="checkbox"
                                id={data.id}
                                label={"Add to Mealplan"}
                                onChange={() => props.handleSupplements(data.id)}
                            />
                        </Form>
                    }

            
                </Card.Body>
            </Card>
        </div>
    )
}

export default FoodCard
