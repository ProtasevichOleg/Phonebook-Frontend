import { createSlice } from '@reduxjs/toolkit';
import { register, loginization, logOut, refreshUser } from './authOperations';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;

  let errorMessage = 'Something went wrong. Check your data and try again.';
  if (`${action.payload}` === 'Network Error') {
    errorMessage = `${action.payload}`;
  } else if (action.payload?.includes(409)) {
    errorMessage = 'An account with the given email already exists.';
  }

  MySwal.fire({
    icon: 'error',
    title: 'Oops...',
    text: errorMessage,
  });
};

const authSlise = createSlice({
  name: 'auth',
  initialState: {
    user: { email: null, password: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
    isLoading: false,
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = false;
        state.isLoading = false;

        MySwal.fire({
          icon: 'success',
          title: 'Congratulations!',
          text: 'Your account has been successfully created! Check your email and confirm registration',
          timer: 4000,
          timerProgressBar: true,
          didOpen: toast => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });
      })
      .addCase(register.rejected, handleRejected)

      .addCase(loginization.pending, handlePending)
      .addCase(loginization.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(loginization.rejected, handleRejected)

      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, state => {
        state.user = { email: null, password: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(logOut.rejected, handleRejected)

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.user = { email: null, password: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = null;
        state.isLoading = false;
      });
  },
});

export default authSlise.reducer;
