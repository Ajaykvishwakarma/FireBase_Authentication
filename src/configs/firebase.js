// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    getRedirectResult,
    signInWithRedirect,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
  }  from "firebase/auth";

//   const firebaseConfig = {
//     apiKey: "AIzaSyB7AxFQrmT388n1BIe-m7BZwUVKh6v7H0E",
//     authDomain: "authentication-5b832.firebaseapp.com",
//     projectId: "authentication-5b832",
//     storageBucket: "authentication-5b832.appspot.com",
//     messagingSenderId: "885393247623",
//     appId: "1:885393247623:web:f28cd0edbd119c48941722",
//     measurementId: "G-NJL5TBV1HE"
//   };

const firebaseConfig = {
    apiKey: "AIzaSyCffhdI6mHQrIqMOl450R7sI-yJWZlbzaY",
    authDomain: "authentications-77696.firebaseapp.com",
    projectId: "authentications-77696",
    storageBucket: "authentications-77696.appspot.com",
    messagingSenderId: "78594579082",
    appId: "1:78594579082:web:9b16cc51612e51784c2b73",
    measurementId: "G-5HYM28SMXT"
  };



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);



// auth initialise

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const loginWithGoogleRedirecting = () =>{
    signInWithRedirect(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        localStorage.setItem('token', JSON.stringify(token))

        const user = result.user; 

        // console.log(token, user)
        alert('Login Success!')
    }).catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
    })
}

export const loginWithGoogleByPopWindow = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        
        const user = result.user.photoURL; 
        
        // console.log(user.photoURL)
        localStorage.setItem('token', JSON.stringify({token, user}))
        alert('Login Success!')
    }).catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
    })
};

export const createAnAccountWithFirebase = async (email, password)  => {

    try{
        let res = await createUserWithEmailAndPassword(auth, email, password);

        alert("Login Please!")
        // console.log(res.user.accessToken);
    } catch (error) {
        alert(JSON.stringify(error.message));
        console.log(error.message);

    }
};

export const loginAnAccountWithFirebase = async (email, password) => {
    try{
        let res = await signInWithEmailAndPassword(auth, email, password);
       
        
        const token = res.user.accessToken;
        
        const user = res.user.photoURL; 
        
        // console.log(user.photoURL)
        localStorage.setItem('token', JSON.stringify({token, user}))
        alert('Login Success!')

    } catch (error) {
        alert(JSON.stringify(error.message));
        console.log(error.message)
    }
};

// login

export const handleLogout = async () => {
    try{
        await signOut(auth);
        localStorage.removeItem('token')
        alert('Logout success!')
    
        
    } catch (error) {

        console.log(error.message)
    }
};

//below is like eventLister it called when user login logout sigin
// onAuthStateChanged(auth, (user) => {
//     console.log(user);
//     if(user) {
//         alert(
//             `Hey! ${user.displayName}`
//         );
//     }


//      //else user have logout or not signin till now
// });
