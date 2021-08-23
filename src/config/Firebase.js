import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDgJ4LT8sYthsE3jASmqTOgfQRlpj0swp8",
  authDomain: "hackathone-1st.firebaseapp.com",
  projectId: "hackathone-1st",
  storageBucket: "hackathone-1st.appspot.com",
  messagingSenderId: "197321424210",
  appId: "1:197321424210:web:d6b43dc62e76d47dbd8e8b"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();
  export const auth = firebase.auth();
  export const storage = firebase.storage();