import { Row, Col, Container, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

import React from 'react'

const NutritionLandingPage = () => {
    return (
        <div className="test">
            <Row>
                <Col md={6} sm={12}>
                    Dog
                    <LinkContainer to='/foodadvisor/page-one'>
                        <Button>
                            Start Here
                        </Button>
                    </LinkContainer>
                </Col>
                <Col md={6} sm={12}>
                    Image goes here
                </Col>
            </Row>
        </div>
    )
}

export default NutritionLandingPage
