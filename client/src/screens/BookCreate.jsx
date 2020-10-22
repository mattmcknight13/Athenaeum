import React, { useState } from 'react'
import { addGenre } from '../services/books'


export default function BookCreate(props) {
  const { genres } = props
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    image: '',
    genre: ''
  })
  
  const { handleBookCreate } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }
 

  return (
    <form onSubmit={ async (e) => {
      e.preventDefault();
      handleBookCreate(formData);
    }}>
      <h3>Add Book</h3>
      <label>
        Title:
        <input
          type="text"
          name='title'
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <label> Author:
        <input
          type="text"
          name='author'
          value={formData.author}
          onChange={handleChange}
        />
      </label>
      <label>Description
        <input
          type="textarea"
          name='description'
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <label>Cover image
        <input
          type="text"
          name='image'
          alt={formData.title}
          value={formData.image}
          onChange={handleChange}
        />
      </label>
      <label htmlFor='genre'> 
        <select id='genre' defaultValue='default' name='genre_id' onChange={handleChange}>
          <option disabled value='default'>--select Genre--</option>
          {genres.map(genre => (
            <option value={genre.id} key={genre.id}>{genre.name}</option>
          ))}
        </select>
      </label>
      <button>Create</button>
    </form>
  )
}