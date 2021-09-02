function WelcomePage({ user, setIsLoggedIn }) {
  function HandleLogout() {
    setIsLoggedIn(false);
  }
  return (
    <>
      <p>Boas Vindas {user}</p>
      <button onClick={HandleLogout}>Sair</button>
    </>
  );
}

export default WelcomePage;
