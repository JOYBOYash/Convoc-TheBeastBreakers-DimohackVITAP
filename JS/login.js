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
  const dbref = ref(db);

let nameInp1 = document.getElementById('nameInp1');
let passInp1 = document.getElementById('passInp1');
let Mf1 = document.getElementById('Mainform');
function redirect()
{
  window.location.href = '\HTML\fhome.html';
}
let LoginUser = evt => {
  
  evt.preventDefault();

  signInWithEmailAndPassword(auth, nameInp1.value, passInp1.value)
  .then((credentials)=>{
      get(child(dbref, 'UserAuthList' + credentials.user.uid)).then((snapshot)=>{
        if(snapshot.exists){
            sessionStorage.setItem("user-Info", JSON.stringify({
                UserName: snapshot.val().UserName,
                Passkey: snapshot.val().Passkey
            }))
            sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));
            redirect();
        }
      })
  })
  .catch((error)=> {
    // alert(error)
    console.log(error.message)
  })
}
Mf1.addEventListener('submit', LoginUser);
