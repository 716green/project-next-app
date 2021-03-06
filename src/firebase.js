import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = { 
  apiKey: "AIzaSyCC8VUrpoEii3a32r5TA3KJEh481fSHGdA",
  authDomain: "project-next-app.firebaseapp.com",
  databaseURL: "https://project-next-app.firebaseio.com",
  projectId: "project-next-app",
  storageBucket: "project-next-app.appspot.com",
  // storageBucket: "gs://project-next-app.appspot.com",
  messagingSenderId: "272078008397",
  appId: "1:272078008397:web:0f380f73021cfd031eec04",
  measurementId: "G-6VHPREYJES"
};

export const app = firebase.initializeApp(firebaseConfig);



// export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();