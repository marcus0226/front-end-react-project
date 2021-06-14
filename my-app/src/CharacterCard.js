import React from "react";

function CharacterCard({ Character, onDeleteCharacter, onUpdateCharacter }) {
  const { id, name, image, likes, title } = Character;

  function handleDeleteClick() {
    fetch(`https://twtk-characters.herokuapp.com/characters/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        onDeleteCharacter(Character);
      });
  }

  function handleLikeClick() {
    const updateObj = {
      likes: Character.likes + 1,
    };

    fetch(`https://twtk-characters.herokuapp.com/characters/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
      .then((r) => r.json())
      .then(onUpdateCharacter);
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <h3>{title}</h3>
      <img
        src={image}
        alt={name}
        className="character-pic"
      />
      <p>{likes} Likes </p>
      <button 
      className="like-btn" 
      onClick={handleLikeClick}>Like {"like"}
      </button>
      <button 
      className="del-btn" 
      onClick={handleDeleteClick}>This one is weak!
      </button>
    </div>
  );
}

export default CharacterCard;
