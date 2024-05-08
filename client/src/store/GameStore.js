import {makeAutoObservable} from "mobx";

export default class GameStore {
    constructor() {
        this._games = [];
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
