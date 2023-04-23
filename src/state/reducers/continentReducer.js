import { createSlice } from "@reduxjs/toolkit";

const continentSlice = createSlice({
    name: 'continent',
    initialState: {
      continentCode: "",
      continentName: "",
      countries: [],
      loading: false,
      error: null
    },
    reducers: {
      fetchContinentRequest: (state) => {
        state.loading = true;
      },
      fetchContinentSuccess: (state, action) => {
        state.continentCode = action.payload.continentCode;
        state.continentName = action.payload.continentName;
        state.countries = action.payload.countries;
        state.loading = false;
        state.error = null;
      },
      fetchContinentFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }
    }
  });

export const { fetchContinentRequest, fetchContinentSuccess, fetchContinentFailure } = continentSlice.actions;

export default continentSlice.reducer;