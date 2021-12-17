
import 'firebase/firestore'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAD2nmrscTo0PNznl96ocDPDlhIAGHPVLk",
  authDomain: "simple-blog-d5b5f.firebaseapp.com",
  projectId: "simple-blog-d5b5f",
  storageBucket: "simple-blog-d5b5f.appspot.com",
  messagingSenderId: "325053104469",
  appId: "1:325053104469:web:6c1dd7fa39696cf8062fdc"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

// export firestore
export { projectFirestore, timestamp }

