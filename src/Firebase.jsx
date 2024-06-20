// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword,signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFGT08BVW89C9PxTXWlPx_2Z50sen36eI",
  authDomain: "netflixclone-75309.firebaseapp.com",
  projectId: "netflixclone-75309",
  storageBucket: "netflixclone-75309.appspot.com",
  messagingSenderId: "805913198105",
  appId: "1:805913198105:web:565e8acd5d03a52577f488"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

const signup=async(name,email,password)=>{
try{
      const res=  await createUserWithEmailAndPassword(auth,email,password);
      const user=res.user;
      await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider: "local",
        email,
      });
}catch(error){
console.log(error);
toast.error(error.code.split('/')[1].split('-').join(" "));
}
}
const login=async (email,password)=>{
try{
await signInWithEmailAndPassword(auth,email,password);
}catch(error){
console.log(error);
toast.error(error.code.split('/')[1].split('-').join(" "));
}
}
const logout =()=>{
    signOut(auth);
}
export {auth,db,login,signup,logout};