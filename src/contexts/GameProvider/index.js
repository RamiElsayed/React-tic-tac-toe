import {createContext, useReducer, useState} from "react";

export const GameContext = createContext();
const lines =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const reducer = (state, action) => {
        for(let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (state[a] && state[a] === state[b] && state[a] === state[c]){
                return [state[a], state[b], state[c]];
            }
        }
        return null;
}

export const GameProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer)
}