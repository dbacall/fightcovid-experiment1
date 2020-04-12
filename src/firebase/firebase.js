import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAZrpryktl_iJcLjlhf9akqy5Pv-0HGrA",
  authDomain: "fightcovid-testing.firebaseapp.com",
  databaseURL: "https://fightcovid-testing.firebaseio.com",
  projectId: "fightcovid-testing",
  storageBucket: "fightcovid-testing.appspot.com",
  messagingSenderId: "705711502975",
  appId: "1:705711502975:web:197d74876baf0f5008314a",
  measurementId: "G-108WWGJM1Z",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
