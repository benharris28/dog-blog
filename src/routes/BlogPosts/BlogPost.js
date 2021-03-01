import React from 'react'

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
            related_articles: [1,2,3],
            content_block_1: {
                title: "test content block 1",
                link_url: "www.test.com"
            }
        }
    ]

    const id = props.match.params.id

    console.log(id)

    // Filter the articles and match based on parameter in path

    const articleFilter = posts.filter(post => post.article_name == id)
    const articleToDisplay = articleFilter[0]
    
    console.log(articleToDisplay[0])

    // filter posts list based on parameters in path

    return (
        <div>
            Dog Blog
            <h1>{articleToDisplay.title}</h1>
            {posts.content}
        </div>
    )
}

export default BlogPost
