import React from "react"
import { array, shape } from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"

import { Section } from "./Basic"

const Articles = ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}) => (
  <Section>
    <h3>Articles</h3>
    <div>
      {posts &&
        posts.map(({ node: post }) => (
          <article key={post.id}>
            <header>
              <p>
                <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
              </p>
            </header>
          </article>
        ))}
      {posts && posts.length === 0 && <p>Coming soon...</p>}
    </div>
  </Section>
)

Articles.propTypes = {
  data: shape({
    allMarkdownRemark: shape({
      edges: array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ArticlesQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: {
              templateKey: { eq: "blog-post" }
              published: { eq: true }
            }
          }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                published
                featuredpost
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Articles data={data} count={count} />}
  />
)
