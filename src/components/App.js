import { authService } from "../fbase";
import AppRouter from "./Router"
import React, { useEffect, useState } from "react";

function App() {  
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  useEffect(() => {
    authService.onAuthStateChanged((user) => console.log(user))
  }, [])
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn}/>
      <footer>&copy; {new Date().getFullYear()} twitter</footer>
    </>
  );
}

export default App;
