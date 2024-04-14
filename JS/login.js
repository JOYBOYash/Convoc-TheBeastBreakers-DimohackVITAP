// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
//   import { getDatabase, set, ref, child } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
//   import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

//   const firebaseConfig = {
//     apiKey: "AIzaSyBb1oYBie-MnuyAM_18lRiHvcaWe-UXVvI",
//     authDomain: "elbater-d181f.firebaseapp.com",
//     projectId: "elbater-d181f",
//     storageBucket: "elbater-d181f.appspot.com",
//     messagingSenderId: "24069327538",
//     appId: "1:24069327538:web:9e6b50ffe8a8d701b6d7ab",
//     measurementId: "G-MZBS7MGS75"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const auth = getAuth(app);
//   const db = getDatabase();
//   const dbref = ref(db);

// let mailInp1 = document.getElementById('mailInp1');
// let passInp1 = document.getElementById('passInp1');
// let Mf1 = document.getElementById('Mainform1');
// function redirect()
// {
//   alert("LoggedInSuccessfully")
//   window.location.href="/HTML/users.html";
// }
// let LoginUser = evt => {
  
//   evt.preventDefault();

//   signInWithEmailAndPassword(auth, mailInp1.value, passInp1.value)

//   .then((credentials)=>{
//       get(child(dbref, 'UserAuthList' + credentials.user.uid)).then((snapshot)=>{
//         if(snapshot.exists){
//             sessionStorage.setItem("user-Info", JSON.stringify({
//                 Email: snapshot.val().Email,
//                 Passkey: snapshot.val().Passkey
//             }))
//             sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));
//             redirect();
//         }
//       })
//   })
//   .catch((error)=> {
//     alert(error)
//     console.log(error.message)
//   })
// }

//  Mf1.addEventListener('submit', LoginUser);


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgd5TasgU1o1GFud1Nv98wiDTzNMzepnw",
  authDomain: "lingua-link-2907a.firebaseapp.com",
  databaseURL: "https://lingua-link-2907a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lingua-link-2907a",
  storageBucket: "lingua-link-2907a.appspot.com",
  messagingSenderId: "451405127324",
  appId: "1:451405127324:web:71d41d5791af4c6a68d759"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase();
const auth = getAuth(app);
const dbref = ref(db);


let email = document.getElementById('mailid');
let passkey = document.getElementById('passkey');
let register =  document.getElementById('login');

let SignInUser = evt => {
    evt.preventDefault();

    signInWithEmailAndPassword(auth, email.value, passkey.value)

    .then((credentials)=>{
        alert("LoggedInSuccessfully")
        window.location.href="/HTML/users.html";
    })
    .catch((error)=>{
   console.log(error.code);
   console.log(error.message);

   alert(error.message)
 })
}

register.addEventListener('submit', SignInUser);
