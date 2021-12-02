import "./App.scss";
import React, { useState, useEffect } from "react";

const initProfile = {
  followers: null,
  publicRepos: null,
};

function App() {
  const [profile, setProfile] = useState(initProfile);

  const getProfile = async () => {
    const res = await fetch("https://api.github.com/users/gbenro");
    const json = await res.json();

    setProfile({
      followers: json.followers,
      publicRepos: json.public_repos,
    });
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h2>Fetch data</h2>
        <h3>{`Followers: ${profile.followers}, Repos: ${profile.publicRepos}`}</h3>
      </header>
    </div>
  );
}

export default App;
