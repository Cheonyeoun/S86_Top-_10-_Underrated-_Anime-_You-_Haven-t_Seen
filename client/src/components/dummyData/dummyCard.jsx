import AnimeCard from "../AnimeCard";
function DummyCard(){


    const dummyAnime = [
      
      {  title: "91 Days",
      image: "https://i.pinimg.com/736x/ac/a8/8b/aca88b02e038f666fe486dd68086efeb.jpg",
      genre: "Action",
      synopsis:
        "A gritty tale of revenge set in the prohibition era, 91 Days...",
    },
    {
      title:"Ergo Proxy",
      image:"https://i.pinimg.com/736x/2c/c9/b4/2cc9b4f849266fe70513a838f69135ce.jpg",
      synopsis:"In a post-apocalyptic future, a young woman investigates mysterious hu…",  
      genre:"Psychological #Sci-Fi #Mystery",

    },
    {
      title: "Erased",
      image: "https://i.pinimg.com/736x/da/de/fd/dadefdb4dad6b6a378c63d067e3475ef.jpg",
      synopsis: "A man travels back in time to prevent a murder...",
      genre: "Mystery"
    },
    {
      title: "Barakamon",
      image: "https://i.pinimg.com/736x/f9/58/62/f958628faaaaa285f3d4320a3112dad2.jpg",
      synopsis: "A calligrapher finds peace in a remote village.",
      genre: "Slice of Life"
    }
  
    ]

  return(
<>
<div>
<AnimeCard data={dummyAnime}/>


</div>


</>
  )
}

export default DummyCard;



