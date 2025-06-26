import Navbar from "./components/nav/Navbar";
import DummyCard from "./components/dummyData/dummyCard";
import { useNavigate } from "react-router-dom";
import {Routes,Route} from "react-router-dom";
import Home from "./components/pages/Home";
import InsertAnime from "./components/pages/InsertAnime";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Top 10 Underrated Anime
      </h1>

      <p className="text-lg text-gray-600 max-w-xl mb-6">
        Welcome, don't miss out on gems hidden underground waiting to be witnessed!
      </p>
      <DummyCard/>
      <button onClick={()=>navigate('/home')} 
              className="bg-red-500 p-3 rounded-xl border-2 border-white hover:border-blue-400 
              hover:border-4 hover:bg-red-600 text-white hover:text-white shadow-xl"
                      >Next!
      </button>
    </div>
  );
}

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/addanime" element={<InsertAnime/>}/>

    </Routes>

    </>
  );
}

export default App;
