import { Outlet } from "react-router-dom";

export function Header(){
    return(
        <div className="font-inter antialiased  bg-slate-100 p-2 min-h-screen">
        <div className="flex justify-between items-center">
          <a href = "" className = "text-3xl font-extrabold  my-3">Poetry of The Day</a>
          <div className="flex gap-3 px-2">
            <a className = "font-semibold hover:underline" href="">Authors</a>
            <a className = "font-semibold hover:underline" href="">Random Poetry</a>
          </div>
        </div> 
        <p className = "text-center  text-gray-500">“We don't read and write poetry because it's cute. We read and write poetry because we are members of the human race. And the human race is filled with passion"</p>
        <Outlet/>
      </div>
      
    )
}