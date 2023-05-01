import React from "react";
import { DashboardLayout } from "layout";
import Text from "components/Text/Text.component";
import Section from "components/Section/Section.component";


const Home = () => {

  return (
    <DashboardLayout>
      <div className="bg-[#08090A] gap-5 p-10 text-white h-full">
        <h2 className="content-header p-4 pb-2 text-white ">Dashboard</h2>
      </div>
    </DashboardLayout>
  );
};
export default Home;
