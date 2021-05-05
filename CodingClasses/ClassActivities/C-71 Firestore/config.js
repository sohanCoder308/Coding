import * as firebase from 'firebase';
require('@firebase/firestore');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnW9yjPvHdO53Y7P8Hfy80K1DQrquEwVA",
  authDomain: "wily-app-9dba4.firebaseapp.com",
  projectId: "wily-app-9dba4",
  storageBucket: "wily-app-9dba4.appspot.com",
  messagingSenderId: "416693409411",
  appId: "1:416693409411:web:2aaee7a6612cef1b716db6",
  measurementId: "G-CKX3W4NZWF"
};
 firebase.initializeApp(firebaseConfig);
 export default firebase.firestore();