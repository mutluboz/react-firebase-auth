import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDA_QB-wrkM2Rp2ssrvNYBz-A1QUEQCo58',
  authDomain: 'fir-authdemo-44294.firebaseapp.com',
  databaseURL: 'https://fir-authdemo-44294.firebaseio.com',
  projectId: 'fir-authdemo-44294',
  storageBucket: 'fir-authdemo-44294.appspot.com',
  messagingSenderId: '1090377600103'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
auth.useDeviceLanguage();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };
