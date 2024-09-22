import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Alphabet(){
    const alphabet = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
      ];

    const [authors, setAuthors] = useState<string[]>([]);
    const [filteredAuthors, setFilteredAuthors] = useState<string[]>([]); 

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

      const getSelectedLetter = (letter: string) => {
        if(!authors.length) return; 
        
        
        let authorsWithLetter = authors.filter((author) => 
          author.startsWith(letter)
      )
        setFilteredAuthors(authorsWithLetter); 
    
      }
      
    return(
    <div className = "py-4">
        <div>
        <h2 className = "text-center my-2 font-semibold">Explore by Authors</h2>
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
        <ul className = "list-decimal">
        {filteredAuthors.length > 0 ?
         filteredAuthors.map((author, index) => (
          <Link to = {`/author/${author}/title`}>
            <li className = "py-1 font-medium italic cursor-pointer hover:underline"
            key = {index}>{author}</li>
          </Link>
        )) : (
          <p>
            No authors found :(          
          </p>
        )}
        </ul>
      </div>
    </div>
        
    )
}