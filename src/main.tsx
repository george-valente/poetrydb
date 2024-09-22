import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 

import { Header } from './components/Header.tsx';
import { Alphabet } from './components/Alphabet.tsx';
import { RandomPoetry } from './components/RandomPoetry.tsx';
import { PoemsByAuthor } from './components/PoemsByAuthor.tsx';
import { Poetry } from './components/Poetry.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,

    children:[
      {
        path: '/',
        element: <App/>
      },
      {
        path: '/authors',
        element: <Alphabet/>
      },
      {
        path: '/random-poetry',
        element: <RandomPoetry/>
      },
      {
        path: '/author/:authorName/title',
        element: <PoemsByAuthor/>
      },
      {
        path: '/title/:poemTitle',
        element: <Poetry/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
