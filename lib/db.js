import firebase from "firebase";

try {
  firebase.initializeApp({
    databaseURL: "https://devcriollo.firebaseio.com"
  });
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

const db = firebase.database();
export default db;
