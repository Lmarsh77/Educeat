import React from "react";
import { auth, provider, signInWithPopup } from "../firebase";

export default function Login({ setUser }) {
  const signIn = () => {
    signInWithPopup(auth, provider).then((res) => {
      const user = res.user;
      setUser({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      });
    });
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to Educeat</h1>
      <p>Please sign in with Google to continue</p>
      <button onClick={signIn} style={{ padding: "10px 20px", fontSize: 16 }}>
        Sign in with Google
      </button>
    </div>
  );
}
