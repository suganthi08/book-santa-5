import firebase from 'firebase';
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZW0mNfXeMX-o7smppufKgOcPZKRiTdso",
  authDomain: "santa-18a0b.firebaseapp.com",
  projectId: "santa-18a0b",
  storageBucket: "santa-18a0b.appspot.com",
  messagingSenderId: "139631834988",
  appId: "1:139631834988:web:84ca48e0abb6f7bcaa2549",
  measurementId: "G-8FXS9Z6L00"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
