import React from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from '../firebaseConfig';


export default function useFirebaseAuth() {
   // VARIABLES
   const app = initializeApp(firebaseConfig);
   const auth = getAuth(app);

   // FUNCTIONS

   function SignupUser(email, password) {
      return new Promise((res, rej) => {
         createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
               // Signed up 
               const user = userCredential.user;
               // ...
               console.log(user)
               res(user)
            })
            .catch((error) => {
               const errorCode = error.code;
               const errorMessage = error.message;
               // ..
               console.log(errorCode)
               console.log(errorMessage)
               rej(errorCode, errorMessage)
            });
      })
   }

   function SigninUser(email, password) {
      return new Promise((res, rej) => {
         signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
               // Signed in 
               const user = userCredential.user;
               // ...
               console.log(user)
               res(user)
            })
            .catch((error) => {
               const errorCode = error.code;
               const errorMessage = error.message;
               // ...
               console.log(errorCode)
               console.log(errorMessage)
               rej("Invalid or Wrong Credentials.")
            });
      })
   }


   // RETURN
   return { SignupUser, SigninUser }
}