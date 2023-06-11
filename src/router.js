import Chat from "./components/Chat";
import Login from "./components/Login";
import { ChAT_ROUTE, LOGIN_ROUTE } from "./components/utils/const";

export const publicRoutes = [
    {
        path:LOGIN_ROUTE,
        Component:Login
    }
]

export const privateRoutes = [
    {
        path:ChAT_ROUTE,
        Component:Chat
    }
]