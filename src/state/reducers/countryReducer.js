import { createSlice } from "@reduxjs/toolkit";

const countrySlice = createSlice({
    name: 'country',
    initialState: {
      loading: false,
      error: null
    },
    reducers: {
      fetchCountryRequest: (state) => {
        state.loading = true;
      },
      fetchCountrySuccess: (state) => {
        state.loading = false;
        state.error = null;
      },
      fetchCountryFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }
    }
  });

export const { fetchCountryRequest, fetchCountrySuccess, fetchCountryFailure } = countrySlice.actions;

export default countrySlice.reducer;