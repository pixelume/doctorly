import { Button, Stack, Typography } from '@mui/material'
import { useAppSelector } from 'hooks'
import React, { useState } from 'react'
import AddDoctorForm from './AddDoctorForm'
import DoctorsList from './DoctorsList'

const Doctors = () => {
  const [doAddDoctor, setDoAddDoctor] = useState(false)
  const { doctors } = useAppSelector((state) => state.ui)
  const hasDoctors = doctors.length > 0
  return (
    <Stack>
      {hasDoctors ? (
        <DoctorsList />
      ) : (
        <Typography variant="h5" sx={{ textAlign: 'center' }}>
          You have not added any doctors yet.
        </Typography>
      )}
      <Button sx={{ mt: 5 }} onClick={() => setDoAddDoctor(true)}>
        Add a Doctor
      </Button>
      {doAddDoctor && <AddDoctorForm {...{ doAddDoctor, setDoAddDoctor }} />}
    </Stack>
  )
}

export default Doctors
