import React, { useState } from "react";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAuth,signInWithEmailAndPassword,  createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";;
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const success=false;
const LoginForm = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBOlxra0dhIHTC7QV7VaA61PlnzrRBnxWY",
    authDomain: "authentication-9bd5e.firebaseapp.com",
    databaseURL: "https://authentication-9bd5e-default-rtdb.firebaseio.com",
    projectId: "authentication-9bd5e",
    storageBucket: "authentication-9bd5e.appspot.com",
    messagingSenderId: "1096341201743",
    appId: "1:1096341201743:web:9b666f04949bca2dd09b3a"
    // Your Firebase configuration object
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    setUsername("");
    setPassword("");
    
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        success=true;
        alert('Login successful');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Error during login');
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginForm;
