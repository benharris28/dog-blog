import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'
import Media from 'react-bootstrap/Media'
import { Link } from 'react-router-dom'
import CategoryHero from '../../../../components/CategoryHero/CategoryHero'
import BlogArticleListWithFeature from '../../../../components/BlogArticleListWithFeature/BlogArticleListWithFeature'
import BlogArticleList from '../../../../components/BlogArticleList/BlogArticleList'
import bestOfArticles from './data'
import { guides } from './data'
import { useStateValue } from '../../../../StateProvider'
import './NutritionLandingPage.css'





const NutritionLandingPage = () => {
    const [{ dog, progress, width }, dispatch] = useStateValue()

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
                            <Card className={guide.class} key={guide.id}>
                       
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
                {width < 700 && 
                    <BlogArticleListWithFeature feature={featureArticle} articles={articleList}/>
                }

                {width >= 700 && 
                    <BlogArticleList articles={articleList}/>
                }
               
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
