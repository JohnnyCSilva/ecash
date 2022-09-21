
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCcq3j3s44xzpxqXuOr4XfDEYAAEliUx_4",
  authDomain: "ecash-1.firebaseapp.com",
  projectId: "ecash-1",
  storageBucket: "ecash-1.appspot.com",
  messagingSenderId: "863419245746",
  appId: "1:863419245746:web:53fa87e868460ec69355ab",
  measurementId: "G-4PC7LFGJ3E"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export { db };


