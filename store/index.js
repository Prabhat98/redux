import {createSlice, configureStore} from "@reduxjs/toolkit";
import {createStore} from "redux";

const initialAuthenticationState = {isAuthenticated:false};
const authenticationSlice = createSlice({
    name:"authentication",
    initialState:initialAuthenticationState,
    reducers:{
        logIn(state){
            state.isAuthenticated = true;
        }
        logOut(state){
            state.isAuthenticated = false;
        },
    },
});

const authReducer = (state = initialAuthenticationState, action) => {
    if(action.type === "logIn"){
        return {
            isAuthenticated : true,
        }
    }
    if(action.type === "logOut"){
        return {
            isAuthenticated : false,
        }
    }
    return state;
};

const store = createStore(authReducer);

const store = configureStore({
    reducer:{
        authentication:authenticationSlice.reducer,
    }
})

export const authActions = authenticationSlice.actions;
export default store;