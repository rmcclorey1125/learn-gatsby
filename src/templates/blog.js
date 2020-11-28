import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

// Using Markdown
// export const query = graphql`
//     query ($slug: String!) {
//     markdownRemark (fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
//   `

export const query = graphql`
    query ($slug: String!) {
    contentfulBlogPost (slug: { eq: $slug }) {
      title
      publishedDate(fromNow: true)
    }
  }
  `


const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {/* Using Markdown
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div> */}
        </Layout>
    )
}

export default Blog