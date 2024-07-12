// import axios from 'axios';
// import { loginUser, refreshToken } from './userSlice'; // Adjust the import path

// const ROOT_API = `http://localhost:5024`;

// const axiosInstance = axios.create({
//   baseURL: ROOT_API,
// });

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (user && user.accessToken) {
//       config.headers['Authorization'] = `Bearer ${user.accessToken}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const user = JSON.parse(localStorage.getItem('user'));

//       if (user && user.refreshToken) {
//         try {
//           const response = await axios.post(`${ROOT_API}/auth/refresh`, {
//             token: user.refreshToken,
//           });
//           const newAccessToken = response.data.accessToken;
//           user.accessToken = newAccessToken;
//           localStorage.setItem('user', JSON.stringify(user));
//           axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
//           return axiosInstance(originalRequest);
//         } catch (refreshError) {
//           // Remove user from local storage if refresh token is invalid or expired
//           localStorage.removeItem('user');
//           return Promise.reject(refreshError);
//         }
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;

import axios from 'axios';

const ROOT_API = `http://localhost:5024`;

const axiosInstance = axios.create({
  baseURL: ROOT_API,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
      console.log('Adding Authorization header with access token:', user.accessToken);
      config.headers['Authorization'] = `Bearer ${user.accessToken}`;
    }
    console.log('Request Config:', config);
    return config;
  },
  (error) => {
    console.log('Request Error:', error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response received:', response);
    return response;
  },
  async (error) => {
    console.log('Response Error:', error);
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const user = JSON.parse(localStorage.getItem('user'));
      
      if (user && user.refreshToken) {
        console.log('Attempting to refresh token...');
        try {
          const response = await axios.post(`${ROOT_API}/auth/refresh`, {
            token: user.refreshToken,
          });
          const newAccessToken = response.data.accessToken;
          console.log('New access token received:', newAccessToken);
          user.accessToken = newAccessToken;
          localStorage.setItem('user', JSON.stringify(user));
          axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          console.log('Token refresh failed:', refreshError);
          // Remove user from local storage if refresh token is invalid or expired
          localStorage.removeItem('user');
          return Promise.reject(refreshError);
        }
      } else {
        console.log('No refresh token found, removing user from local storage');
        localStorage.removeItem('user');
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
