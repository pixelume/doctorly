import React from 'react'
import logo from './logo.svg'
import './App.css'
// import { useGetPokemonByNameQuery } from 'api'
import { useAppSelector } from 'hooks'
import { Box, Container, ToggleButtonGroup, ToggleButton } from '@mui/material'
import MainSelection from 'components/MainSelection'
import Doctors from 'components/Doctors'
import { setMainSelection } from 'store/slices/uiSlice'

const App = () => {
  // const { data, isError, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  const { mainSelection } = useAppSelector((state) => state.ui)

  return (
    <Container>
      <MainSelection />
      {mainSelection === 'Doctors' && <Doctors />}
    </Container>
  )
}

export default App
