import React, { useState, useCallback, useEffect } from "react";

import {
  Speedometer,
  Notepad2,
  Global,
  Card,
  Setting5,
  ArrowSwapHorizontal,
  Logout,
  MoneyRecive,
  MoneySend,
  Home,
  Location
} from "iconsax-react";
import { useLocation } from "react-router-dom";
import { API } from "lib/api";
import { toast } from "react-toastify";

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addEventListener("change", updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeEventListener("change", updateTarget);
  }, []);

  return targetReached;
};

const NavLink = ({ Icon, link, title, notification }) => {
  const { pathname } = useLocation();

  let active;
  if (pathname === link) {
    active = true;
  }

  return (
    <a className="w-full hover:text-white" href={link}>
      <div
        className={`${active
          ? "border-s-[3px] border-[#F08EDB] bg-gradient-to-r from-[#F08EDB]/[0.24] from-10% to-[#0C0D0F] text-[#F08EDB] "
          : ""
          } flex py-4 pl-4 tab hover:border-s-[3px] hover:border-[#F08EDB] justify-between  hover:bg-gradient-to-r hover:from-[#f900b9]/[0.24] hover:from-10% hover:to-[#0C0D0F]`}
      >
        <div className="flex items-center">
          <Icon fill={"#fff"} />
          <div className="ml-2 text-sm">{title}</div>
        </div>
        {notification && (
          <div className="mr-4 text-xs bg-[#023e8a] text-white rounded-2xl px-2 py-1">
            {notification}
          </div>
        )}
      </div>
    </a>
  );
};

export default function NewSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [modelCount, setModelCount] = useState();

  const isBreakpoint = useMediaQuery(768);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if (isBreakpoint) {
      setIsCollapsed(true);
    }
  }, [isBreakpoint]);

  const fetchModel = async () => {
    try {
      let res = await API.getModels(1);
      console.log(res);
      setModelCount(res.length);
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchModel();
  }, []);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="absolute p-3 text-white rounded-full top-3 left-10"
      // style={{ border: "1px solid #16191F" }}
      >
        <ArrowSwapHorizontal fill={"#fff"} />
      </button>
      <div
        className={`${isCollapsed ? "hidden md:w-16 w-16" : "w-full md:w-1/5 z-50"
          } h-screen bg-[#0C0D0F] overflow-auto fixed text-white transition-all`}
      >
        <div className="flex justify-between p-4 mb-2">
          {!isCollapsed && (
            <div className="p-2 px-3">
              <p className="logoname-menu">
                WOw<span style={{ color: "#F08EDB" }}>Hostel</span>
              </p>
            </div>
          )}
          <button onClick={toggleSidebar} className="">
            <ArrowSwapHorizontal fill={"#fff"} />
          </button>
        </div>

        {!isCollapsed && (
          <div className="tabs">
            <NavLink
              Icon={Speedometer}
              link="/dashboard"
              title="Dashboard"
              notification={modelCount}
            />
            <NavLink
              Icon={Home}
              link="/dashboard/rooms"
              title="Rooms"
            // notification={23}
            />
            <NavLink
              Icon={MoneyRecive}
              link="/dashboard/income"
              title="Income"
            />
            <NavLink
              Icon={MoneySend}
              link="/dashboard/expenses"
              title="Expenses"
            />
            <NavLink
              Icon={MoneySend}
              link="/dashboard/hostellers"
              title="Hostellers"
            />
            <NavLink
              Icon={Location}
              link="/dashboard/location"
              title="Location"
            />
            <NavLink
              Icon={Location}
              link="/dashboard/serviceApartments"
              title="Service Apartments"
            />
            <NavLink
              Icon={MoneySend}
              link="/dashboard/report"
              title="Reports"
            />
            <NavLink
              Icon={Setting5}
              link="/dashboard/settings"
              title="Settings"
            />
            <NavLink
              Icon={Logout}
              link="/signin"
              title="Sign Out" />
          </div>
        )}


      </div>

      <div
        className={`${isCollapsed ? "md:w-16 w-16 hidden" : "w-2/3 md:w-1/5"
          } h-screen`}
      ></div>
    </>
  );
}
