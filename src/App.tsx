import { useEffect, useState } from "react";

function App() {

  interface RandomPoetry{
    title: string; 
    author: string; 
    lines: string[]; 
    linecount: number; 
  }

  const [authors, setAuthors] = useState([]);
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
      const res = await fetch('https://poetrydb.org/random');
      const data = await res.json(); 

      setRandomPoetry(data[0]);
    }catch(err: any){
      console.log(err.message); 
    }
  }

  

  useEffect(() => {
    getRandomPoetry(); 
    console.log(randomPoetry)

  },[])
  
  
  return (
    <div className = "font-inter antialiased bg-slate-100 p-2 min-h-screen">
      <div className="">
        <h1 className = "text-3xl font-extrabold  my-3">Poetry of The Day</h1>
        <p className = "text-center  text-gray-500">“We don't read and write poetry because it's cute. We read and write poetry because we are members of the human race. And the human race is filled with passion"</p>
      </div>
      <div className = "my-5">
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
      </div>

      {/* <div>
        <h2 className = "text-center my-2">Authors</h2>
        <ul>
        {authors && authors.map((author) => (
          <li>
            <a href="">{author}</a>
          </li>
        ))}

        </ul>
      </div> */}
    </div>
  )
}

export default App
