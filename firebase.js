const firebaseAdmin = require('firebase-admin');
firebaseAdmin.initializeApp();

const firestore = firebaseAdmin.firestore();
const auth = firebaseAdmin.auth();

module.exports = {
    firestore, 
    auth
}