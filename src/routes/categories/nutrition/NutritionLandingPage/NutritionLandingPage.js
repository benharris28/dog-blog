import { Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import Media from 'react-bootstrap/Media'
import { Link } from 'react-router-dom'
import CategoryHero from '../../../../components/CategoryHero/CategoryHero'
import HeroWithTabs from '../../../../components/HeroWithTabs/HeroWithTabs'
import BlogCard from '../../../../components/BlogCard'

import React from 'react'

const NutritionLandingPage = () => {
    return (
        <div>
            <CategoryHero title="Nutrition Section" subtitle="This is the nutrition section" />

            <div className="section-container">
                <Container>
                    <div className="section-title">
                        <h2>Nutrition Guides</h2>
                    </div>

                    <CardDeck>

                        <Card>
                            <Card.Header>Find the best food</Card.Header>
                            <Card.Body>
                                <Card.Title>Food Matchmaker</Card.Title>
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
                    <div className="section-title">
                        <h2>Best of nutrition</h2>
                    </div>

                    <div>

                    <Media className="article-card-small">
                        <img
                            width={64}
                            height={64}
                            className="mr-3 article-image-small"
                            src="https://res.cloudinary.com/dhkmle6ei/image/upload/v1609618212/iStock-1213516345_arz9cd.jpg"
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <h5>Media Heading</h5>
                            <p>
                                Test description for article link
                            </p>
                            <Card.Link variant="primary">Go somewhere</Card.Link>
                        </Media.Body>
                    </Media>
                    <Media>
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src="https://res.cloudinary.com/dhkmle6ei/image/upload/v1609618212/iStock-1213516345_arz9cd.jpg"
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <h5>Media Heading</h5>
                            <p>
                                Test description for article link
                            </p>
                            <Card.Link variant="primary">Go somewhere</Card.Link>
                        </Media.Body>
                    </Media>
                    </div>

                  
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
