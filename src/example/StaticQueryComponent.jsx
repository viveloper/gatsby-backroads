// import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'

// const getSiteData = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//         description
//         author
//         data {
//           name
//           age
//         }
//       }
//     }
//   }
// `

// const StaticQueryComponent = () => {
//   const {
//     site: { siteMetadata },
//   } = useStaticQuery(getSiteData)
//   console.log('render StaticQueryComponent')
//   return (
//     <div>
//       <h4>title: {siteMetadata.title}</h4>
//       <h4>author: {siteMetadata.author}</h4>
//     </div>
//   )
// }

// export default StaticQueryComponent
