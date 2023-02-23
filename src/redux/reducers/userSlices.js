import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const { ethereum } = window;

export const metaConnect = createAsyncThunk(
  '/metaConnect',
  async function(_, { rejectWithValue }){
    try{
      await ethereum.request({ method:'eth_requestAccounts'})
        const accounts = await ethereum.request({method: 'eth_accounts'})
        // localStorage.setItem('address', JSON.stringify(accounts))
        return accounts[0];
    }catch(error){
      return rejectWithValue(error.message)
    }
  }
)

const userData = createSlice({
  name: 'user',
  initialState:{
    user:{},
    status: null
  },
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(metaConnect.pending, state => {
      state.status = 'loading';
    })
    builder.addCase(metaConnect.fulfilled, (state, action) => {
      state.status = 'loaded';
      state.user = {address: action.payload};
    })
    builder.addCase(metaConnect.rejected, (state, action) => {
      state.status = 'Error';
      console.log(action.payload)
    })
  }
})

export default userData.reducer;