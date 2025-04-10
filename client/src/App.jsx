import Navbar from "./components/nav/Navbar"


function Landing(){
  
  return(<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
  <h1 className="text-4xl font-bold text-gray-800 mb-4">
    Top 10 Underated Anime 
  </h1>

  <p className="text-lg text-gray-600 max-w-xl">
    Welcome, Don't Miss Out on Gems Which is Underground Waiting to people to witness it's refraction!
  </p>
</div>    
  )

}
function App() {


  return (
    <>
    <Navbar/>
    <Landing/>
    
    </>
  )
}

export default App
