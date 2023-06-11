import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut } from "firebase/auth";
import "firebase/firestore";
import "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { createContext } from "react";
const firebaseConfig = {
  apiKey: "AIzaSyBWU5jrZqF9JABUT6HhEnjSMzQ6eCWNgv0",
  authDomain: "chat-react-4f5e8.firebaseapp.com",
  projectId: "chat-react-4f5e8",
  storageBucket: "chat-react-4f5e8.appspot.com",
  messagingSenderId: "711813537858",
  appId: "1:711813537858:web:2247cdd722f7a3fa834ddb",
  measurementId: "G-F43TVXF8RC",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore();

export const Context = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context.Provider
      value={{
        app,
        auth,
        db,
        signOut,
      }}
    >
      <App />
    </Context.Provider>
  </React.StrictMode>
);
