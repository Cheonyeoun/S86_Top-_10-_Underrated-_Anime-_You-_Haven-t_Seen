import { useEffect, useState } from "react";
import axios from 'axios';
import AnimeCard from "../AnimeCard";
import { useNavigate } from "react-router-dom";

function Home() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        axios.get('http://localhost:3000/anime')
            .then(response => {
                setData(response.data);
            })
            .catch(err => console.error("Error fetching the data:", err));
    }, []); 

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
      </div>
                <AnimeCard data={data}/>

        </div>
    );
}

export default Home;