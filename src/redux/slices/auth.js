import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import instance from '../../axios'

export const fetchAuth = createAsyncThunk('auth/fetchUserData', async (params) => {
    const {data} = await instance.post('/auth/login', params)
    return data
})

export const fetchRegister = createAsyncThunk('auth/fetchUserRegister', async (params) => {
    const {data} = await instance.post('/auth/register', params)
    return data
})

export const fetchUser = createAsyncThunk('auth/fetchUserMe', async () => {
    const {data} = await instance.get('/auth/me')
    return data
})
const initialState = {
    data: null,
    status: "loading",
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
        }
    },
    extraReducers:{
        [fetchAuth.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchAuth.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = 'loaded';
        },
        [fetchAuth.rejected]: (state) => {
            state.data = null;
            state.status = 'error';
        },
        [fetchUser.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchUser.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = 'loaded';
        },
        [fetchUser.rejected]: (state) => {
            state.data = null;
            state.status = 'error';
        },
        [fetchRegister.pending]: (state) => {
            state.status = 'loading';
        },
        [fetchRegister.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = 'loaded';
        },
        [fetchRegister.rejected]: (state) => {
            state.data = null;
            state.status = 'error';
        },
    }
})

export const selectIsAuth = state => Boolean(state.auth.data)
export const selectUser = state => state.auth.data

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;