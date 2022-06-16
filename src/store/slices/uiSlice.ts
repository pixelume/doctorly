import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store'

// Define a type for the slice state

export type SelectionOptions = 'Doctors' | 'Events' | undefined
export type DoctorType = { id: string; name: string; surname: string }
interface UiSlice {
  mainSelection: SelectionOptions
  doctors: DoctorType[]
}

// Define the initial state using that type
const initialState: UiSlice = {
  mainSelection: undefined,
  doctors: [],
}

export const uiSlice = createSlice({
  name: 'UI State',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setMainSelection: (state, action: PayloadAction<SelectionOptions>) => {
      state.mainSelection = action.payload
    },
    addDoctor: (state, action: PayloadAction<DoctorType>) => {
      state.doctors.push(action.payload)
    },
    removeDoctor: (state, action: PayloadAction<string>) => {
      state.doctors = state.doctors.filter((item) => item.id !== action.payload)
    },
  },
})

export const { setMainSelection, addDoctor, removeDoctor } = uiSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default uiSlice.reducer
