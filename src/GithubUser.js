import React, { Component } from 'react'

class GithubUser extends Component {
  render() {
    return <h3>Great Jaerb, you searched for {this.props.match.params.username}</h3>
  }
}

export default GithubUser