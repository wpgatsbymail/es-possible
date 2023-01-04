import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import parse from "html-react-parser"

// We're using Gutenberg so we need the block styles
// these are copied into this project due to a conflict in the postCSS
// version used by the Gatsby and @wordpress packages that causes build
// failures.
// @todo update this once @wordpress upgrades their postcss version
import "../css/@wordpress/block-library/build-style/style.css"
import "../css/@wordpress/block-library/build-style/theme.css"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data: { previous, next, post } }) => {


  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />

      <article
        className="blog-post flex flex-col justify-center items-center"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="w-[60vw]">
          <h1 className="text-4xl font-bold text-center my-8" itemProp="headline">{parse(post.title)}</h1>


        </header>

        {!!post.content && (
          <div className="">
          <section className="w-[60vw] flex flex-col gap-4 articleBody-styles" itemProp="articleBody">{parse(post.content)}</section>
          </div>
        )}

        <hr />

        <footer>
          <Bio />
        </footer>
        <nav className="blog-post-nav w-[50vw]">
        <ul
          // style={{
          //   display: `flex`,
          //   flexWrap: `wrap`,
          //   justifyContent: `space-around`,
          //   listStyle: `none`,
          //   padding: 0,
          // }}
          className="flex jutify-center justify-between list-none p-0 "
        >
          <li>
            {previous && (
              <Link to={previous.uri} rel="prev">
                ← {parse(previous.title)}
              </Link>
            )}
          </li>

          <li>
            {next && (
              <Link to={next.uri} rel="next">
                {parse(next.title)} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      </article>

      
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query ExercisePostById(
    $id: String!
    $previousExerciseId: String
    $nextExerciseId: String
  ) {
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        node {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                placeholder: BLURRED
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
    previous: wpPost(id: { eq: $previousExerciseId }) {
      uri
      title
    }
    next: wpPost(id: { eq: $nextExerciseId }) {
      uri
      title
    }
  }
`
