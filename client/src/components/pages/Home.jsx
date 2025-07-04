import { useEffect, useState } from "react";
import axios from 'axios';
import AnimeCard from "../AnimeCard";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const navigate = useNavigate();

  // Fetch anime (all or by user)
  useEffect(() => {
    const animeURL = selectedUser
      ? `http://localhost:3000/anime/user/${selectedUser}`
      : `http://localhost:3000/anime`;

    axios.get(animeURL)
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching anime:", err));
  }, [selectedUser]);

  // Fetch users (only once)
  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  // Delete anime
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/anime/${id}`);
      setData((prev) => prev.filter((anime) => anime.id !== id)); // use 'id', not '_id'
    } catch (err) {
      console.error("Error deleting:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-black mb-6">
        Top 10 Underrated Anime
      </h1>

      {/* Controls */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => navigate('/addanime')}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
        >
          ➕ Add Anime
        </button>

        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          className="ml-4 bg-white border border-gray-300 text-gray-700
                     rounded-md px-4 py-2 shadow-sm focus:outline-none
                     focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
        >
          <option value="">-- Filter by User --</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>
      </div>

      {/* Anime list */}
      <AnimeCard data={data} handleDelete={handleDelete} />
    </div>
  );
}

export default Home;
