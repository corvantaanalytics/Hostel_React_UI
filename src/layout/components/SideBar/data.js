import { useDispatch } from "react-redux";
import {
    Dashboard,
    Billing,
} from "../../../icons";
import { Speedometer, Notepad2, Global, Card, Setting5, Logout } from "iconsax-react";
import { logout } from "store/Slices/authSlice";
import { useNavigate } from "react-router-dom";


export const useSidebarData = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // Side Bar Data
    const sidebarData = [
        {
            name: "Models",
            path: "/dashboard",
            show: true,
            icon: (fill) => <Speedometer fill={fill} />
        },
        {
            name: "Datasets",
            path: "/dashboard/rooms",
            show: true,
            icon: (fill) => <Notepad2 fill={fill} />
        },
        {
            name: "Connected Websites",
            path: "/dashboard/income",
            show: true,
            icon: (fill) => <Global fill={fill} />
        },
        {
            name: "Manage Subscription",
            path: "/dashboard/manage-subscription",
            show: true,
            icon: (fill) => <Card fill={fill} />
        },
        {
            name: "Settings",
            path: "/dashboard/settings",
            show: true,
            icon: (fill) => <Setting5 fill={fill} />
        },
        {
            name: "Sign Out",
            onclick: async () => {
                dispatch(logout());
                navigate('/signin');
                window.location.reload(true);
            },
            show: true,
            icon: (fill) => <Logout fill={fill}
            />
        },
    ];
    return sidebarData;
};
