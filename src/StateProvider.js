import {createContext , useContext, useReducer } from "react"
// prepares data layer 
export const StateContext=createContext();
// 
export const StateProvider=({reducer , initialState ,children}) => (
 <StateContext.Provider value={useReducer(reducer,initialState)}> 
 {children} 
 </StateContext.Provider>); 
//  pulls from data layer
export const useStateValue = () => useContext(StateContext);