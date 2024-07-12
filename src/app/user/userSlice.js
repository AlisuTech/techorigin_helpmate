import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosInstance from './axiosInstance';
const ROOT_API = `http://localhost:5024`

export const signupUser = createAsyncThunk(
  'user/signup',
  // async (userData, { rejectWithValue }) => {
  //   try {
  //     const response = await axios.post(`${ROOT_API}/users`, userData);
  //     return response.data;
  //   } catch (error) {
  //     return rejectWithValue(error.response.data);
  //   }
  // }
 
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/users', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  // async(userCredentials)=>{
  //   const res = await axios.post(`${ROOT_API}/auth/login`, userCredentials);
  //   console.log("inside post")
  //   const data = res.data
  //   // const response = await res.data.data;
  //   localStorage.setItem('user', JSON.stringify(data));
  //   return data;

  // }

  async(userCredentials)=>{
    const res = await axiosInstance.post(`/auth/login`, userCredentials);
    console.log("inside post")
    const data = res.data
    // const response = await res.data.data;
    localStorage.setItem('user', JSON.stringify(data));
    // localStorage.removeItem('user');
    return data;

  }
);

export const logoutUser = createAsyncThunk(
  '/',
  async (_, { rejectWithValue }) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user && user.refreshToken) {
        await axiosInstance.post('/auth/logout', { token: user.refreshToken });
        console.log("token removed")
        localStorage.removeItem('user');
        return true;
      } else {
        return rejectWithValue('No user logged in');
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
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
    error2: false,
  },
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = false;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.error2 = action.payload;
    },
    setUser: (state, action) => {
      console.log('use is: ' +state.user)
      state.user = action.payload;
      state.userInfo = action.payload;
      state.isUserLogged = true;
      state.loading = false;
      state.error = null;
      state.error2 = false;
      state.status = 'idle';
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
        state.error2 = false;
      })
      .addCase(loginUser.pending, (state)=>{
        state.loading =true;
        state.user = null;
        state.error = null;
        state.error2 = false;
      })
      .addCase(loginUser.fulfilled,(state,action)=>{
        state.loading = false;
        state.user = action.payload;
        state.error = null;
        state.error2 = false;

      })
      .addCase(loginUser.rejected,(state,action)=>{
        state.loading = false;
        state.user = null;
        state.isUserLogged = false;
        console.log(action.error.message);
        if(action.error.message === 'Request failed with status code 401'){
          state.error = 'Access denied! invalid Credentials';
          state.error2 = false
        }
        else{
          state.error = action.error.message;
          state.error2 = false;
        }
        
      })
  },

});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  activateUserLoggedIn,
  deactivateUserLoggedIn,
  setUser,
  clearUser 
} = userSlice.actions;
export default userSlice.reducer;
