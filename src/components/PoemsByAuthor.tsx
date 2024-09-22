import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
const poetryUrl = 'https://poetrydb.org/'; 

export function PoemsByAuthor(){
    interface PoemByAuthor{
        title: string; 
    }
    
    const {authorName} = useParams(); 
    const [poemsByAuthor, setPoemsByAuthor] = useState<PoemByAuthor[]>([]); 

    const getPoemsByAuthor = async(url: string) => {
        console.log(authorName);
        try{
            const res = await fetch(url); 
            const data = await res.json(); 

            setPoemsByAuthor(data)
        }catch(err: any){
            console.log(err.message); 
        }

    }

    useEffect(() => {
        const authorUrl = `${poetryUrl}/author/${authorName}/title`
        getPoemsByAuthor(authorUrl)

    },[authorName])

    return(
        <div className = "flex flex-col justify-center items-center py-4">
            <h2 className = "text-xl text-center">List of Poems by <span className = "font-bold text-2xl">{authorName}</span></h2>
            <span><span className="font-semibold">{poemsByAuthor.length}</span> poems found</span>
            <ul className = "py-4 list-disc">
            {poemsByAuthor && poemsByAuthor.map((poem, index) => (
                <Link to = {`/title/${poem.title}`}>
                    <li key = {index} className = "text-lg py-1 italic cursor-pointer hover:underline  ">{poem.title}</li>
                </Link>
            ))}
            </ul>
            
        </div>
    )
}