import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, set, ref, child } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBb1oYBie-MnuyAM_18lRiHvcaWe-UXVvI",
  authDomain: "elbater-d181f.firebaseapp.com",
  projectId: "elbater-d181f",
  storageBucket: "elbater-d181f.appspot.com",
  messagingSenderId: "24069327538",
  appId: "1:24069327538:web:9e6b50ffe8a8d701b6d7ab",
  measurementId: "G-MZBS7MGS75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
// const dbref = ref(db);



let nameInp = document.getElementById('nameInp');
let passInp = document.getElementById('passInp');
let Mf = document.getElementById('Mainform');
let mailInp = document.getElementById('mailInp')
let RegisterUser = evt => {
  evt.preventDefault();
  createUserWithEmailAndPassword(auth, nameInp.value, mailInp, passInp.value)
  .then((credentials)=>{
     set(ref(db, 'UserAuthList/' + credentials.user.uid), {
        UserName: nameInp.value(),
        Passkey: passInp.value(),
        Email: mailInp.value()

     })
     alert("SignedIn Successfully!")
  })
  .catch((error)=> {
    console.log(error.message)
  })
}

Mf.addEventListener('submit', RegisterUser)