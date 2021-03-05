import React from 'react'
import { Button, Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import Media from 'react-bootstrap/Media'
import './BlogArticleListWithFeature.css'

const BlogArticleListWithFeature = () => {
    return (
        <div>
            <Container>
                <div className="section-title">
                    <h2>Best of nutrition</h2>
                </div>


                <div className="article-container">
                    <div className="highlight-card">
                        <Card className="article-card">
                        
                                <Card.Img variant="top" src="https://res.cloudinary.com/dhkmle6ei/image/upload/v1609618212/iStock-1213516345_arz9cd.jpg" />
                         
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                     
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="article-list">



                        <Media className="article-card-small">
                            <img
                                width={100}
                                height={100}
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
                                width={100}
                                height={100}
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
                </div>


            </Container>

        </div>
    )
}

export default BlogArticleListWithFeature;