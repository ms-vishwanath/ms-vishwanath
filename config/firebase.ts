// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbkKlCpGgJk2vFQJV5mm2IIXumL0zf4l4",
  authDomain: "ms-vishwanath.firebaseapp.com",
  projectId: "ms-vishwanath",
  storageBucket: "ms-vishwanath.firebasestorage.app",
  messagingSenderId: "763564872524",
  appId: "1:763564872524:web:f1dd383286879724a3b5e9",
  measurementId: "G-3J6DXX1P53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let analytics: ReturnType<typeof getAnalytics> | null = null;

if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
