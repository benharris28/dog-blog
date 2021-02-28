import { Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import { Link } from 'react-router-dom'
import CategoryHero from '../../../../components/CategoryHero/CategoryHero'
import HeroWithTabs from '../../../../components/HeroWithTabs/HeroWithTabs'
import BlogCard from '../../../../components/BlogCard'

import React from 'react'

const NutritionLandingPage = () => {
    return (
        <div>
            <CategoryHero />

            <div className="section-container">
                <Container>
                <CardDeck>
               
                    <Card>
                        <Card.Header>Find the best food</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>Treat reviews</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>Treat reviews</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
                </Container>
            </div>

            <div className="section-container">

                <Container>
                    Best of Nutrition
                    <CardDeck>
                        <BlogCard title="How to" description="Test Description" image="https://res.cloudinary.com/dhkmle6ei/image/upload/v1609618212/iStock-1213516345_arz9cd.jpg" />
                        <BlogCard title="How to" description="Test Description" image="https://res.cloudinary.com/dhkmle6ei/image/upload/v1609618212/iStock-1213516345_arz9cd.jpg" />
                        <BlogCard title="How to" description="Test Description" image="https://res.cloudinary.com/dhkmle6ei/image/upload/v1609618212/iStock-1213516345_arz9cd.jpg" />

                    </CardDeck>
                </Container>
            </div>


            <Container>




                <Jumbotron>
                    <h1>Food Matchmaker</h1>
                    <p>
                        Every dog is unique. We'll match your doggo with perfect food for their needs
                </p>
                    <p>
                        <Link to='/foodadvisor/page-one'>
                            <Button variant="primary">Start Matchmaker</Button>
                        </Link>

                    </p>
                </Jumbotron>


            </Container>
        </div>
    )
}

export default NutritionLandingPage
