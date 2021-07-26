import React from 'react'
import MoviesGrid from '../components/MoviesGrid'
import { Search } from '../components/Search'

export const LandingPage = () => {
  return (
    <div>
      <Search />
      <MoviesGrid />
    </div>
  )
}
