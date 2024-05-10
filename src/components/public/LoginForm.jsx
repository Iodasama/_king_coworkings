import { useState } from "react";

const LoginForm = () => {

    const [message, setMessage] = useState(""); // "" = vide 
  
    const handleLoginSubmit = (event) => {
      event.preventDefault();
  
      const username = event.target.username.value;
      const password = event.target.password.value;
  
      const loginData = {
        username,                        // username: username,
        password                        // password: password,
      };

      const loginDataJson = JSON.stringify(loginData);    // on transforme en JSON

      fetch("http://localhost:5000/api/users/login", {       //appel fetch de type POST sur  url d'api avec en body le json créé et ces deux clés include et headers

      method: "POST",
      body: loginDataJson,
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((response) => {
      if (response.status === 200) {
        setMessage("Connexion allowed ");
      } else {
        setMessage("Connexion refused");
      }
    });
  };

  return ( 

<>
      <p>{message}</p>
      <form onSubmit={handleLoginSubmit}>
        <label>
          Nom de l'utilisateur
          <input name="username" type="text" />
        </label>

        <label>
          Mot de passe
          <input name="password" type="password" />
        </label>

        <input type="submit" />
      </form>
    </>
  );
};



export default LoginForm;
