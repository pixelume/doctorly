import { Box, Button, Modal, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { addDoctor, DoctorType } from 'store/slices/uiSlice'
import DialogModal from './uiComponents/DialogueModal'
import { useAppDispatch } from 'hooks'

interface AddDoctorFormProps {
  doAddDoctor: boolean
  setDoAddDoctor: React.Dispatch<React.SetStateAction<boolean>>
}

const AddDoctorForm = ({ doAddDoctor, setDoAddDoctor }: AddDoctorFormProps) => {
  const [addedDoctor, setAddedDoctor] = useState<DoctorType>({
    name: '',
    surname: '',
    id: '',
  })
  const dispatch = useAppDispatch()

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAddedDoctor({ ...addedDoctor, [e.target.id]: e.target.value })
  }

  const handleAdd = () => {
    dispatch(
      addDoctor({
        ...addedDoctor,
        id: `${addedDoctor.name}-${addedDoctor.surname}`,
      })
    )
    setDoAddDoctor(false)
  }

  return (
    <DialogModal
      open={doAddDoctor}
      closeHandler={() => setDoAddDoctor(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      title="Add New Doctor"
    >
      <Box sx={{ minWidth: '500px' }}>
        <Stack>
          <TextField
            value={addedDoctor.name}
            id="name"
            label="First Name"
            variant="standard"
            onChange={handleInput}
          />
          <TextField
            value={addedDoctor.surname}
            id="surname"
            label="Last Name"
            variant="standard"
            onChange={handleInput}
          />
          <Button variant="contained" sx={{ mt: 8 }} onClick={handleAdd}>
            Add
          </Button>
        </Stack>
      </Box>
    </DialogModal>
  )
}

export default AddDoctorForm
