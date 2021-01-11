import { User } from './user';
const admin = require('firebase-admin');

import serviceAccount from './serviceAccountKeys.json';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db: any = admin.firestore();

const users = db.collection('users');

export function signin(user:User) {
    let docPromise = users.doc(user.id).get()
    docPromise.then((doc: any) =>{
        if (doc._fieldsProto.email) {
            // user does exist
            console.log('user exists')
        } else {
            // user does not exist
            console.log('user does not exist')
            users.doc(user.id).set({
                id: user.id,
                name: user.name,
                email: user.email,
                photo: user.photo
            });
        }
    })
}