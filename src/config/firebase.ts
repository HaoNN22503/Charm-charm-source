import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBv47Z3xIZw10oFF4JTFrAVVnap8BgnIWU",
  authDomain: "charmcharm-e0d9d.firebaseapp.com",
  databaseURL:
    "https://charmcharm-e0d9d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "charmcharm-e0d9d",
  storageBucket: "charmcharm-e0d9d.appspot.com",
  messagingSenderId: "946258202522",
  appId: "1:946258202522:web:30c0ab5a71504d52473423",
  measurementId: "G-CW2GPKW5JD",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
