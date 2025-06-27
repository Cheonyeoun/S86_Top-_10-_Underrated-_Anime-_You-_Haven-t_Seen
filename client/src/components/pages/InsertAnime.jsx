import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


const InsertAnime = () => {
  const [form, setForm] = useState({
    title: '',
    synopsis: '',
    genre: '',
    rating: '',
    episodes: '',
    releaseYear: '',
    studio: '',
    status: 'Finished',
    imageUrl: '',
    recommendedBy: ''
  });
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      genre: form.genre.split(',').map((g) => g.trim())
    };
    try {
      await axios.post('http://localhost:3000/anime', payload);
      alert('Anime added successfully!');
    } catch (err) {
      console.error(err);
      alert('Error adding anime.');
    }
  };
  useEffect(() => {
  axios.get('http://localhost:3000/users')
    .then(res => setUsers(res.data))
    .catch(err => console.error('Error fetching users:', err));
}, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">Add a New Anime</h2>

        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          required
        />

        <textarea
          name="synopsis"
          placeholder="Synopsis"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          required
        />

        <input
          type="text"
          name="genre"
          placeholder="Genres (comma separated)"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          required
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          required
        />

        <input
          type="number"
          name="episodes"
          placeholder="Episodes"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          required
        />

        <input
          type="number"
          name="releaseYear"
          placeholder="Release Year"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          required
        />

        <input
          type="text"
          name="studio"
          placeholder="Studio"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          required
        />

        <select
          name="status"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        >
          <option value="Finished">Finished</option>
          <option value="Ongoing">Ongoing</option>
        </select>

        <input
          type="url"
          name="imageUrl"
          placeholder="Image URL"
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
        />
        <select name="recommendedBy" value={form.recommendedBy} onChange={handleChange} required className="w-full border p-2 rounded">
          <option value="">Select Recommender</option>
          {users.map(user => (
            <option key={user._id} value={user._id}>{user.name}</option>
          ))}

        </select>
        
        <button
          type="submit"
          className="bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 w-full"
        >
          Add Anime
        </button>
      </form>
    </div>
  );
};

export default InsertAnime;



3/3

