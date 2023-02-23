import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async function(_, {rejectWithValue} ){
    try{
      const response = await axios.get('https://new-backend.unistory.app/api/data')
      return response.data.items;
    }catch(error){
      return rejectWithValue(error.message)
    }
  }
)

const dataSlice = createSlice({
  name: 'data',
  initialState:{
    list: [],
    status: null,
    error: null,
  },
  reducers:{
    addUserData(state, action){
      state.list.unshift({
        username: action.payload.name,
        email: action.payload.email,
        address: action.payload.address
      })
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.status = 'loading';
    })
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.error = null;
      state.list = action.payload;
    })
    builder.addCase(fetchData.rejected, (state, action) => {
      state.status = 'Error';
      state.error = action.payload;
    })
  }
})

export const { addUserData } = dataSlice.actions;
export default dataSlice.reducer;