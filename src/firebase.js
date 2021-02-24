import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvfHI_rVOHpw-LjB2MtnZxW5k2x9SlbOE",
    authDomain: "slack-mern-1eab9.firebaseapp.com",
    projectId: "slack-mern-1eab9",
    storageBucket: "slack-mern-1eab9.appspot.com",
    messagingSenderId: "140187792624",
    appId: "1:140187792624:web:f4178ad011b0039ef2be35",
    measurementId: "G-6YWCNDMQZ2"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
// firebase installed setup & for db and authentication

