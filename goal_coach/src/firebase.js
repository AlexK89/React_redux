import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCUu5K-o67uLkKOglfSMBCo31wHjs5CRMI",
    authDomain: "goalcoach-react-9769a.firebaseapp.com",
    databaseURL: "https://goalcoach-react-9769a.firebaseio.com",
    projectId: "goalcoach-react-9769a",
    storageBucket: "goalcoach-react-9769a.appspot.com",
    messagingSenderId: "324365923430"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');