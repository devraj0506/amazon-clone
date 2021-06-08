// setup data layer
// we need this to track basket

import React, {createContext, useContext, useReducer} from 'react'


// This is data layer
export const StateContext=createContext();




// Build a Provider 
export const StateProvider = ({reducer,initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)


// this is imported in components for use
export const useStateValue = ()=> useContext(StateContext)