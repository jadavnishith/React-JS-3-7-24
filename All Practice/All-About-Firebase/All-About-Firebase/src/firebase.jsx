import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCzgF7BuLnitxRV7hm2j0CgBnplUiGBzcA",
  authDomain: "mybook-app-9d19c.firebaseapp.com",
  projectId: "mybook-app-9d19c",
  storageBucket: "mybook-app-9d19c.appspot.com",
  messagingSenderId: "876490759573",
  appId: "1:876490759573:web:f593497e61909438552a9c",
  databaseURL: "https://mybook-app-9d19c-default-rtdb.firebaseio.com",

};

export const app = initializeApp(firebaseConfig);

