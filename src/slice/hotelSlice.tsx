import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Hotel } from '@/types/types';
import { useAppSelector } from '@/app/hooks/reduxHooks';
import { RootState } from '@/store/store';

interface HotelsState {
  hotels: Hotel[];
}

const initialState: HotelsState = {
  hotels: [],
};

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    setHotels(state, action: PayloadAction<Hotel[]>) {
      state.hotels = action.payload;
    },
    addHotel(state, action: PayloadAction<Hotel>) {
      state.hotels.push(action.payload);
    },
    clearHotels(state) {
      state.hotels = [];
    },
    deleteHotelAtIndex(state, action: PayloadAction<number>) {
      state.hotels.splice(action.payload, 1); // Remove hotel at the specified index
    },
  },
});

export const { setHotels, addHotel, clearHotels, deleteHotelAtIndex } = hotelsSlice.actions;
export default hotelsSlice.reducer;
export const getAllHotels = (state: RootState) => state.hotel.hotels

