import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import FeaturedTours from '../components/Home/FeaturedTours'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <StyledHero img={data.defaultBcg.childImageSharp.fluid} home="true">
      <Banner
        title="continue exploring"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sapiente."
      >
        <AniLink fade to="/tours" className="btn-white">
          explore tours
        </AniLink>
      </Banner>
    </StyledHero>
    <About />
    <Services />
    <FeaturedTours />
  </Layout>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
