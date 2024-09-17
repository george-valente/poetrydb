import { useEffect, useState } from "react";

function App() {
  const [authors, setAuthors] = useState([]);

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
  
  
  return (
    <div className = "bg-slate-100 p-2 h-screen">
      <div className="font-inter antialiased">
        <h1 className = "text-xl text-center my-2">Poetry of The Day</h1>
        <p className = "text-center text-gray-500">“We don't read and write poetry because it's cute. We read and write poetry because we are members of the human race. And the human race is filled with passion"</p>
      </div>
      <div>
        {authors && authors.map((author) => (
          <li>{author}</li>
        ))}


      </div>
    </div>
  )
}

export default App
