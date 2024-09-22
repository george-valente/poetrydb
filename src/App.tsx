import  PoemImg  from './assets/poem-img.jpg'
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className = "font-inter antialiased bg-slate-100 p-2 min-h-screen">
      <div className="flex gap-2 py-16 px-4 mx-4">
        <div className="flex flex-col justify-around items-center">
          <h1 className = "font-bold text-5xl">Dive into Poetry. <br /> Explore authors, their works or get a random poetry.</h1>
          <NavLink to = "/authors" className = "px-3 py-2 bg-black text-white font-semibold rounded-md hover: border border-slate-900 hover:bg-white hover:text-black transition-all duration-300 ease-in-out">Explore</NavLink>
        </div>
        <img className = "w-[40%] rounded-md shadow-2xl" src={PoemImg} alt="" />
      </div>
    </div>

    
  )
}

export default App
