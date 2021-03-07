import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Container from 'react-bootstrap/Container'
import './BlogPost.css'

const BlogPost = (props) => {

    const posts = [
        {
            id: 1,
            article_name: "first-blog-post",
            hero_image: "test",
            title: "Fresh food vs. Kibble",
            subtitle: "Making sense of the different types of dog food",
            content: "test",
            display_matchmaker: true,
            related_articles: [1, 2, 3],
            content: {
               
            }
        }
    ]

    const id = props.match.params.id

    console.log(id)

    // Filter the articles and match based on parameter in path

    const articleFilter = posts.filter(post => post.id == id)
    const articleToDisplay = articleFilter[0]

    console.log(articleToDisplay)

    // filter posts list based on parameters in path

    return (
        <div>
           

            <Container>

            <Breadcrumb className="vertical-space">
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Nutrition
                </Breadcrumb.Item>
                <Breadcrumb.Item active>{articleToDisplay.title}</Breadcrumb.Item>
            </Breadcrumb>

            <h1 className="vertical-space">{articleToDisplay.title}</h1>

            <div className="blog-hero-image">
               
                    <img className="picture" src="https://res.cloudinary.com/dhkmle6ei/image/upload/v1615006626/Blue_Grotto_Pets_and_Animals_Business_Advertising_Website_mf45gs.png" alt="Flowers" />
            
            </div>

            <div className="blog-intro vertical-space">
                <p>This is the blog into section</p>
            </div>

            <div className="article-content">
                <h2>Kibble</h2>
                <img className="article-picture" src="https://res.cloudinary.com/dhkmle6ei/image/upload/v1615006626/Blue_Grotto_Pets_and_Animals_Business_Advertising_Website_mf45gs.png" alt="Flowers" />
                <p>This is information about kibble</p>
            </div>
            <div className="article-content">
                <h2>Kibble</h2>
                <img className="article-picture" src="https://res.cloudinary.com/dhkmle6ei/image/upload/v1615006626/Blue_Grotto_Pets_and_Animals_Business_Advertising_Website_mf45gs.png" alt="Flowers" />
                <p>This is information about kibble</p>
            </div>

          

            </Container>
        
        </div>
    )
}

export default BlogPost
