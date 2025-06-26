// src/pages/UpdateAnime.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateAnime = () => {
  const { id } = useParams(); // gets the :id from the URL
  const navigate = useNavigate();
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

  useEffect(() => {
    // Fetch existing data for that ID
    axios.get(`http://localhost:3000/anime/${id}`)
      .then((res) => {
        const anime = res.data;
        setForm({
          ...anime,
          genre: anime.genre.join(', ') // convert array to comma string for input
        });
      })
      .catch((err) => console.error('Error fetching anime:', err));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      genre: form.genre.split(',').map(g => g.trim())
    };

    try {
      await axios.put(`http://localhost:3000/anime/${id}`, payload);
      alert('Anime updated!');
      navigate('/home'); // redirect to home
    } catch (err) {
      console.error(err);
      alert('Update failed.');
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Update Anime</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} className="w-full border p-2 rounded" required />
        <textarea name="synopsis" placeholder="Synopsis" value={form.synopsis} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="text" name="genre" placeholder="Genres (comma separated)" value={form.genre} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="number" name="rating" placeholder="Rating" value={form.rating} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="number" name="episodes" placeholder="Episodes" value={form.episodes} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="number" name="releaseYear" placeholder="Release Year" value={form.releaseYear} onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="text" name="studio" placeholder="Studio" value={form.studio} onChange={handleChange} className="w-full border p-2 rounded" required />
        <select name="status" value={form.status} onChange={handleChange} className="w-full border p-2 rounded">
          <option value="Finished">Finished</option>
          <option value="Ongoing">Ongoing</option>
        </select>
        <input type="url" name="imageUrl" placeholder="Image URL" value={form.imageUrl} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="text" name="recommendedBy" placeholder="Recommended By" value={form.recommendedBy} onChange={handleChange} className="w-full border p-2 rounded" />
        <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 transition">Update Anime</button>
      </form>
    </div>
  );
};

export default UpdateAnime;
