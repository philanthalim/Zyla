import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHVl_BB-mwWAfggMmAnte5zc_a0yHgyHI",
  authDomain: "zyla-2ca3b.firebaseapp.com",
  databaseURL: "https://zyla-2ca3b-default-rtdb.firebaseio.com",
  projectId: "zyla-2ca3b",
  storageBucket: "zyla-2ca3b.appspot.com",
  messagingSenderId: "93100168704",
  appId: "1:93100168704:web:1b069feb624bc227b4eae5",
  measurementId: "G-0TPHFER7KR",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
