const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

export const getGreeting = createAsyncThunk(
  'greeting/getGreeting',
  async () => {
    const response = await fetch('http://localhost:3000/greetings/message');
    const data = await response.json();
    return data;
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    message: null,
    status: null,
  },
  extraReducers: {
    [getGreeting.pending]: (state) => {
      state.status = 'Loading';
    },
    [getGreeting.rejected]: (state) => {
      state.status = 'Failed';
    },
    [getGreeting.fulfilled]: (state, action) => {
      state.status = 'Success'
      state.message = action.payload.message;
    },
  }
});

export default greetingSlice.reducer;