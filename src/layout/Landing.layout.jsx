import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { SideBar } from "./components";
import Logo from "./components/SideBar/Logo.components";
import NewSidebar from "./components/NewSidebar/NewSidebar.component";
// import { GetMFAUri } from "store/Actions/AuthActions";
import { useDispatch } from "react-redux";
import { setAuthToken } from "store/Slices/authSlice";
import { Card } from "antd";
// import { useSidebarData } from "./components/SideBar/data";
import "../pages/Landing/Home/LandHome.styles.scss";
import { Button, Col, Container, Row } from "react-bootstrap";

export function LandingLayout({ children, hide }) {
  // const [activeSub, setActiveSub] = useState("");
  // const [activeInnerSub, setActiveInnerSub] = useState("");
  // const [activeDeepInnerSub, setActiveDeepInnerSub] = useState("");
  // const { user, isLoggedIn } = useSelector((state) => state.auth);
  // const { departments } = useSelector((state) => state?.departments);
  // const { allTickets } = useSelector((state) => state?.tickets);
  // const { pathname } = useLocation();
  const dispatch = useDispatch();

  let t = sessionStorage.getItem("token");
  t && dispatch(setAuthToken(t));

  const lessThanDesktop = useMediaQuery({
    query: "(max-width: 900px)",
  });

  // const sidebarData = useSidebarData();

  // const sidebarLinksLength = sidebarData?.length;

  const [hideSide, setHideSide] = useState(!!lessThanDesktop);
  const [hideNoti, setHideNoti] = useState(false);

  // useEffect(() => {
  //     const activeLink = sidebarData.filter((sideItem) => {
  //         const { name, path } = sideItem;
  //         if (name === "Dashboard") {
  //             return path === pathname;
  //         } else {
  //             return pathname.includes(path);
  //         }
  //     });

  //     setActive(activeLink[0]);

  //     // Set Sublink
  //     if (activeLink?.length && activeLink[0]?.subLinks?.length) {
  //         const activeSubLink = activeLink[0].subLinks.filter((subItem) => {
  //             const { path } = subItem;
  //             return pathname.includes(path);
  //         });
  //         setActiveSub(activeSubLink[0]);

  //         if (activeSubLink?.length && activeSubLink[0]?.subLinks?.length) {
  //             const activeInnerSubLink = activeSubLink[0]?.subLinks?.filter(
  //                 ({ path }) => {
  //                     const trimmedPathname = path.substring(0, path.lastIndexOf("/"));
  //                     return pathname.includes(trimmedPathname);
  //                 }
  //             );
  //             setActiveInnerSub(activeInnerSubLink[0]);
  //             // Set Deep Inner Sub Link
  //             if (
  //                 activeInnerSubLink?.length &&
  //                 activeInnerSubLink[0]?.subLinks?.length
  //             ) {
  //                 const activeDeepInnerSubLink =
  //                     activeInnerSubLink[0]?.subLinks?.filter(({ path }) => {
  //                         const trimmedPathname = path.substring(0, path.lastIndexOf("/"));
  //                         return pathname.includes(trimmedPathname);
  //                     });
  //                 setActiveDeepInnerSub(activeDeepInnerSubLink[0]);
  //             } else {
  //                 setActiveDeepInnerSub("");
  //             }
  //         } else {
  //             setActiveInnerSub("");
  //         }
  //     }
  // }, [pathname, user, sidebarLinksLength]);

  // useEffect(() => {
  //     if (user) {
  //         dispatch(GetMFAUri(user.id));
  //     }
  // }, [user, dispatch]);

  const toggleSide = () => {
    setHideSide((state) => !state);
  };

  // const toggleNotification = (f, page) => {
  //     setHideNoti(f);
  // };

  return (
    <div style={{ backgroundColor: "#948285" }}>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <img src="/img/wowhostel.png" />
          </Col>
          <Col xs lg="2" className="py-2">
            <Button
              type="ghost"
              className="cancelButton mt-2 hover:#F08EDB text-white rounded-md hover:bg-pink-600/[.8] ease-in duration-200"
              style={{ border: "none" }}
            >
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>

      <div>{children}</div>
    </div>
  );
}
