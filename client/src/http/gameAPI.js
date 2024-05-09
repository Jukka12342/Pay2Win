import { $authHost, $host } from "./index";

export const createGame = async (name, img) => {
    const { data } = await $authHost.post("api/game", { name, img });
    return data;
};

export const fetchGame = async () => {
    const { data } = await $host.get("api/game");
    return data;
};

export const fetchOneGame = async (id) => {
    const { data } = await $host.get("api/game/" + id);
    return data;
};
