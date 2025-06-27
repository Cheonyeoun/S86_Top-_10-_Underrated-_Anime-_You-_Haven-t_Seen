import React from 'react';
import { useNavigate } from 'react-router-dom';
const AnimeCard = ({data}) => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-wrap justify-center select-none'>

        {data.map((anime,index)=>(
                <div key ={index} className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-4 hover:scale-105 transition-transform duration-300" 
                     >
                <img className="w-full object-cover" src={anime.imageUrl} alt={anime.title} 
                />
                <div className="px-6 py-4">

                <div className="font-bold text-xl mb-2 cursor-pointer" onClick={()=> window.open(anime.url,'_blank')}>{anime.title}</div>

              <p className="text-gray-700 text-base">{anime.synopsis}</p>
                </div>
              <div className="px-6 pt-2 pb-4">
                {Array.isArray(anime.genre) && anime.genre.map((g, i) => (<span
                key={i}
                className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-purple-800 mr-2"
              >  #{g}
            </span>
))}
      </div>
      <div className='text-center font-semibold text-2xl p-3 itallic'>
        <p className="text-sm text-gray-600 italic">
             Recommended by: {anime.recommendedBy?.name || "Anonymous"}
        </p>

      </div>
          <div className="px-6 pb-4">
            <button
              onClick={() => navigate(`/editanime/${anime._id}`)}
              className="text-sm text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 transition"
            >
              ✏️ Edit
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
              onClick={() => handleDelete(anime._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}


    </div>

  );
};

export default AnimeCard;
