import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDv0Az663hT3QRvjNpwE9GWSSEiiOdGkYE",
    authDomain: "one-click-db-e5856.firebaseapp.com",
    projectId: "one-click-db-e5856",
    storageBucket: "one-click-db-e5856.appspot.com",
    messagingSenderId: "88531002665",
    appId: "1:88531002665:web:084f9ee8c44e28bb8e4338",
    measurementId: "G-58TVWHKN2E"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;