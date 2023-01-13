import { useContext } from "react";
import { GameContext} from "../contexts/GameProvider/index.js";

export const useGame = () => {
    return useContext(GameContext)
}