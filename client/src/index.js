import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UserStore from "./store/UserStore";
import GoodStore from "./store/GoodStore";
import GameStore from "./store/GameStore";

export const Context = createContext(null);
console.log(process.env.REACT);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Context.Provider
        value={{
            user: new UserStore(),
            good: new GoodStore(),
            game: new GameStore(),
        }}
    >
        <App />
    </Context.Provider>
);
