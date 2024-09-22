import { useState, useEffect } from "react";
import Flower from '../assets/flower-img.png'
import { useParams } from "react-router-dom";
const poetryUrl = 'https://poetrydb.org/'; 

import ThreeDots from "react-loading-icons/dist/esm/components/three-dots";

interface PoetryProps {
    title: string; 
    author: string; 
    lines: string[]; 
    linecount: number;
}

export function Poetry(){
    const {poemTitle} = useParams(); 

    const [Poetry, setPoetry] = useState<PoetryProps | null>(null); 
      
      const getPoetry = async (url: string) => { 
        try{
          const res = await fetch(url);
          const data = await res.json(); 
    
          setPoetry(data[0]);
        }catch(err: any){
          console.log(err.message); 
        }
      }
    
      useEffect(() => {
        const poetryFoundUrl = `${poetryUrl}/title/${poemTitle}`
        getPoetry(poetryFoundUrl); 
    
      },[poemTitle])

    return(
        <div>
        <div className = "my-4">
        {Poetry ? (
          <div className = "flex justify-center flex-col items-center px-10 py-5 bg-[#F4E4C3] max-w-[50%] mx-auto rounded-md shadow-2xl">
            <img className = "w-10 py-2" src={Flower} alt="" />
            <div className="border border-[#C2B475] p-4">
                <h3 className = "font-stix text-center font-bold text-amber-800 text-2xl py-2">{Poetry.title}</h3>
                <div className="font-stix">
                  {Poetry.lines.map((line, index) => (
                    <p key = {index} className = "font-medium text-start items-start text-lg leading-8">{line}</p>
                  ))}
                  <h3 className = "text-end">{Poetry.author}</h3>
                </div>
            </div>
          </div>
        ):(
            <div className="flex justify-center items-center">
            <ThreeDots stroke="#000" strokeOpacity={.125} speed={.75} />
          </div>
        )
        }
      </div>

        </div>
    )
}