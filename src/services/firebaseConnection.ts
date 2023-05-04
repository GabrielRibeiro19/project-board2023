import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDuoyrZgBJB2u3Xa1I8HQyoY6IRzQYA9hA",
  authDomain: "projeto-board-2023.firebaseapp.com",
  projectId: "projeto-board-2023",
  storageBucket: "projeto-board-2023.appspot.com",
  messagingSenderId: "206033506043",
  appId: "1:206033506043:web:f4c27a277a943bc651ea5e",
  measurementId: "G-X0S2HPFKSZ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

// const analytics = getAnalytics(firebaseApp);

export {db};
