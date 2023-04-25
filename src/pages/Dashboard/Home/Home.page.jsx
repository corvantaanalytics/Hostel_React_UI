import React, { useState, useEffect } from "react";
import { DashboardLayout } from "layout";
import Text from "components/Text/Text.component";
import Section from "components/Section/Section.component";
const Home = () => {
  

  return (
    <DashboardLayout>
      <div className="bg-[#08090A] gap-5 p-10 text-white h-full">
        <Section.PageHeading>
          <Text.PageHeading text="Dashboard" />
        </Section.PageHeading>

      
      </div>
    </DashboardLayout>
  );
};
export default Home;
