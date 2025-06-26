import AnimeCard from "../AnimeCard";
function DummyCard(){


  const dummyAnime = [
    {
      title: "91 Days",
      imageUrl: "https://i.pinimg.com/736x/ac/a8/8b/aca88b02e038f666fe486dd68086efeb.jpg",
      genre: ["Action", "Drama", "Historical"],
      url: "https://hianimez.to/91-days-730",
      synopsis: "A gritty tale of revenge set in the prohibition era, 91 Days...",
    },
    {
      title: "Ergo Proxy",
      imageUrl: "https://i.pinimg.com/736x/2c/c9/b4/2cc9b4f849266fe70513a838f69135ce.jpg",
      synopsis: "In a post-apocalyptic future, a young woman investigates mysterious human-like robots...",
      genre: ["Psychological", "Sci-Fi", "Mystery"],
      url: "https://hianimez.to/ergo-proxy-626",
    },
    {
      title: "Erased",
      imageUrl: "https://i.pinimg.com/736x/da/de/fd/dadefdb4dad6b6a378c63d067e3475ef.jpg",
      synopsis: "A man travels back in time to prevent a murder...",
      genre: ["Mystery", "Supernatural", "Psychological", "Seinen"],
      url: "https://hianimez.to/erased-151",
    },
    {
      title: "Barakamon",
      imageUrl: "https://i.pinimg.com/736x/f9/58/62/f958628faaaaa285f3d4320a3112dad2.jpg",
      synopsis: "A calligrapher finds peace in a remote village.",
      genre: ["Slice of Life", "Comedy"],
      url: "https://hianimez.to/barakamon-130",
    }
  ];
  

  return(
<>
<div>
<AnimeCard data={dummyAnime}/>


</div>


</>
  )
}

export default DummyCard;



