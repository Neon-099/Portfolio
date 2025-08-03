import {createContext, useContext, useReducer,  } from 'react';


const ThemeContext = createContext(); //creates portal or global state store

const initialState = {theme: 'light'}; //define it

//THEME SWITCH LOGIC
const themeReducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE_THEME' :
            return {theme: state.theme === 'light' ? 'dark' : 'light'};
        default:
            return state;    
    }
}


    //TO WRAPS THE ENTIRE APP
export const ThemeProvider = ( {children} ) => {

    return (
    <ThemeContext.Provider value={useReducer(themeReducer, initialState)}>
        {children}
    </ThemeContext.Provider>
    )
}
    
//DEFINE THE HOOKS: to use the theme context anywhere
export const useTheme = () => {
    return useContext(ThemeContext)
} 
    