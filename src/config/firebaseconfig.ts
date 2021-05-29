import firebase from '../../node_modules/firebase/app'
import '../../node_modules/firebase/analytics'
import '../../node_modules/firebase/auth'
import '../../node_modules/firebase/firestore'
import '../../node_modules/firebase/database'





require('dotenv').config();

    var firebaseConfig = {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      databaseURL: process.env.databaseURL,
      projectId: process.env.projectId,
      storageBucket:process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId,
      measurementId: process.env.measurementId
    };


firebase.initializeApp(firebaseConfig);


export default firebase;


