import { Link} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/layout"
// import { Card } from "flowbite-react"
// import parse from "html-react-parser"
// import BlogIndex from '../templates/blog-post-archive'





const index = () => {
  // data})=>{
  //   const homepagePosts = data.allWpPost.nodes
    return (
  
      <Layout>
        <div className="flex flex-col items-center justify-center p-2 gap-2 ">
          <h2 className="text-3xl font-bold">Hola!</h2>
          <div className="text-center flex flex-col justify-center p-2 gap-4 md:flex-row md:text-base">
          <p className="max-w-xs">
            Cieszymy się że tu jesteś! Chcesz się uczyć hiszpańskiego? Zapraszamy na lekcje online, podczas których będziesz dużo mówić, poznasz wiele ciekawostek kulturowych, wybierzesz się w egzotyczną podróż w środku zimy!
          </p>
          <p className="max-w-xs">
            Hiszpański przyjemnie i praktycznie to właśnie my! Bez stresu, w twoim tempie i w miłej atmosferze. Lekcje z nami to prawdziwa tropikalna przygoda, podczas której dosłownie odkryjesz Hiszpanię i Amerykę.
          </p>
          <p className="max-w-xs">
            Zaryzykuj zerwanie z codzienną monotonią i ucz się hiszpańskiego z nami! To naprawdę EsPossible!
          </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
        <h2 className="flex justify-center text-5xl font-bold mb-2">Kursy</h2>
        <hr className="bg-red-700 h-1 w-12 mb-4"/>
        </div>
        <div className="flex justify-center items-center flex-col gap-2 md:flex-row md:flex-wrap ">
          <div className="flex flex-col gap-2">
        <Link to="/solo"  className="flex  justify-center items-center max-w-xs overlay relative ">
          <StaticImage className="" src="../images/optimized-1.jpg" alt=''/>
          <span className="absolute uppercase text-white font-bold text-lg z-10">solo-lekcje indywidualne</span>
        </Link>
        <div className="flex justify-center items-center max-w-xs overlay relative ">
          <StaticImage src="../images/optimized-2.jpg" alt=''/>
          <span className="absolute uppercase text-white font-bold text-lg z-10">duo-lekcje w parach</span>
        </div>
        </div>
        <div className="flex flex-col gap-2">
        <div className="flex justify-center items-center max-w-xs overlay relative ">
          <StaticImage src="../images/optimized-3.jpg" alt=''/>
          <span className="absolute uppercase text-white font-bold text-lg z-10">amigos-lekcje-grupowe</span>
        </div>
        <div className="flex justify-center items-center max-w-xs overlay relative ">
          <StaticImage src="../images/optimized-4.jpg" alt=''/>
          <span className="absolute uppercase text-white font-bold text-lg z-10">MEDELLÍN lekcje stacjonarne</span>
        </div>
        </div>
        </div>
        <div className="flex flex-col justify-center items-center">
        <h2 className="flex justify-center text-5xl font-bold mb-2">Blog</h2>
        <hr className="bg-red-700 h-1 w-12 mb-4"/>
        </div>
        {/* <div className="">
          {homepagePosts.map(post => {
               const title = post.title
            return(
              <div className="max-w-sm">
  <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
  <Link to={post.uri} itemProp="url">
    <h5 itemProp="headline" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {parse(title)}
    </h5>
    <p itemProp="description" className="font-normal text-gray-700 dark:text-gray-400">
    {parse(post.excerpt)}
    </p>
    </Link>
  </Card>
</div>
            )
          })}
        </div> */}
  
      </Layout>
    )
  }
 


export default index

// export const homePageQuery = graphql`
// query WordPressHomepagePost {
//   allWpPost(sort: {date: DESC}) {
//     nodes {
//       excerpt
//       uri
//       date(formatString: "MMMM DD, YYYY")
//       title
//       excerpt
//     }
//   }
// }
// `
