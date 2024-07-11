import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const ROOT_API = `http://localhost:5024`

export const signupUser = createAsyncThunk(
  'user/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${ROOT_API}/users`, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async(userCredentials)=>{
    const res = await axios.post(`${ROOT_API}/auth/login`, userCredentials);
    console.log("inside post")
    const data = res.data
    // const response = await res.data.data;
    localStorage.setItem('user', JSON.stringify(data));
    return data;

  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    user: null,
    isUserLogged: false,
    status: 'idle',
    error: null,
  },
  reducers: {
    activateUserLoggedIn(state, action) {
      state.isUserLogged = action.payload;
    },
    deactivateUserLoggedIn(state) {
      state.isUserLogged = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state)=>{
        state.loading =true;
        state.user = null;
        state.error =null;
      })
      .addCase(loginUser.fulfilled,(state,action)=>{
        state.loading = false;
        state.user = action.payload;
        state.error = null;

      })
      .addCase(loginUser.rejected,(state,action)=>{
        state.loading = false;
        state.user = null;
        console.log(action.error.message);
        if(action.error.message === 'Request failed with status code 401'){
          state.error = 'Access denied! invalid Credentials';
        }
        else{
          state.error = action.error.message;
        }
        
      })
  },

});

export const { activateUserLoggedIn, deactivateUserLoggedIn } = userSlice.actions;
export default userSlice.reducer;
