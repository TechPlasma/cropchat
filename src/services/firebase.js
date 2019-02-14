import firebase from 'firebase'

var config = {
	apiKey: "AIzaSyAqgHsKQV6dfKMXXEEadWfZ4rudD9Akwig",
    authDomain: "cropchat-35c34.firebaseapp.com",
    databaseURL: "https://cropchat-35c34.firebaseio.com",
    projectId: "cropchat-35c34",
    storageBucket: "cropchat-35c34.appspot.com",
    messagingSenderId: "781347002115"
}

firebase.initializeApp(config);
const storage = firebase.storage()
const database = firebase.database()

export default {
	database,
	storage
}