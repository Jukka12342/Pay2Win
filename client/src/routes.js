import {
    ADMIN_ROUTE,
    GAME_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
    WISH_ROUTE,
} from "./utils/consts";
import Admin from "./pages/Admin";
import Wish from "./pages/Wish";
import Shop from "./pages/Shop";
import Game from "./pages/Game";
import Auth from "./pages/Auth";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },
    {
        path: WISH_ROUTE,
        Component: Wish,
    },
];

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop,
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth,
    },
    {
        path: GAME_ROUTE + "/:id",
        Component: Game,
    },
];
