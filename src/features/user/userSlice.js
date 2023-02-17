import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: '',
    img: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,

    reducers: {
        setUserLogin: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.img = action.payload.img;
        },
        setSignOut: (state) => {
            state.name = null;
            state.email = null;
            state.img = null;
        }
    }
})

export const { setUserLogin, setSignOut } = userSlice.actions;
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserImg = (state) => state.user.img;
export default userSlice.reducer;