import React from "react";
import { DashboardLayout } from "layout";
import Text from "components/Text/Text.component";
import Section from "components/Section/Section.component";
import './Home.styles.scss';
import { Card, Row, Col, Divider } from 'antd';
import { User, SmsTracking, Lock1, Scan, SecuritySafe } from 'iconsax-react';
import { useNavigate } from "react-router-dom";
import { LandingLayout } from "layout/Landing.layout";


const LandHome = () => {
  const navigate = useNavigate();
  const navigateToSignin = ()  => {
    navigate('/landing/sign-in');
  }
 
  return (
 
    <LandingLayout>
      <button
          type="ghost"
          className="mt-4 p-2 cancelButton hover:#F08EDB text-white w-full mb-2 rounded-md h-14 hover:bg-pink-600/[.8] ease-in duration-200"
          onClick={navigateToSignin}
        >
          Create an Account
        </button>
    </LandingLayout>
      

   
  );
};
export default LandHome;
