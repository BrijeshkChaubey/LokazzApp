
import {initializeApp} from 'firebase/app';
import {initializeFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCbTsN4byLSUSTmOthK-GHyzT5Slscr0kw",
    authDomain: "lookazapp.firebaseapp.com",
    projectId: "lookazapp",
    storageBucket: "lookazapp.appspot.com",
    messagingSenderId: "1015853869067",
    appId: "1:1015853869067:android:e5c0e435395dcf0fe7ff0e",
    measurementId: "G-67L9564482"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});

export {db, auth};
