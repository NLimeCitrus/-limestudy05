import { firebase } from "firebase/app";

const firebaseConfig = {
  apiKey:process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  databaseURL: process.env.REACT_APP_DATABSEEURL,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINESENDERID,
  appId: process.env.REACT_APP_APPID
}

export default firebase.initializeApp(firebaseConfig);