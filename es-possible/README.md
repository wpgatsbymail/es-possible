 # Es-possible-clone

![Es-possible-clone screenshot](https://raw.githubusercontent.com/wpgatsbymail/es-possible/master/es-possible/Es-possible-clone-screenshot.png)

Es-possible-clone is as title sugest clone of website i made in Wordpress for client. Webpage is made in Gatsbyjs to show my skills as programmer. There are no post or exercises because headless wordpress require live host for wordpress-gatsby-source plugin to work and i decided to make this project totally free of any charge. Data and post are fetch from official gatsby starter "gatsby-starter-wordpress-blog". Some code is also not mine and made by coders developing Gatsby starter. Blog uses free tier solutions for posting comments and send text in Contact form.

## Features
- Blog
- Comments 
- Contact form
- Easy and well know CMS Wordpress editor -gutenberg

**Desktop and mobile view**
- support for < 640px and 1024px

## 🚀 Development

**Stack**
- Gatsby.js
- React.js
- Node
- Graphql
- Tailwind
- Headless Cms: Wordpress Headless Cms
- GraphComments
- Formspree
  
### Dependencies: 
    "@formspree/react": "^2.4.1", 
    "@heroicons/react": "^2.0.13",
    "@react-icons/all-files": "^4.1.0",
    "gatsby": "^5.2.0",
    "gatsby-plugin-image": "^3.2.0",
    "gatsby-plugin-manifest": "^5.2.0",
    "gatsby-plugin-offline": "^6.2.0",
    "gatsby-plugin-react-helmet": "^6.2.0",
    "gatsby-plugin-sharp": "^5.2.0",
    "gatsby-source-filesystem": "^5.2.0",
    "gatsby-source-wordpress": "^7.2.0",
    "gatsby-transformer-sharp": "^5.2.0",
    "html-react-parser": "^3.0.4",
    "lodash": "^4.17.21",
    "npm-check-updates": "^16.4.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-helmet": "^6.1.0",
    "react-icons": "^4.7.1",
    "react-slick": "^0.29.0",
    "slick-carousel": "^1.8.1",
    "typeface-merriweather": "1.1.13",
    "typeface-montserrat": "1.1.13"

## Instalation
Cloned repository don't require local server. All data is fetched from a test server maintained by plugin provider. If you want to test how it works you must use local server created with some server emulator like WAMP or localy. Second, **not free** option is to rent hosting server for your WordPress site from which you going to take data. It is only option for Editor to manage content and also only option if you want to host your project on Netlify. Both methods need plugins mentioned in [gatsby-source-wordpress documentation](https://www.gatsbyjs.com/plugins/gatsby-source-wordpress/)
I checked few free hosting options and all of them returned errors in fetching data from WordPress and some don't even have all options like featured image, excerpt, categories etc. 
**Host checked**
- 000Webhost    
- InfinityFree  
- AccuWeb Hosting   
- x10hosting    
- ByetHost  
  
### Contact form and comments system
Contact form and comments system are maintained by 3rd party providers and requires accounts in formspree and graphcomment. To make them work: create account and switch environments in places mentioned in their docs. Easy and clear. 
  
### Online webpage with custom posts
As mentioned above, you need some hosting server which keeps WordPress site online. It doesn't matter if it is free or not. If server pass all tests from gatsby-source-wordpress and creates graphql schema without errors, then you can host your "dashboard". Wordpress site is only used to provide data (HTML) to gatsby build and being transformed into static website. I know it is a bit nonsense to offer client resolution in which he needs to keep WordPress server online just to update content, but it is still less work and lower cost than writing whole CMS and authentication. Netlify can host client static website for free, so the only real costs for client is keeping WordPress site alive. 

### Links
[Wordpress page](https://espossible-online.com/) 
[Es-possible-clone on Netlify](https://es-possible-gatsby-clone.netlify.app/) 
[Link to Gatsby starter](https://github.com/wpgatsbymail/es-possible/blob/master/es-possible/Es-possible-clone-screenshot.png) 
