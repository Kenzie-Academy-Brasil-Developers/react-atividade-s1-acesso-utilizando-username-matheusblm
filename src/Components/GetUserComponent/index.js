import { useState } from "react";
import "./style.css";
function GetUserComponent({ setUser, setIsLoggedIn }) {
  const [userInput, setUserInput] = useState("");
  function HandleLogin() {
    setUser(userInput);
    setIsLoggedIn(true);
  }
  return (
    <>
      <form>
        <input
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button onClick={() => HandleLogin(userInput)}>
          Acessar com o nome
        </button>
      </form>
    </>
  );
}

export default GetUserComponent;
