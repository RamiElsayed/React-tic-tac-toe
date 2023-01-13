import { createContext, useReducer} from "react";

export const GameContext = createContext();

const reducer = (state, action) => {

}

export const GameProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer)
}