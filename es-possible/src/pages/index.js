import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

import parse from "html-react-parser"
import { GatsbyImage } from "gatsby-plugin-image"
import Testimonials from "../components/testimonials/Testimonials"
import HeaderHomePage from "../components/header/HeadeHomePage"
import Footer from "../components/footer"
import '../index.css'

// import BlogIndex from '../templates/blog-post-archive'

const index = ({ data }) => {
  const posts = data.posts.nodes
  // const exercises = data.exercises.nodes

  // console.log(homepagePosts)
  return (
    <>
    <HeaderHomePage/>
      {/*-------------------------------------------------------------- CTA--------------------------------------------------------------------------- */}
      <div className="flex flex-col items-center justify-center p-2 gap-2 md:my-20">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="flex justify-center text-6xl text-black font-bold mb-4">
            Hola
          </h2>
          <hr className="bg-[#DE9A08] h-1 w-12 mb-4" />
        </div>
        <div className="text-center flex flex-col justify-center p-2 gap-4 md:flex-row md:text-base">
          <p className="max-w-xs">
            Cieszymy się że tu jesteś! Chcesz się uczyć hiszpańskiego?
            Zapraszamy na lekcje online, podczas których będziesz dużo mówić,
            poznasz wiele ciekawostek kulturowych, wybierzesz się w egzotyczną
            podróż w środku zimy!
          </p>
          <p className="max-w-xs">
            Hiszpański przyjemnie i praktycznie to właśnie my! Bez stresu, w
            twoim tempie i w miłej atmosferze. Lekcje z nami to prawdziwa
            tropikalna przygoda, podczas której dosłownie odkryjesz Hiszpanię i
            Amerykę.
          </p>
          <p className="max-w-xs">
            Zaryzykuj zerwanie z codzienną monotonią i ucz się hiszpańskiego z
            nami! To naprawdę EsPossible!
          </p>
        </div>
      </div>
      {/*-------------------------------------------------------------- KURSY--------------------------------------------------------------------------- */}

      <div className="flex flex-col justify-center items-center">
        <h2 className="flex justify-center text-4xl font-bold mb-2 text-center">
          Kursy oferowane przez nasze nauczycielki
        </h2>
        <hr className="bg-[#DE9A08] h-1 w-12 mb-4" />
      </div>
      <div className="flex justify-center items-center flex-col gap-2 md:flex-row md:flex-wrap md:text-[#fff] ">
        <div className="flex flex-col gap-2 relative before:content-['*'] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:z-[1] before:bg-[#fff] before:bg-opacity-30">
          <Link
            to="/solo"
            className="flex  justify-center items-center max-w-xs overlay relative md:max-w-md "
          >
            <StaticImage className="" src="../images/optimized-1.jpg" alt="" />
            <span className="absolute uppercase text-[#fff] font-bold text-lg z-10">
              solo-lekcje indywidualne
            </span>
          </Link>
          <Link
            to="/duo"
            className="flex justify-center items-center max-w-xs overlay relative md:max-w-md"
          >
            <StaticImage src="../images/optimized-2.jpg" alt="" />
            <span className="absolute uppercase text-[#fff] font-bold text-lg z-10">
              duo-lekcje w parach
            </span>
          </Link>
        </div>
        <div className="flex flex-col gap-2 relative before:content-['*'] before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:z-[1] before:bg-[#fff] before:bg-opacity-30">
          <Link
            to="/amigos"
            className="flex justify-center items-center max-w-xs overlay relative md:max-w-md"
          >
            <StaticImage src="../images/optimized-3.jpg" alt="" />
            <span className="absolute uppercase text-[#fff] font-bold text-lg z-10">
              amigos-lekcje-grupowe
            </span>
          </Link>
          <Link
            to="/medellin"
            className="flex justify-center items-center max-w-xs overlay relative md:max-w-md"
          >
            <StaticImage src="../images/optimized-4.jpg" alt="" />
            <span className="absolute uppercase text-[#fff] font-bold text-lg z-10">
              MEDELLÍN lekcje stacjonarne
            </span>
          </Link>
        </div>
      </div>
      {/*-------------------------------------------------------------- BLOG--------------------------------------------------------------------------- */}
      <div className="bg-[#1B1D1D] mt-6 p-6">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="flex justify-center text-5xl text-[#fff] font-bold mb-4">
            Nowości
          </h2>
          <hr className="bg-[#DE9A08] h-1 w-12 mb-14" />
        </div>
        <div className="flex justify-center items-center">
          <div className="blog-grid">
            {/* <div className="flex justify-center items-center"> */}
            {posts.map(post => {
              const title = post.title
              const featuredImage =
                post.featuredImage.node.localFile.childImageSharp
                  .gatsbyImageData
              return (
                <div className=" max-w-sm grid-blog__item">
                  <div className="flex flex-col bg-[#fff] ">
                    <GatsbyImage
                      className="min-h-96"
                      image={featuredImage}
                      // alt={featuredImage.alt}
                      // style={{ marginBottom: 50 }}
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
      <Footer/>
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
    exercises: allWpPost(
      filter: {
        categories: { nodes: { elemMatch: { name: { eq: "Exercise" } } } }
      }
      sort: { date: DESC }
      limit: 6
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
