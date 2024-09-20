import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import { Header } from './components/Header.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,

    children:[
      {
        path: '/',
        element: <App/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
