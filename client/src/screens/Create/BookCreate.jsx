import React, { useState } from "react";
import "./BookCreate.css";

export default function BookCreate(props) {
  const { genres } = props;
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    image: "",
    genre: "",
  });

  const { handleBookCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="create-page">
      <div>
        <h3>Add Book</h3>
      </div>

      <form
        className="create"
        onSubmit={async (e) => {
          e.preventDefault();
          handleBookCreate(formData);
        }}
      >
        <label>
          Title
          <br />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Author
          <br />
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </label>
        <label>
          Description
          <br />
          <input
            type="textarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Cover image
          <br />
          <input
            type="text"
            name="image"
            alt={formData.title}
            value={formData.image}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="genre">
          <select
            id="genre"
            defaultValue="default"
            name="genre_id"
            onChange={handleChange}
          >
            <option disabled value="default">
              --select Genre--
            </option>
            {genres.map((genre) => (
              <option value={genre.id} key={genre.id}>
                {genre.name}
              </option>
            ))}
          </select>
        </label>
        <button className="create-btn">Create</button>
      </form>
    </div>
  );
}
