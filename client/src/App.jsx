import Navbar from "./components/nav/Navbar";
import DummyCard from "./components/dummyData/dummyCard";
function Landing() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Top 10 Underrated Anime
      </h1>

      <p className="text-lg text-gray-600 max-w-xl mb-6">
        Welcome, don't miss out on gems hidden underground waiting to be witnessed!
      </p>
      <DummyCard/>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar/>
      <Landing/>
    </>
  );
}

export default App;
