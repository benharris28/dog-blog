
import React from 'react'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'
import './BlogCard.css'

function BlogCard(props) {
    const { title, description, link, image } = props;

    return (
        <div>
            <Card className="blog-card">
           
                    <Card.Img className="blog-card-image" variant="top" src={image} />
             
                
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text  style={{ height: '150px' }}>
                        {description}
                    </Card.Text>



            
                </Card.Body>
            </Card>
        </div>
    )
}

export default BlogCard
