import React from 'react'
import logo from './logo.svg'
import './App.css'
import { useGetPokemonByNameQuery } from 'api'
import { useAppSelector } from 'hooks'
useAppSelector

const App = () => {
  const { data, isError, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : data != null ? (
        <p>{data.name}</p>
      ) : (
        isError && <p>Error</p>
      )}
    </>
  )
}

export default App
