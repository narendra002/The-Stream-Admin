import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyBQw7EmuqrDanGOUtmTYja2xmfcRf60KgE",
    authDomain: "thestream-1a744.firebaseapp.com",
    projectId: "thestream-1a744",
    storageBucket: "thestream-1a744.appspot.com",
    messagingSenderId: "522099565741",
    appId: "1:522099565741:web:c12fc70c8a66c9ef551224",
    measurementId: "G-F123QVVXGY",
  };
  
 const app = initializeApp(firebaseConfig);

    export const storage = getStorage();

     // Create a storage reference from our storage service
     
   

// Initialize Cloud Storage and get a reference to the service

export default app;