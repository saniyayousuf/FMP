
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
  import { getDatabase , set , ref , push  } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
  import { getAuth , signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDzLmY3f2XbK3mDC-owLZBtHIVuOsGNKmA",
    authDomain: "final-module-project-mc.firebaseapp.com",
    projectId: "final-module-project-mc",
    storageBucket: "final-module-project-mc.appspot.com",
    messagingSenderId: "231993902416",
    appId: "1:231993902416:web:82e7681f53f55725091855"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const Db = getDatabase(app);
  const auth = getAuth(app);

  export {auth, Db , signInWithEmailAndPassword ,createUserWithEmailAndPassword , set , push , ref  }