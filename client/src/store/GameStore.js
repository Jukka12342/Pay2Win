import {makeAutoObservable} from "mobx";

export default class GameStore {
    constructor() {
        this._games = [
            {id: 1, name: "World of Warcraft", img: "https://i.ytimg.com/vi/37GXErSLhgc/maxresdefault.jpg"},
            {id: 2, name: "Destiny 2", img: "https://i.ytimg.com/vi/37GXErSLhgc/maxresdefault.jpg"},
            {id: 3, name: "Diablo IV", img: "https://i.ytimg.com/vi/37GXErSLhgc/maxresdefault.jpg"},
            {id: 4, name: "GTA V", img: "https://i.ytimg.com/vi/37GXErSLhgc/maxresdefault.jpg"}
        ];
        makeAutoObservable(this);
    }

    setGame(games) {
        this._games = games;
    }

    get games() {
        return this._games;
    }

    get id() {
        return this._games.id;
    }
}
