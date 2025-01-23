import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FlightOffer } from '../types/flightTypes'; 
import { RootState } from '@/store/store';

interface FlightOffersState {
  flightOffers: FlightOffer[];
}

const initialState: FlightOffersState = {
  flightOffers: [],
};

// Create the slice
const flightOffersSlice = createSlice({
  name: 'flightOffers',
  initialState,
  reducers: {
    setFlightOffers(state, action: PayloadAction<FlightOffer[]>) {
      state.flightOffers = action.payload;
    },
    addFlightOffer(state, action: PayloadAction<FlightOffer>) {
      state.flightOffers.push(action.payload);
    },
    removeFlightOffer(state, action: PayloadAction<string>) {
      state.flightOffers = state.flightOffers.filter(
        (offer) => offer.token !== action.payload
      );
    },
    clearFlightOffers(state) {
      state.flightOffers = [];
    },
    deleteFlightAtIndex(state, action: PayloadAction<number>) {
      state.flightOffers.splice(action.payload, 1); // Remove hotel at the specified index
    },
  },
});

// Export actions and reducer
export const {
  setFlightOffers,
  addFlightOffer,
  removeFlightOffer,
  clearFlightOffers,
  deleteFlightAtIndex,
} = flightOffersSlice.actions;

export default flightOffersSlice.reducer;



export const getAllFlights = (state: RootState) => state.flight.flightOffers
