import { useEffect, useState } from "react";
import axios from 'axios';
import AnimeCard from "../AnimeCard";

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/anime')
            .then(response => {
                setData(response.data);
            })
            .catch(err => console.error("Error fetching the data:", err));
    }, []); 

    return (
        <div>
            <h1 className="flex justify-center text-2xl font-extrabold">Anime List</h1>
            <div>
                <AnimeCard data={data}/>
            </div>
        </div>
    );
}

export default Home;
