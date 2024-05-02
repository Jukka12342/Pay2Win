import {makeAutoObservable} from "mobx";

export default class GoodStore {
    constructor() {
        this._types = [
            {id: 1, name: "Аккаунты"},
            {id: 2, name: "Услуги"}
        ]

        this._goods = [
            {id: 1, name: "АККАУНТ РАДМИР РП", price: 5000, img: "https://i.ytimg.com/vi/37GXErSLhgc/maxresdefault.jpg"},
            {id: 2, name: "АККАУНТ РАДМИР РП", price: 5000, img: "https://i.ytimg.com/vi/37GXErSLhgc/maxresdefault.jpg"},
            {id: 3, name: "АККАУНТ РАДМИР РП", price: 5000, img: "https://i.ytimg.com/vi/37GXErSLhgc/maxresdefault.jpg"},
            {id: 4, name: "АККАУНТ РАДМИР РП", price: 5000, img: "https://i.ytimg.com/vi/37GXErSLhgc/maxresdefault.jpg"}
        ]
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