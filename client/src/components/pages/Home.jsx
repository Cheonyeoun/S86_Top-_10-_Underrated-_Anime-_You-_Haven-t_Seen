import { useEffect, useState } from "react";
import axios from 'axios';
import AnimeCard from "../AnimeCard";
import { useNavigate } from "react-router-dom";

function Home() {
    const [data, setData] = useState([]);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');    const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/anime")
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching:", err));
      
  axios.get("http://localhost:3000/users")
    .then((res) => setUsers(res.data))
    .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/anime/${id}`);
      setData((prev) => prev.filter((anime) => anime._id !== id));
    } catch (err) {
      console.error("Error deleting:", err);
    }
  };
  const filteredAnime = selectedUser
  ? data.filter(anime => anime.recommendedBy?._id === selectedUser)
  : data;

return (
        <div className="min-h-screen bg-gray-100 px-4 py-8">
            <h1 className="text-3xl font-bold text-center text-black mb-6">
                 Top 10 Underrated Anime
            </h1>

      <div className="flex justify-center mb-6">
        <button
          onClick={() => navigate('/addanime')}
          className="bg-purple-600 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
        >
          ➕ Add Anime
        </button>
        <select
              value={selectedUser}
              onChange={(e) => setSelectedUser(e.target.value)}
              className="
                bg-white border border-gray-300 text-gray-700
                rounded-md px-4 ml-3 py-2 shadow-sm focus:outline-none
                focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                >
                    <option value="">-- Filter by User --</option>
                      {users.map(user => (
                            <option key={user._id} value={user._id}>
                                    {user.name}
                            </option>
        ))}
        </select>

      </div>
      <AnimeCard data={filteredAnime} handleDelete={handleDelete} />


        </div>
    );
}

export default Home;