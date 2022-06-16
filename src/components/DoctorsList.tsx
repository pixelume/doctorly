import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Tooltip,
  Typography,
} from '@mui/material'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import DeleteIcon from '@mui/icons-material/Delete'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import ScheduleIcon from '@mui/icons-material/Schedule'
import React from 'react'
import { useAppSelector, useAppDispatch } from 'hooks'
import { removeDoctor } from 'store/slices/uiSlice'

const DoctorsList = () => {
  const { doctors } = useAppSelector((state) => state.ui)
  const dispatch = useAppDispatch()

  return (
    <Paper
      elevation={0}
      sx={{ borderRadius: 5, padding: 5, border: '1px solid lightgrey' }}
    >
      <Typography
        sx={{ mt: 4, mb: 2, textAlign: 'center' }}
        variant="h6"
        component="div"
      >
        Doctors
      </Typography>
      <Box>
        <List>
          {doctors.map((doctor) => (
            <ListItem
              key={doctor.id}
              secondaryAction={
                <>
                  <Tooltip
                    title={`Create appointment for Dr ${doctor.surname}`}
                  >
                    <IconButton
                      edge="end"
                      aria-label="appointment"
                      onClick={() => null}
                      sx={{ mr: 1 }}
                    >
                      <ScheduleIcon color="primary" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={`View calendar for Dr ${doctor.surname}`}>
                    <IconButton
                      edge="end"
                      aria-label="calendar"
                      onClick={() => null}
                      sx={{ mr: 1 }}
                    >
                      <CalendarMonthIcon color="primary" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={`Delete Dr ${doctor.surname}`}>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => dispatch(removeDoctor(doctor.id))}
                    >
                      <DeleteIcon color="error" />
                    </IconButton>
                  </Tooltip>
                </>
              }
            >
              <ListItemAvatar>
                <Avatar>
                  <PersonOutlineIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={`${doctor.surname}, ${doctor.name}`}
                // secondary={secondary ? 'Secondary text' : null}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  )
}

export default DoctorsList
