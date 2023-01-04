// import React from "react"
// import { Card } from "flowbite-react"
// import { Link, graphql } from "gatsby"
// import parse from "html-react-parser"
// import { GatsbyImage } from "gatsby-plugin-image"

// const LatestArticles = ({ data: {latests} }) => {
//   const latests = data.latests.nodes
//   console.log(latests)

//   {latests.map(late => {
//     const title = late.title
//     const featuredImage = late.featuredImage.node.localFile.childImageSharp.gatsbyImageData
//     return (
//       <div className=" max-w-sm grid-blog__item">
//         <Card>
//           <GatsbyImage
//             className="min-h-96"
//             image={featuredImage}

//           />
//           <Link to={late.uri} itemProp="url">
//             <h5
//               itemProp="headline"
//               className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
//             >
//               {parse(title)}
//             </h5>
//             <p
//               itemProp="description"
//               className="font-normal text-gray-700 dark:text-gray-400 excerpt"
//             >
//               {parse(late.excerpt)}
//             </p>
//           </Link>
//         </Card>
//       </div>
//     )
//   })}

// }

// export default LatestArticles

// export const latestArticlesQuery = graphql`
//   query LatestArticles {
//     latests: allWpPost(sort: { date: DESC }, limit: 6) {
//       nodes {
//         excerpt
//         uri
//         date(formatString: "MMMM DD, YYYY")
//         title
//         excerpt
//         featuredImage {
//           node {
//             localFile {
//               childImageSharp {
//                 gatsbyImageData(
//                   placeholder: BLURRED
//                   layout: CONSTRAINED
//                   quality: 100
//                   aspectRatio: 1.5
//                 )
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function LatestArticles() {
  const data = useStaticQuery(graphql`
    query {
      latests: allWpPost(sort: { date: DESC }, limit: 6) {
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
  `)
  // const lists = data.latests.nodes

  // lists.map((list) => {
  //    const test = list.title
  //   console.log(test)
  //   return(
  //       <div className="">
  //       <h2>{test}</h2>
  //       <p>{list.excerp}</p>
  //     </div>
  //   )

  // })

  return (
    <div className="">
      <h1>{data.latests.nodes.title}</h1>
    </div>
  )
  

}


