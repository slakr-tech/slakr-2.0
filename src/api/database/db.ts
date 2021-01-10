import { User } from './user';
const admin = require('firebase-admin');

import serviceAccount from './serviceAccountKeys.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db: any = admin.firestore();

const users = db.collection('users');

export function signin(user:User){
    users.doc(user.id).set({
        id:    user.id,
        name:  user.name,
        email: user.email,
        photo: user.email
    });  
}