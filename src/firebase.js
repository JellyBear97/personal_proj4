import { initializeApp } from 'firebase/app';

// 🔑 Authentication SDK 추가
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log('app', app);

// 🔑 Authentication SDK 추가
export const auth = getAuth(app);
console.log('auth에는 뭐가 들어있슴네까', auth);

export default app;
