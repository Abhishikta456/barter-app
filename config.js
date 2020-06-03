import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBz9niJ0EZPdrGvWssi4uBel233oZmdvd0",
  authDomain: "booksanta-85918.firebaseapp.com",
  databaseURL: "https://booksanta-85918.firebaseio.com",
  projectId: "booksanta-85918",
  storageBucket: "booksanta-85918.appspot.com",
  messagingSenderId: "967949099251",
  appId: "1:967949099251:web:02b868b6d76922dd8a5786"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
