import React from "react";
import "./App.css";

function App() {
  const names = ["alex", "Sveta", "Katya", "Viktor"];
  const users = [
    { id: 1, name: "alex" },
    { id: 2, name: "Sveta" },
    { id: 3, name: "Katya" },
    { id: 4, name: "Viktor" },
  ];
  const liElm = names.map((n) => <li>{n}</li>);
  const obLiElm = users.map((u) => <li>{u.name}</li>);

  return (
    <div>
      <ul>{obLiElm}</ul>
    </div>
  );
}

export default App;
