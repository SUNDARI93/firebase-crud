import firebase from "firebase/compat/app";
import { initializeApp } from 'firebase/app'
import "firebase/compat/database";

export const firebaseConfig = {
  apiKey: "AIzaSyCpI7JO9O28NQX-vFv4mrMWU6UvodC0_rQ",
  authDomain: "react-contact-3d47a.firebaseapp.com",
  projectId: "react-contact-3d47a",
  storageBucket: "react-contact-3d47a.appspot.com",
  messagingSenderId: "492650480544",
  appId: "1:492650480544:web:a8cc5d1f33dbd2e9b05ac5"
};

  const fireDb =firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();
  //export default firebaseConfig ;