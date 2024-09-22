import { useState, useEffect } from "react";
import Flower  from '../assets/flower-img.png'
import { RotateCw } from "lucide-react";

import ThreeDots from "react-loading-icons/dist/esm/components/three-dots";

interface RandomPoetryProps {
  title: string; 
  author: string; 
  lines: string[]; 
  linecount: number;
}

export function RandomPoetry(){
      const [randomPoetry, setRandomPoetry] = useState<RandomPoetryProps | null>(null); 
      
      const getRandomPoetry = async () => { 
        try{
          const res = await fetch('https://poetrydb.org/random/10');
          const data = await res.json(); 
    
          setRandomPoetry(data[0]);
        }catch(err: any){
          console.log(err.message); 
        }
      }
      useEffect(() => {
        getRandomPoetry(); 
    
      },[])
      
    return(
        <div>
        <div className = "my-4">
        <div className="flex flex-col justify-center items-center p-2">
            <h2 className = "text-center my-3">A random Poetry for your pleasure.</h2>
            <button 
            onClick = {getRandomPoetry}
            className = "">
                <RotateCw className = "text-[#6B7280]"/>
            </button>
        </div>
        {randomPoetry ? (
          <div className = "flex justify-center flex-col items-center px-10 py-5 bg-[#F4E4C3] max-w-[50%] mx-auto rounded-md shadow-2xl">
            <img className = "w-10 py-2" src={Flower} alt="" />
            <div className="border border-[#C2B475] p-4">
                <h3 className = "font-stix text-center font-bold text-amber-800 text-2xl py-2">{randomPoetry.title}</h3>
                <div className="font-stix">
                  {randomPoetry.lines.map((line, index) => (
                    <p key = {index} className = "font-medium text-start items-start text-lg leading-8">{line}</p>
                  ))}
                  <h3 className = "text-end">{randomPoetry.author}</h3>
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