import { makeAutoObservable } from "mobx";

export default class GoodStore {
    constructor() {
        this._types = [
            { id: 1, name: "Аккаунты" },
            { id: 2, name: "Услуги" },
        ];

        this._goods = [
            {
                id: 1,
                name: "Какой-то акк",
                price: 5000,
                img: "https://i.ytimg.com/vi/37GXErSLhgc/maxresdefault.jpg",
                gameId: 3,
            },
            {
                id: 2,
                name: "АККАУНТ РАДМИР РП",
                price: 5000,
                img: "https://i.ytimg.com/vi/37GXErSLhgc/maxresdefault.jpg",
                gameId: 1,
            },
            {
                id: 3,
                name: "аккаунтик",
                price: 5000,
                img: "https://i.ytimg.com/vi/37GXErSLhgc/maxresdefault.jpg",
                gameId: 2,
            },
            {
                id: 4,
                name: "это не он",
                price: 5000,
                img: "https://i.ytimg.com/vi/37GXErSLhgc/maxresdefault.jpg",
                gameId: 1,
            },
        ];
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }

    setGood(good) {
        this._good = good;
    }

    get types() {
        return this._types;
    }

    get goods() {
        return this._goods;
    }
}
