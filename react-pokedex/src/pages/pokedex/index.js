import React from 'react'
import { Link } from 'react-router-dom'

const Pokedex = () => {
  return (
    <div>
        Pokedex
        <Link to={'/pokemon'}/>
    </div>
  )
}

export default Pokedex