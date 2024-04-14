// Your Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBgd5TasgU1o1GFud1Nv98wiDTzNMzepnw",
    authDomain: "lingua-link-2907a.firebaseapp.com",
      databaseURL: "https://lingua-link-2907a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "lingua-link-2907a",
    storageBucket: "lingua-link-2907a.appspot.com",
    messagingSenderId: "451405127324",
    appId: "1:451405127324:web:71d41d5791af4c6a68d759"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, set, ref, child, push } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";


// Firebase Database reference
var database = firebase.database();
const db = getDatabase(app);
const app = initializeApp(firebaseConfig);

// Function to create a new forum
function createForum() {
    var forumName = document.getElementById("forumName").value;
    var newForumKey = database.ref().child('forums').push().key;
    database.ref('forums/' + newForumKey).set({
        name: forumName
    });
    // Redirect to the forum page
    window.location.href = "forum.html?forumId="+ newForumKey;
}