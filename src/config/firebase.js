import * as firebase from 'firebase';

const FIREBASE_API_KEY = "AIzaSyCLCrQi4Ak2w4OCCegZNJr74YaRR3LgbrU",
  FIREBASE_AUTH_DOMAIN = "umdbrackets2018.firebaseapp.com",
  FIREBASE_DATABASE_URL = "https://umdbrackets2018.firebaseio.com",
  FIREBASE_PROJECT_ID = "umdbrackets2018",
  FIREBASE_STORAGE_BUCKET = "umdbrackets2018.appspot.com",
  FIREBASE_MESSAGING_SENDER_ID = "881149778810";

const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID
};

const DATABASE = firebase
  .initializeApp(config)
  .database();

export default DATABASE;
