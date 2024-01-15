import {createContext} from 'react';

const PlayerContext = createContext(null);

export const CartProvider = (props)=>{
    return <PlayerContext.Provider>{props.children} </PlayerContext.Provider>
}


