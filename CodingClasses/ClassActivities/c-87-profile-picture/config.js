import firebase from 'firebase';
require('@firebase/firestore');

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBHabhKziDSqBBZePLxXFVbASKq7MJ9gSQ',
  authDomain: 'book-santa-6bba2.firebaseapp.com',
  databaseURL: 'https://book-santa-6bba2-default-rtdb.firebaseio.com',
  projectId: 'book-santa-6bba2',
  storageBucket: 'book-santa-6bba2.appspot.com',
  messagingSenderId: '205041134480',
  appId: '1:205041134480:web:5a9ecc0206d2abaa76a115',
  measurementId: 'G-57TK8638FF',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
