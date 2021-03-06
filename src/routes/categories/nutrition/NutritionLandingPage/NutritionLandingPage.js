import { Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import Media from 'react-bootstrap/Media'
import { Link } from 'react-router-dom'
import CategoryHero from '../../../../components/CategoryHero/CategoryHero'
import BlogArticleListWithFeature from '../../../../components/BlogArticleListWithFeature/BlogArticleListWithFeature'
import bestOfArticles from './data'
import { guides } from './data'
import HeroWithTabs from '../../../../components/HeroWithTabs/HeroWithTabs'
import BlogCard from '../../../../components/BlogCard'
import './NutritionLandingPage.css'

import React from 'react'



const NutritionLandingPage = () => {
    const featureArticle = bestOfArticles.featureArticle[0]

    const articleList = bestOfArticles.bestOfArticles

    console.log(articleList)

   
    return (
        <div>
            <CategoryHero title="Nutrition Section" subtitle="This is the nutrition section" />

            <div className="section-container">
                <Container>
                    <div className="section-title">
                        <h2>Nutrition Guides</h2>
                    </div>

                    <CardDeck>
                        {guides.guideList.map(guide =>
                            <Card key={guide.id}>
                            <Card.Header>{guide.title}</Card.Header>
                            <Card.Body>
                                <Card.Title>{guide.title}</Card.Title>
                                <Card.Text>
                                    {guide.description}
                            </Card.Text>
                                <Link to={guide.link}>
                                    <Button variant="primary">{guide.button_text}</Button>
                                </Link>
                            </Card.Body>
                        </Card> 
                        )}

                    
                     
                       
                    </CardDeck>
                </Container>
            </div>

            <div className="section-container">
                <BlogArticleListWithFeature feature={featureArticle} articles={articleList}/>
               
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
