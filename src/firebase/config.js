// import core firebase
import firebase from 'firebase/app'

// import firestore
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDz1C5VoOKmP9zhRuLbX2uZSfXbJI5p4PA",
  authDomain: "ramz-vue-sites.firebaseapp.com",
  projectId: "ramz-vue-sites",
  storageBucket: "ramz-vue-sites.appspot.com",
  messagingSenderId: "541492304648",
  appId: "1:541492304648:web:404d54dc72cbbb83b8aabd"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

// create timestamp firebase function
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }
