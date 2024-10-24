;

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAki70xhMYfJJFYS8YbrGJOsNuK8NMNFbo",
  authDomain: "fir-storage-90d55.firebaseapp.com",
  projectId: "fir-storage-90d55",
  storageBucket: "fir-storage-90d55.appspot.com",
  messagingSenderId: "932692937443",
  appId: "1:932692937443:web:cade7f37f74f383c82d3d6",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage };
