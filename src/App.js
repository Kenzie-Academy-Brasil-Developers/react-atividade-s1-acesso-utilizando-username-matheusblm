import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import GetUserComponent from "./Components/GetUserComponent";
import WelcomePage from "./Components/WelcomePage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn ? (
          <WelcomePage user={user} setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <GetUserComponent setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
        )}
      </header>
    </div>
  );
}

export default App;
