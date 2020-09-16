// LOGIN REDUCER
import {createSlice} from '@reduxjs/toolkit';

export const authenSlice = createSlice({
    name:'authen',
    initialState: {
        loggedIn:false,
        userId:'',
    },
    reducers: {
        login: (state,action) => {
            state.loggedIn = true;
            // state.push(action.payload);
            console.log(state);
        }
    }
});

export const {login} = authenSlice.actions;

export default authenSlice.reducer;