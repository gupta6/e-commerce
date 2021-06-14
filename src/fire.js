import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyDc8VS2_F5dFvXT7CCsR4iU_Ej-QChSDXY",
    authDomain: "e-commerce-4454a.firebaseapp.com",
    projectId: "e-commerce-4454a",
    storageBucket: "e-commerce-4454a.appspot.com",
    messagingSenderId: "850104150569",
    appId: "1:850104150569:web:e676d6da9cf9926355ca38"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  
  export { db, auth };