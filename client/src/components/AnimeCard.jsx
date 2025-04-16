import React from 'react';

const AnimeCard = ({data}) => {
  return (
    <div className='flex flex-wrap justify-center'>

        {data.map((anime,index)=>(
                <div key ={index} className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-4">
                <img className="w-full object-cover" src={anime.image} alt={anime.title} />
                <div className="px-6 py-4">

                  <div className="font-bold text-xl mb-2">{anime.title}</div>

                  <p className="text-gray-700 text-base">{anime.synopsis}</p>
                </div>
                <div className="px-6 pt-2 pb-4">
                  <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-purple-800">
                    #{anime.genre}
                  </span>
                </div>
              </div> 

        ))}
    </div>

  );
};

export default AnimeCard;
