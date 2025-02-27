import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  statusTab: false, // Algseisund
};

const cartSlice = createSlice({
  name: 'cart',  // Slice nimi
  initialState,  // Algseisund
  reducers: {
    toggleStatusTab(state) {
      state.statusTab = !state.statusTab;  // Keerab statusTab väärtuse
    },
  },
});

// Ekspordi tegevuse (action) ja redutseerija (reducer)
export const { toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;
