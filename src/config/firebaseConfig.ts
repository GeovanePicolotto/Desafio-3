// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyC0_0aKbIVljeJx86xKit5nv89hIMbrHUw',
  authDomain: 'projeto-3-compass.firebaseapp.com',
  projectId: 'projeto-3-compass',
  storageBucket: 'projeto-3-compass.appspot.com',
  messagingSenderId: '859981285571',
  appId: '1:859981285571:web:41f2effa13e0026aaa7a76',
  measurementId: 'G-CRKSKJ9MYV',
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Inicialize os serviços que você precisa
const auth = getAuth(app);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);

// Exporte as instâncias para uso em outras partes do aplicativo
export { app, auth, firestore, analytics };





