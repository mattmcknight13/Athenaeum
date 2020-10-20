import React, { useState } from 'react'

export default function BookCreate(props) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    image: '',
    genre: ''

  })
  const { handleFoodCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value })
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleFoodCreate(formData);
    }}>
      <h3>Create Food</h3>
      <label>
        Name:
        <input
          type="text"
          name='title'
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name='author'
          value={formData.author}
          onChange={handleChange}
        />
        <input
          type="textarea"
          name='description'
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="image"
          name='image'
          alt={formData.name}
          value={formData.image}
          onChange={handleChange}
        />
      </label>
      <button>Create</button>
    </form>
  )
}