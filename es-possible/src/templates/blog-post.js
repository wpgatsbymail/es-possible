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

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({
  data: { previous, next, post, latestArticles },
}) => {
  // const featuredImage = {
  //   data: post.featuredImage?.node?.localFile?.childImageSharp?.gatsbyImageData,
  //   alt: post.featuredImage?.node?.alt || ``,
  // }
  // const ExerciseCategory = post.categories.nodes.name

  // console.log(ExerciseCategory)

  return (
    <Layout>
      <Seo title={post.title} description={post.excerpt} />

      <article
        className="blog-post flex flex-col justify-center items-center"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="md:w-[60vw]">
          <h1
            className="text-4xl font-bold text-center my-8"
            itemProp="headline"
          >
            {parse(post.title)}
          </h1>

   
        </header>

        {!!post.content && (
          <div className="">
            <section
              className=" px-4 flex flex-col gap-4 articleBody-styles md:w-[60vw] md:px-0"
              itemProp="articleBody"
            >
              {parse(post.content)}
            </section>
          </div>
        )}

        <hr />

        <nav className="flex flex-col md:flex-row justify-center w-[60vw] my-8 gap-4 md:justify-between">
          <div className="border p-2 bg-dirt-orange rounded text-white text-center hover:opacity-80 md:p-4">
            {previous && (
              <Link
                className=""
                to={previous.uri}
                rel="prev"
              >
                ← {parse(previous.title)}
              </Link>
            )}
          </div>

          <div className="border p-2 bg-dirt-orange rounded text-white text-center hover:opacity-80 md:p-4">
            {next && (
              <Link
                className=""
                to={next.uri}
                rel="next"
              >
                {parse(next.title)} →
              </Link>
            )}
          </div>
        </nav>
        {/* <div className="flex flex-col justify-center gap-8 max-w-[70vw]">
      <h3 className="self-start text-2xl">Ostatnie artykuły</h3>
      <div className="flex justify-center gap-8">
        {latestArticles.nodes.map(latestArticle =>{
          const title = latestArticle.title
          const featuredImage = latestArticle.featuredImage.node.localFile.childImageSharp.gatsbyImageData
          return(
            
         <div className="flex flex-col shadow max-w-[250px] h-[250px]">
                    <GatsbyImage
                      className="max-w-[250px] h-[100px]"
                      image={featuredImage}
                      // alt={featuredImage.alt}
                      // style={{ marginBottom: 50 }}
                    />
                    <div className="p-4">
                    <Link to={latestArticle.uri} itemProp="url">
                      <h5
                        itemProp="headline"
                        className="text-base font-bold tracking-tight text-gray-900 dark:text-white"
                      >
                        {parse(title)}
                      </h5>
                      <p
                        itemProp="description"
                        className="font-normal text-gray-700 text-xs dark:text-gray-400 excerpt"
                      >
                        {parse(latestArticle.excerpt)}
                      </p>
                    </Link>
                    </div>
                    </div>
                 
          )
        })}
        </div>
      </div> */}
        <div className="hidden md:flex flex-col justify-center gap-8 max-w-[60vw]">
          <h3 className="self-center text-2xl md:self-start">Ostatnie artykuły</h3>
          <div className=" md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 ">
            {latestArticles.nodes.map(latestArticle => {
              const title = latestArticle.title
              const featuredImage =
                latestArticle.featuredImage.node.localFile.childImageSharp
                  .gatsbyImageData
              return (
                <div className="flex flex-col shadow max-w-[250px] h-[250px]">
                  <GatsbyImage
                    className="max-w-[250px] h-[100px]"
                    image={featuredImage}
                    // alt={featuredImage.alt}
                    // style={{ marginBottom: 50 }}
                  />
                  <div className="p-4">
                    <Link to={latestArticle.uri} itemProp="url">
                      <h5
                        itemProp="headline"
                        className="text-base font-bold tracking-tight text-gray-900 dark:text-white"
                      >
                        {parse(title)}
                      </h5>
                      <p
                        itemProp="description"
                        className="font-normal text-gray-700 text-xs dark:text-gray-400 excerpt"
                      >
                        {parse(latestArticle.excerpt)}
                      </p>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </article>
      {/* <LatestArticles/> */}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: wpPost(id: { eq: $id }) {
      id
      excerpt
      content
      title
      categories {
        nodes {
          name
        }
      }
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
    previous: wpPost(id: { eq: $previousPostId }) {
      uri
      title
    }
    next: wpPost(id: { eq: $nextPostId }) {
      uri
      title
    }
    latestArticles: allWpPost(limit: 4) {
      nodes {
        id
        excerpt
        title
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100, placeholder: BLURRED)
              }
            }
            altText
          }
        }
        date
        uri
      }
    }
  }
`
