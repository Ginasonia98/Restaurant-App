import {getApp,getApps,initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDaYhq5qNmbxaLutvxIj5-N2iLWJo2pvSE",
  authDomain: "restaurantblessingapp.firebaseapp.com",
  databaseURL: "https://restaurantblessingapp-default-rtdb.firebaseio.com",
  projectId: "restaurantblessingapp",
  storageBucket: "restaurantblessingapp.appspot.com",
  messagingSenderId: "959335785795",
  appId: "1:959335785795:web:eb71f6e401d56d01babbf6"
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export {app,firestore,storage};
