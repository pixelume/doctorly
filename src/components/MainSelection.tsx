import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react'
import { useAppSelector, useAppDispatch } from 'hooks'
import { setMainSelection, SelectionOptions } from 'store/slices/uiSlice'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'

const MainSelection = () => {
  const { mainSelection } = useAppSelector((state) => state.ui)
  const dispatch = useAppDispatch()

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: SelectionOptions | undefined
  ) => {
    dispatch(setMainSelection(newAlignment))
  }

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 5 }}>
        <ToggleButtonGroup
          value={mainSelection}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="Doctors" aria-label="Doctors">
            <PersonOutlineIcon sx={{ mr: 1 }} />
            Doctors
          </ToggleButton>
          <ToggleButton value="Events" aria-label="Events">
            <CalendarMonthIcon sx={{ mr: 1 }} />
            Events
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </>
  )
}

export default MainSelection
