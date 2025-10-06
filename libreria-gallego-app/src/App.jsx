import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar.jsx'
import BookCard from './components/BookCard.jsx'
import Favorites from './components/Favorites.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'

const sections = [
  {id: "inicio", label: "Inicio"},
  {id: "bookcard", label: "Bookcard"},
  {id: "favorites", label:"Favorites"},
]


export default function App() {

  return (
    
    <div className='scroll-smooth text-slate-800'>

      {<Navbar/>}
      {<Header/>}
      {<BookCard/>}
      {<Favorites/>}
      {<Footer/>}

    </div>

  )
}

export {sections}