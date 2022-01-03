import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

import {
  linkText,
  linkWrapper
} from '../../components/css/pages.module.css'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Blog">
      <p> Here is a somewhat unorganized collection of what I do in my free time.</p>
      <br/>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>
              <span className={linkWrapper}>
                <Link to={`/blog/${node.slug}`} className={linkText}>
                  {node.frontmatter.title}
                </Link>
              </span>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`

export default BlogPage