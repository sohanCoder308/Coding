import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "",
    authDomain: "wily-app-86cec.firebaseapp.com",
    databaseURL: "https://wily-app-86cec.firebaseio.com",
    projectId: "wily-app-86cec",
    storageBucket: "wily-app-86cec.appspot.com",
    messagingSenderId: "436866087439",
    appId: "1:436866087439:web:1a3bcf134182eb6559017a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
