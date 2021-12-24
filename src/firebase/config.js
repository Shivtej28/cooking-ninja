import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyCYNiIq3FioOZtojogsCx3T9Ifj-lairic",
  
    authDomain: "cooking-ninja-site-761b7.firebaseapp.com",
  
    projectId: "cooking-ninja-site-761b7",
  
    storageBucket: "cooking-ninja-site-761b7.appspot.com",
  
    messagingSenderId: "1095313601814",
  
    appId: "1:1095313601814:web:34d8d847378aaae6af4c37"
  
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init firestore
  const projectFirestore = firebase.firestore()

  export { projectFirestore }