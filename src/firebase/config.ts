import firebase from 'firebase/app';
import  'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB5HyacKxVxS7U1NeYhnjwicBOc21cwa6Y",
    authDomain: "crud-421f4.firebaseapp.com",
    projectId: "crud-421f4",
    storageBucket: "crud-421f4.appspot.com",
    messagingSenderId: "733123234081",
    appId: "1:733123234081:web:126cb4cf45a03cba0d1660",
    measurementId: "G-RG8J626BQR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();