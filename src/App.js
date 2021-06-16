import React, { useEffect, useState } from "react";

import CharacterContainer from "./CharacterContainer";
import CharacterForm from "./CharacterForm.js";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [Characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://twtk-characters.herokuapp.com/characters")
      .then((r) => r.json())
      .then(setCharacters);
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  function handleAddCharacter(newCharacter) {
    setCharacters([...Characters, newCharacter]);
  }

  function handleDeleteCharacter(CharacterToDelete) {
    const updatedCharacters = Characters.filter((Character) => Character.id !== CharacterToDelete.id);
    setCharacters(updatedCharacters);
  }

  function handleUpdateCharacter(updatedCharacter) {
    const updatedCharacters = Characters.map((Character) =>
      Character.id === updatedCharacter.id ? updatedCharacter : Character
    );
    setCharacters(updatedCharacters);
  }

  return (
    <>
      {showForm ? <CharacterForm onAddCharacter={handleAddCharacter}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Character</button>
      </div>
      <CharacterContainer  
      Characters={Characters}
      onDeleteCharacter={handleDeleteCharacter}
      onUpdateCharacter={handleUpdateCharacter}
      />
    </>
  );
}

export default App;