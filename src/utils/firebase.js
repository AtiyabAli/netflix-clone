import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDHlclc8CmskmhfsRtJwcXBMTRc81aAc3U",
  authDomain: "netflix-clone-e49d4.firebaseapp.com",
  projectId: "netflix-clone-e49d4",
  storageBucket: "netflix-clone-e49d4.appspot.com",
  messagingSenderId: "885581026646",
  appId: "1:885581026646:web:b6968d4371d2321602b2f7",
  measurementId: "G-D7VVEJGR47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
