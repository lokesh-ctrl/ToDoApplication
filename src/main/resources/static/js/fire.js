import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAJkvWBqZgTPm7Db89JXUXmbLpQSNWm2Zg",
    authDomain: "todoapp-6c35d.firebaseapp.com",
    databaseURL: "https://todoapp-6c35d.firebaseio.com",
    projectId: "todoapp-6c35d",
    storageBucket: "todoapp-6c35d.appspot.com",
    messagingSenderId: "221338038137"
};
try {
    firebase.initializeApp(config)
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}
const fire = firebase
export default fire;