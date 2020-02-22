import React, { Component } from 'react'
import Layout from '../components/Layout'

export class tours extends Component {
  render() {
    console.log(this.props.data)
    return <Layout>hello from tours page!!!!</Layout>
  }
}

export default tours
