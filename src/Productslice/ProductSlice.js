// src/features/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: { data: [], searchQuery: '', sortOrder: '' },
  reducers: {
    updateProducts: (state, action) => {
      state.data = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSortOrder: (state, action) => {
      state.sortOrder = action.payload;
      },
    updateSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    }
  },
});

export const { updateProducts, setSearchQuery, setSortOrder,updateSearchQuery } = productsSlice.actions;
export default productsSlice.reducer;
