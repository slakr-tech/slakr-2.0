import { User } from './user';
const admin = require('firebase-admin');

import serviceAccount from './serviceAccountKeys.json';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db: any = admin.firestore();
console.log(typeof db)

const users = db.collection('users');
console.log(typeof users)

export function signin(user:User) {
    let doc = users.doc(user.id).get()
    if (doc.exists) {
        // user does exist
        console.log('user exists')
    } else {
        // user does not exist
        users.doc(user.id).set({
            id: user.id,
            name: user.name,
            email: user.email,
            photo: user.photo
          });
    }
}