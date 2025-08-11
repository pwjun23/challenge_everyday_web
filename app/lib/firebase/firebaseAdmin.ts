// lib/firebase/firebaseAdmin.ts
import * as admin from 'firebase-admin';

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string);

if (!serviceAccount) {
  throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY is not defined in environment variables.');
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}

export const adminAuth = admin.auth();