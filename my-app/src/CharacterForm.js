import React, { useState } from "react";

function CharacterForm({ onAddCharacter }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newCharacter = {
      ...formData,
      likes: 0,
    };

    fetch("https://twtk-characters.herokuapp.com/characters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCharacter),
    })
      .then((r) => r.json())
      .then(onAddCharacter);
  }

  return (
    <div className="container">
      <form className="add-Character-form"
      onSubmit={handleSubmit}>
        <h3>Add a Three Kingdoms character</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter the characters's name here."
          className="input-text"
          onChange={handleChange}
          value={formData.name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter the character's image URL here"
          className="input-text"
          onChange={handleChange}
          value={formData.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Submit the new Character"
          className="submit"
        />
      </form>
    </div>
  );
}

export default CharacterForm;