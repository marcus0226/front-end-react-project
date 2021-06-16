import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterContainer({ Characters, onDeleteCharacter, onUpdateCharacter }) {
  const characterCards = Characters.map((Character) => (
    <CharacterCard
      key={Character.id}
      Character={Character}
      onDeleteCharacter={onDeleteCharacter}
      onUpdateCharacter={onUpdateCharacter}
    />
  ));

  return (
    <div 
    id="character-set">{characterCards}
    </div>
  );
}

export default CharacterContainer;