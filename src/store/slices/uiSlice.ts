import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from 'store'

// Define a type for the slice state
interface UiSlice {
  sideBarOpen: boolean
}

// Define the initial state using that type
const initialState: UiSlice = {
  sideBarOpen: false,
}

export const uiSlice = createSlice({
  name: 'UI State',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSideBarOpen: (state, action: PayloadAction<boolean>) => {
      state.sideBarOpen = action.payload
    },
    toggleSideBarOpen: (state) => {
      state.sideBarOpen = !state.sideBarOpen
    },
  },
})

export const { setSideBarOpen, toggleSideBarOpen } = uiSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default uiSlice.reducer
