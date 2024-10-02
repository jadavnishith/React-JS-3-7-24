import { initializeApp } from "firebase/app";

const firebaseConfig = {
    
    apiKey: "AIzaSyApwAOqLNwNjOsGc_kFtNjYOdsPu3eOuJA",
  authDomain: "fir-database-72761.firebaseapp.com",
  projectId: "fir-database-72761",
  storageBucket: "fir-database-72761.appspot.com",
  messagingSenderId: "778679524839",
  appId: "1:778679524839:web:bb030e2a7c679c73e7b142",
  databaseURL:"https://fir-database-72761-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);

export default app