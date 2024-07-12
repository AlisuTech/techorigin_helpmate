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
    const request = await axios.post(`${ROOT_API}/user/login`, userCredentials);
    const response = await request.data.data;
    localStorage.setItem('user', JSON.stringify(response));
    return response;

  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    user: null,
    userInfo: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    isUserLogged: false,
    status: 'idle',
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      console.log('use is: ' +state.user)
      state.user = action.payload;
      state.userInfo = action.payload;
      state.isUserLogged = true;
    },
    clearUser: (state,action) => {
      state.userInfo = null;
      state.user = action.payload;
      state.isUserLogged = false;
    },
    activateUserLoggedIn(state, action) {
      state.isUserLogged = action.payload;
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

export const { activateUserLoggedIn, deactivateUserLoggedIn, setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
