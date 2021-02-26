
import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button, Form } from 'react-bootstrap'
import '../FoodCard/FoodCard.css'

function MealPlanCard(props) {
    const { data, dog } = props;
    console.log(data)
    return (
        <div>
            <Card>
                <Card.Header>{data.product_category}</Card.Header>
                <Card.Header>
                    <Card.Img variant="top" src={data.image} />
                </Card.Header>
                
                <Card.Body>
                    <Card.Title>{data.brand}</Card.Title>
                    <Card.Subtitle>{data.product_name}</Card.Subtitle>

                    <Card.Text  style={{ height: '150px' }}>
                        Portion info
                            {data.purchase_format === "subscription" && 
                            <p className="subtext">{dog.name} gets approx {''} {Math.round((dog.calorie_requirement / data.calories_per_serving * 100)) / 100} packages per day</p>
                        
                            }
                            {data.purchase_format === 'Individual' && 
                            <p className="subtext">{dog.name} gets approx  {''} {Math.round((dog.calorie_requirement / data.calories_per_serving * 100)) / 100} scoops per day</p>
                            }
                    </Card.Text>
                    <Card.Text>
                        
                    </Card.Text>
                    



                  
                        
                        <Card.Link href={data.link} target="_blank" rel="noopener noreferrer">
                            <Button variant="primary">Purchase</Button>
                        
                        </Card.Link>


                  

            
                </Card.Body>
            </Card>
        </div>
    )
}

export default MealPlanCard
