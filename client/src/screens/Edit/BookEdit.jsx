import React, { useState } from 'react'
import { useParams } from 'react-router'
import './BookEdit.css'

export default function BookEdit(props) {
  const { handleBookEdit } = props
  const { id } = useParams()
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    image: '',
    genre: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value })
  }

  return (
    <form className='edit-page' onSubmit={(e) => {
      e.preventDefault();
      handleBookEdit(id, formData);
    }}>
      <h3>Edit Book</h3>
      <label>
        Title
         <br/>
        <input
          type="text"
          name='title'
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Author
         <br/>
        <input
          type="text"
          name='author'
          value={formData.author}
          onChange={handleChange}
        />
      </label>
      <label>
        Description
         <br/>
        <textarea
          type="textarea"
          name='description'
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <label>
        Cover Art
         <br/>
        <input
          type="text"
          name='image'
          value={formData.image}
          onChange={handleChange}
        />
      </label>
      <button>Edit</button>
    </form>
  )
}
