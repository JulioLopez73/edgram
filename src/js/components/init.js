import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBbFa8QD50hzDjA-MJcZzAppC-W_4N8SRA",
  authDomain: "edgram-ee7ed.firebaseapp.com",
  databaseURL: "https://edgram-ee7ed.firebaseio.com",
  projectId: "edgram-ee7ed",
  storageBucket: "edgram-ee7ed.appspot.com",
  messagingSenderId: "463103341379",
  appId: "1:463103341379:web:0397bee7cc3b38282175f6"
}

export const init = () => firebase.initializeApp(config)


