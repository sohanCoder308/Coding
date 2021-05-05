// Importing firebase dependecy and firestore dependency
import firebase from 'firebase';
require('@firebase/firestore');

/* For Firebase JS SDK v7.20.0 and later, measurementId is optional
// DB Details saved in variable 'firebaseConfig' */
var firebaseConfig = {
  apiKey: 'AIzaSyA3PdQMzfqpkIDHjOBRAawdCRCxZ2k8SeM',
  authDomain: 'expendit-c52b8.firebaseapp.com',
  databaseURL: 'https://expendit-c52b8-default-rtdb.firebaseio.com',
  projectId: 'expendit-c52b8',
  storageBucket: 'expendit-c52b8.appspot.com',
  messagingSenderId: '1009052195861',
  appId: '1:1009052195861:web:f84e0586345e3b9e57821c',
  measurementId: 'G-DKTV3P60BD',
};

// Initializing Firebase with DB Details
firebase.initializeApp(firebaseConfig);

// Exporting DB to be used in another files
export default firebase.firestore();
