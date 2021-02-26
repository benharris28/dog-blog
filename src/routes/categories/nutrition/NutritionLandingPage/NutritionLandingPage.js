import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

import React from 'react'

const NutritionLandingPage = () => {
    return (
        <div>
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
