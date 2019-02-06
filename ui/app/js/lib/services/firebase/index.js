import firebase from 'firebase'

import config from './config'

firebase.initializeApp(config)

const uiConfig = {
  signInFlow: 'popup',
  // signInSuccessUrl: '/',
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
  signInOptions: [
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
}

export default firebase

export {
  uiConfig,
}
