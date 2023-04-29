import { lazy } from "react";

const pages = [
    {
        path:"/sign-in",
        Component: lazy(() =>
            import("./sign-in/SignIn.page")
        ),
    },
    {
        path:"/sign-up",
        Component: lazy(() =>
            import("./sign-up/SignUp.page")
        ),
    },
];

export const Error404 = lazy(() => import("./error-404/Error404.page"));

export const dashboardPages = [
    {
        path: "/",
        Component: lazy(() => import("./Dashboard/Home/Home.page")),
    },
    {
        path: "/rooms",
        Component: lazy(() => import("./Dashboard/Rooms/Rooms.page")),
    },
    {
        path: "/income",
        Component: lazy(() => import("./Dashboard/Income/Income.page")),
    },
    {
        path: "/expenses",
        Component: lazy(() => import("./Dashboard/Expenses/Expenses.page")),
    },
    {
        path: "/hostellers",
        Component: lazy(() => import("./Dashboard/Hostellers/Hostellers")),
    },
    {
        path: "/settings",
        Component: lazy(() => import("./Dashboard/Settings/Settings.page")),
    },
];
