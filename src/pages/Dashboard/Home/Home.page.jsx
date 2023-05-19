import React from "react";
import { DashboardLayout } from "layout";
import Text from "components/Text/Text.component";
import Section from "components/Section/Section.component";
import './Home.styles.scss';
import { Card, Row, Col, Divider } from 'antd';
import { User, SmsTracking, Lock1, Scan, SecuritySafe } from 'iconsax-react';
import { useNavigate } from "react-router-dom";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";


const Home = () => {

  const navigate = useNavigate();
 
  const data = [
    {
      income: 23,
      expenses:8,
      your: "Jan",
    },
    {
      income: 23,
      expenses:8,
      your: "Feb",
    },
    {
      income: 23,
      expenses:8,
      your: "Mar",
    },
    {
      income: 23,
      expenses:8,
      your: "April",
    },
    {
      income: 23,
      expenses:8,
      your: "May",
    },
    {
      income: 23,
      expenses:8,
      your: "June",
    },
    {
      income: 23,
      expenses:8,
      your: "July",
    },
    {
      income: 23,
      expenses:8,
      your: "Aug",
    },
    {
      income: 23,
      expenses:8,
      your: "Sept",
    },
    {
      income: 23,
      expenses:8,
      your: "Oct",
    },
    {
      income: 23,
      expenses:8,
      your: "Nov",
    },
    {
      income: 23,
      expenses:8,
      your: "Dec",
    },

  ];

  return (
    <DashboardLayout>
       <div className="order mt-5">
      <div className="order__header">
        <h3 className="order__header-heading">Income and Expenses</h3>
        <p className="order__header-text">Yearly Data</p>
      </div>
      <div className="order__chart p-4">
        <ResponsiveContainer width="100%" height={150}>
          <BarChart
            barSize={30}
            width={500}
            height={300}
            data={data}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis
              dataKey="your"
              // tickFormatter={(text) => moment(text)?.format("MMM-YYYY")}
              strokeDasharray="3 3"
              stroke="#323248"
              tick={{ fill: "#474761" }}
            />
            <YAxis
              width={35}
              strokeDasharray="3 3"
              stroke="#323248"
              tick={{ fill: "#474761" }}
            />
            <Bar dataKey="income" fill="#2C6975" />
            <Bar dataKey="expenses" fill="#8950FC" />
          </BarChart>
        </ResponsiveContainer>
      </div>     
    </div>
      {/* <div className="p-4 md:px-6 dashboard">
        <h2 className="content-header p-4 pb-2 text-white ">Dashboard</h2>
      </div>

      <Card className='m-5 mt-0 setting-card'>
        <Row className='p-2'>
          <Col lg={8} className="text-white py-3 px-3">
            <Row>

              <Col>
                <span className='setting-label pl-2'>Total Number of Hostellers</span>
              </Col>

            </Row>
          </Col>
          <Col lg={8} className="setting-input py-3">98</Col>
          <Col lg={8} className="text-right text-white">
            <button type="submit" className="cancelButton hover:bg-blue-700 text-white w-[100px] h-12 hover:bg-pink-600/[.8] ease-in duration-200"
              onClick={navigateToHostellers}
            >
              View
            </button>
          </Col>
        </Row>
        <Divider className='setting-divider m-0' />
        <Row className='p-2'>
          <Col lg={8} className="text-white py-3 px-3">
            <Row>

              <Col>
                <span className='setting-label pl-2'>Total Number of Rooms</span>
              </Col>
            </Row>
          </Col>
          <Col lg={8} className="setting-input py-3">289</Col>
          <Col lg={8} className="text-right text-white">
            <button type="submit" className="cancelButton hover:bg-blue-700 text-white w-[100px] h-12 hover:bg-pink-600/[.8] ease-in duration-200"
              onClick={navigateToRooms}
            >
              View
            </button>
          </Col>
        </Row>
        <Divider className='setting-divider m-0' />
        <Row className='p-2'>
          <Col lg={8} className="text-white py-3 px-3">
            <Row>

              <Col>
                <span className='setting-label pl-2'> Available Locations</span>
              </Col>
            </Row>
          </Col>
          <Col lg={8} className="setting-input py-3">18<span className='pl-5 text-[#6C757D]'></span></Col>
          <Col lg={8} className="text-right text-white">
            <button type="submit" className="cancelButton hover:bg-blue-700 text-white w-[100px] h-12 hover:bg-pink-600/[.8] ease-in duration-200"
              onClick={navigateToLocation}
            >
              View
            </button>
          </Col>
        </Row>
        <Divider className='setting-divider m-0' />
        <Divider className='setting-divider m-0' />
        <Row className='p-2'>
          <Col lg={8} className="text-white py-3 px-3">
            <Row>

              <Col>
                <span className='setting-label pl-2'>Available Service Apartments</span>
              </Col>
            </Row>
          </Col>
          <Col lg={8} className="setting-input py-3"><span type="submit" className=' text-[#6C757D]'></span>90</Col>
          <Col lg={8} className="text-right text-white">
            <button type="submit" className="cancelButton hover:bg-blue-700 text-white w-[100px] h-12 hover:bg-pink-600/[.8] ease-in duration-200"
              onClick={navigateToApartments}
            >
              View
            </button>
          </Col>
        </Row>

      </Card> */}
    </DashboardLayout>
  );
};
export default Home;
