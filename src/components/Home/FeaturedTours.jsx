import React from 'react'
import Tour from '../Tours/Tour'
import { useStaticQuery, graphql } from 'gatsby'
import Title from '../Title'
import styles from '../../css/items.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const FeaturedTours = () => {
  const response = useStaticQuery(getFeaturedTours)
  const tours = response.featuredTours.edges
  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      <div className={styles.center}>
        {tours.map(({ node }) => (
          <Tour key={node.contentful_id} tour={node} />
        ))}
      </div>
      <AniLink fade to="/tours" className="btn-primary">
        all tours
      </AniLink>
    </section>
  )
}

const getFeaturedTours = graphql`
  query {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          price
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default FeaturedTours
