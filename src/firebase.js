import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCGujotGHYbR7FZKNHHixY8iJ3hqN-dE8c',
  authDomain: 'todo-app-cp-2a7b8.firebaseapp.com',
  projectId: 'todo-app-cp-2a7b8',
  storageBucket: 'todo-app-cp-2a7b8.appspot.com',
  messagingSenderId: '372624583717',
  appId: '1:372624583717:web:bc5f9a2ace58d7163163cc',
  measurementId: 'G-44T8JKWFGN'
})

const db = firebaseApp.firestore()
export default db
