import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount, getBitcoin } from './counterAPI';

const initialState = {
  cryptoStatus: '',
  bitcoin: {},
};

export const fetchBlockChain = createAsyncThunk(
  'crypto/getBitcoin',
  async () => {
    const response = await getBitcoin();
    return response.data.bpi;
  }
);

export const counterSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setBitcoin: (state, action) => {
      state.bitcoin = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlockChain.pending, (state) => {
        state.cryptoStatus = 'loading';
      })
      .addCase(fetchBlockChain.fulfilled, (state, action) => {
        state.cryptoStatus = 'idle';
        state.bitcoin = action.payload;
      });
  },
});

export const { setBitcoin } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;
export const selectBitcoin = (state) => state.bitcoin;


export default counterSlice.reducer;
