  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  import {getDatabase} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js"; 
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBOlxra0dhIHTC7QV7VaA61PlnzrRBnxWY",
    authDomain: "authentication-9bd5e.firebaseapp.com",
    databaseURL: "https://authentication-9bd5e-default-rtdb.firebaseio.com",
    projectId: "authentication-9bd5e",
    storageBucket: "authentication-9bd5e.appspot.com",
    messagingSenderId: "1096341201743",
    appId: "1:1096341201743:web:9b666f04949bca2dd09b3a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database=getDatabase(app);
  const auth=getAuth(app);
  
  document.getElementById("login-btn").addEventListener('click', function(){
    const loginEmail= document.getElementById("login-email").value;
    const loginPassword =document.getElementById("login-password").value;
 
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
   .then((userCredential) => {
     const user = userCredential.user;
     document.getElementById("result-box").style.display="inline";
      document.getElementById("login-div").style.display="none";
      document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+" was Login Successfully";
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     document.getElementById("result-box").style.display="inline";
      document.getElementById("login-div").style.display="none";
      document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
 
   });
 });
 