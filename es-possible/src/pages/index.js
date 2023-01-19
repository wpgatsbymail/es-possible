import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import parse from "html-react-parser"
import Testimonials from "../components/testimonials/Testimonials"
import HeaderHomePage from "../components/header/HeadeHomePage"
import Footer from "../components/Footer"
import CTA from "../components/index/CTA"
import Kursy from "../components/index/Kursy"
import "../index.css"

const index = ({ data }) => {
  const posts = data.posts.nodes

  return (
    <>
      <HeaderHomePage />
      <CTA />
      <Kursy />
      <div className="bg-[#1B1D1D] mt-6 p-6">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="flex justify-center text-5xl text-[#fff] font-bold mb-4">
            Nowości
          </h2>
          <hr className="bg-[#DE9A08] h-1 w-12 mb-14" />
        </div>
        <div className="flex justify-center items-center">
          <div className="blog-grid">
            {posts.map(post => {
              const title = post.title

              return (
                <div className=" max-w-sm grid-blog__item">
                  <div className="flex flex-col bg-[#fff] ">
                    <StaticImage
                      className="min-h-96"
                      src="../images/Optimized-1.jpg"
                      alt=""
                    />

                    <Link className="p-4" to={post.uri} itemProp="url">
                      <h5
                        itemProp="headline"
                        className="text-2xl font-bold tracking-tight text-gray-900"
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
      <Testimonials />
      <Footer />
    </>
  )
}

export default index

export const homePageQuery = graphql`
  query WordPressHomepagePost {
    posts: allWpPost(sort: { date: DESC }, limit: 6) {
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
