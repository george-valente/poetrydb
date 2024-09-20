import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import  PoemImg  from './assets/poem-img.jpg'

function App() {

  const alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
  
  interface RandomPoetry{
    title: string; 
    author: string; 
    lines: string[]; 
    linecount: number; 
  }

  const [authors, setAuthors] = useState<string[]>([]);
  const [filteredAuthors, setFilteredAuthors] = useState<string[]>([]); 
  const [randomPoetry, setRandomPoetry] = useState<RandomPoetry | null>(null); 



  const getAuthors = async () => {
    try{
      const res = await fetch('https://poetrydb.org/author'); 
      const data = await res.json(); 

      setAuthors(data.authors);
    }catch(err: any){
      console.log(err.message); 
    }
  }
  
  useEffect(() => {
    getAuthors();
  },[])

  const getRandomPoetry = async () => { 
    try{
      const res = await fetch('https://poetrydb.org/random/10');
      const data = await res.json(); 

      setRandomPoetry(data[0]);
    }catch(err: any){
      console.log(err.message); 
    }
  }

  const getSelectedLetter = (letter: string) => {
    if(!authors.length) return; 
    
    let authorsWithLetter = authors.filter((author) => 
      author.startsWith(letter)
  );
    setFilteredAuthors(authorsWithLetter); 

  }

  

  useEffect(() => {
    getRandomPoetry(); 

  },[])
  
  
  return (
    <div className = "font-inter antialiased bg-slate-100 p-2 min-h-screen">
      <div className="flex gap-2 py-4 px-4 mx-4">
        <h1 className = "font-bold text-5xl">Dive into Poetry. Explore authors, their works or get a random poetry.</h1>
        <img className = "w-[40%] rounded-md shadow-2xl" src={PoemImg} alt="" />
      </div>
      <div>
        <h2 className = "text-center my-2 font-semibold">Authors</h2>
        <ul className = "flex flex-wrap justify-center gap-2">
          {alphabet.map((letter, index) => (
            <li key = {index}>
              <div 
              onClick = {() => getSelectedLetter(letter)}
              className = "bg-slate-500 py-2 mx-2 cursor-pointer rounded-xl w-16 flex justify-center hover:brightness-75 transition">
              <span 
              className = "py-2 mx-2 text-lg text-slate-50">{letter}</span>
            </div>
            </li>
          ))}
        </ul>
      </div>

      <div className = "flex justify-center items-center my-4">
        <ul>
        {filteredAuthors.length > 0 ?
         filteredAuthors.map((author, index) => (
          <li className = "py-1 font-medium italic cursor-pointer hover:underline"
          key = {index}>{author}</li>
        )) : (
          <p>
          </p>
        )}
        </ul>
      </div>
      {/* <div className = "my-5">
        <h2 className = "text-center my-3">A random Poetry for your pleasure.</h2>
        {randomPoetry ? (
          <div className = "flex justify-center flex-col items-center px-6">
            <h3 className = "font-stix text-center font-bold text-amber-800 text-2xl py-2">{randomPoetry.title}</h3>
            <div className="font-stix">
              {randomPoetry.lines.map((line, index) => (
                <p key = {index} className = "font-medium text-start items-start text-lg leading-8">{line}</p>
              ))}
            </div>
          </div>
        ):(
          <p></p>
        )
        }
      </div> */}
    </div>

    
  )
}

export default App
