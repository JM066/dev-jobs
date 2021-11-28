import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAWFSDmhMUDyxxpCok_MZoIYHUv1m_yzDA",
  authDomain: "my-project-c37fd.firebaseapp.com",
  projectId: "my-project-c37fd",
  storageBucket: "my-project-c37fd.appspot.com",
  messagingSenderId: "103571541396",
  appId: "1:103571541396:web:0876d4ad0356589bbf1381",
  measurementId: "G-8NNQWZP1YG",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // console.log("userAuth", userAuth);
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error occured while fetching");
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
