 import firebase from 'firebase'
//  import firebase from 'firebase/app';
import 'firebase/firestore';
  
 const firebaseConfig = firebase.initializeApp( {
    apiKey: "AIzaSyCbNMFXUQOF49ba5d_cvoS7JloaffApAR8",
    authDomain: "fb-clone-f3527.firebaseapp.com",
    projectId: "fb-clone-f3527",
    storageBucket: "fb-clone-f3527.appspot.com",
    messagingSenderId: "369528460776",
    appId: "1:369528460776:web:9ed53b6cc3c0897398405d"
  });

 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();

 const db= firebaseConfig.firestore();
 const storage = firebase.storage()

export { auth, provider, db, storage}
