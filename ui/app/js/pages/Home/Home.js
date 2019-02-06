import React, { Component } from 'react'

import { HelloWorld } from '../../components/common'
import { Ping, SignInScreen } from '../../components/feature'
import firebase from '../../lib/services/firebase'

class Home extends Component {
  state = {
    isSignedIn: false,
  }

  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    )
  }
  
  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  render() {
    return (
      <div className="home-wrapper">
        {
          this.state.isSignedIn ? (
            <h1>Hi, {firebase.auth().currentUser.displayName}</h1>
          ) : (
            <SignInScreen />
          )
        }
        {/* <SignInScreen />
        <HelloWorld />
        <Ping /> */}
      </div>
    )
  }
}

export default Home
