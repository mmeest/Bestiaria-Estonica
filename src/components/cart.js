import { createSlice } from 'redux-toolkit';

const initialState = {
    statusTab: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleStatusTab(state) {
            state.statusTab = !state.statusTab;  // Keerab statusTab väärtust
        }
    }
});

// Ekspordi reducerit, mitte ainult funktsiooni
export const { toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;
