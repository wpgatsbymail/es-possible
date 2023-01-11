import React from "react"

import parse from "html-react-parser"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"


const blog = ({ data }) => {
  const exercisePosts = data.exercisePosts.nodes
  return (

<Layout>
    <div className=" flex flex-col justify-center items-center mb-8 gap-4">
  
      <div className="mt-6 p-6">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="flex justify-center text-4xl md:text-5xl  font-bold mb-4">
        Materiały edukacyjne
          </h2>
          <hr className="bg-[#DE9A08] h-1 w-12 mb-14" />
        </div>
        <div className="flex justify-center items-center">
          <div className="blog-grid">
            {/* <div className="flex justify-center items-center"> */}
            {exercisePosts.map(post => {
              const title = post.title
              const featuredImage =
                post.featuredImage.node.localFile.childImageSharp
                  .gatsbyImageData
              return (
                <div className=" max-w-sm grid-blog__item">
                  {/* <div className="flex flex-col bg-white  border-solid border border-slate-500"> */}
                  <div className="flex flex-col bg-white shadow-xl"> 
                    <GatsbyImage
                      className="min-h-96"
                      image={featuredImage}
                      // alt={featuredImage.alt}
                      // style={{ marginBottom: 50 }}
                    />
                    <Link to={post.uri} itemProp="url" className="p-4">
                      <h5
                        itemProp="headline"
                        className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                      >
                        {parse(title)}
                      </h5>
                      <p
                        itemProp="description"
                        className="font-normal text-gray-700 dark:text-gray-400 excerpt"
                      > 
                        {parse(post.excerpt)}
                      </p>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>

    </Layout>
  )
}

export default blog

export const blogPageQuery = graphql`
query WordPressBlogExercisePost {
    exercisePosts: allWpPost(
      sort: {date: DESC}
  
      filter: {categories: {nodes: {elemMatch: {name: {eq: "Exercise"}}}}}
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  layout: CONSTRAINED
                  quality: 100
                  aspectRatio: 1.5
                )
              }
            }
          }
        }
      }
    }
  }
`
 