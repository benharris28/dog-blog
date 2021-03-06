import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import CardColumns from 'react-bootstrap/CardColumns'
import './BlogArticleList.css'

const BlogArticleList = (props) => {
    return (
        <div>
            <Container>
                    <div className="section-title">
                        <h2>Nutrition Guides</h2>
                    </div>

                    <CardColumns>
                        {props.articles.map(article =>
                       
                            <Card className={article.class} key={article.id}>
                            <Card.Img variant="top" src="https://res.cloudinary.com/dhkmle6ei/image/upload/v1609618212/iStock-1213516345_arz9cd.jpg" />
                            <Card.Body>
                                <Card.Title>{article.title}</Card.Title>
                                <Card.Text>
                                    {article.description}
                            </Card.Text>
                                <Link to={article.link}>
                                    <Button variant="primary">{article.button_text}</Button>
                                </Link>
                            </Card.Body>
                        </Card> 
                
                        )}

                    
                     
                       
                    </CardColumns>
                </Container>
        </div>
    )
}

export default BlogArticleList;