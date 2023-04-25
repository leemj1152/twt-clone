import { authService } from "../fbase";
import AppRouter from "./Router"
import React, { useState } from "react";

function App() {  
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn}/>
      <footer>&copy; {new Date().getFullYear()} twitter</footer>
    </>
  );
}

export default App;
