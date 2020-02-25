import React, { Component } from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import Tours from '../components/Tours/Tours'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'

export class tours extends Component {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <SEO title="Tours" />
        <StyledHero img={data.defaultBcg.childImageSharp.fluid}></StyledHero>
        <Tours />
      </Layout>
    )
  }
}

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

export default tours
