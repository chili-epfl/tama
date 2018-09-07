import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDmtfbhzrZmrLkjueX-0doDGiGm6jXsJFo",
  authDomain: "chili-tama.firebaseapp.com",
  databaseURL: "https://chili-tama.firebaseio.com",
  projectId: "chili-tama",
  storageBucket: "chili-tama.appspot.com",
  messagingSenderId: "1028659775824"
};
const fire = firebase.initializeApp(config);
export default fire;
