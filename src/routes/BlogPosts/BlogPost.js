import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const BlogPost = (props) => {

    const posts = [
        {
            id: 1,
            article_name: "first-blog-post",
            hero_image: "test",
            title: "test",
            subtitle: "Test Substitle",
            content: "test",
            display_matchmaker: true,
            related_articles: [1, 2, 3],
            content_block_1: {
                title: "test content block 1",
                link_url: "www.test.com"
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
            <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                    Library
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
            </Breadcrumb>
            Dog Blog
            <h1>{articleToDisplay.title}</h1>
            {posts.content}
        </div>
    )
}

export default BlogPost
