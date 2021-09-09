//import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAkmqI_wZwH6mAtarQPpFfL24oJyx5iITA',
  authDomain: 'tetris-7db41.firebaseapp.com',
  databaseURL: 'https://tetris-7db41-default-rtdb.firebaseio.com/',
  projectId: 'tetris-7db41',
  storageBucket: 'tetris-7db41.appspot.com',
  messagingSenderId: '854727630570',
  appId: '1:854727630570:web:279739fe2129c10ccac193',
  measurementId: 'G-98HHME414N',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export default db;
