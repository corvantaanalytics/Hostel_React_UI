import React, { useState, useEffect } from "react";
import { DashboardLayout } from "layout";
import Section from "components/Section/Section.component";
import { Table } from "components/Table/Table.component";
import { Button } from "antd";
import { getAllHostellers } from "store/Actions/hostellers";
import { useDispatch, useSelector } from "react-redux";
import { AddHosteller } from "./AddHosteller";
import { useTranslation } from "react-i18next";
import moment from "moment";

const Hostellers = () => {
    const {hostellers} = useSelector((state)=>state?.hostellers)
    const [showHostelModal, setShowHostelModal] = useState(false);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const { t } = useTranslation("/TitleModal/ns");
   
    useEffect(() => {
        if (hostellers) {
          let dataArr = [];
          hostellers.forEach((key, index) => {
            dataArr.push({
              id: key?.id,
              firstName: key?.firstName,
              addressforcommunication: key?.addressforcommunication,
              parentname: key?.parentname,
              roomdetails: key?.roomdetails,
              rentdetails: key?.rentdetails,
              lastEdidateofjoiningted: key?.dateofjoining,
            });
          });
          setData(dataArr);
        }
      }, [hostellers]);
    const columns = [
        {
            title: ("ID"),
            dataIndex: "id",
            key: "id",
        },
        {
            title: ("Name"),
            dataIndex: "firstName",
            key: "firstName",
            render: (firstName, record) => {
                return (
                    <div className="flex items-center gap-[12px]">
                        <p className="text-white">{firstName ? firstName : "N/A"}</p>
                    </div>
                )
            },
        },
        {
            title: ("Address"),
            dataIndex: "addressforcommunication",
            key: "addressforcommunication",
        },
        {
            title: ("Parent Name"),
            dataIndex: "parentname",
            key: "parentname",
        },
        {
            title: ("Room Details"),
            dataIndex: "roomdetails",
            key: "roomdetails",
        },
        {
            title: ("Rent Details"),
            dataIndex: "rentdetails",
            key: "rentdetails",
        },
        {
            title: ("Date Of Joining"),
            dataIndex: "dateofjoining",
            key: "dateofjoining",
            sorter: (a, b) => (moment(a?.dateofjoining) < moment(b?.dateofjoining) ? -1 : 1),
            render: (text, record) => record?.dateofjoining !== "N/A" ? moment(record?.dateofjoining).format('MMMM Do, YYYY') : "N/A",
        },
    ];

    useEffect(() => {
        (async () => {
            await dispatch(getAllHostellers());
        })();
    }, []);
    return (
        <DashboardLayout>
            <div className="bg-[#08090A]  p-5 text-white">
                <AddHosteller
                    show={showHostelModal}
                    setShow={setShowHostelModal}
                />
                <Section.PageHeading>
                    <div className="ml-5 py-8 Headingtext">Hostellers</div>

                </Section.PageHeading>

                {/* Sub heading */}
                <div className="p-[40px] pb-[24px] mx-[20px] my-[15px]  bg-[#000000] rounded-[8px]">
                    <Table
                        columns={columns}
                        data={data}
                        fieldToFilter="name"
                        btnData={{
                            text: (t("Add Hosteller")),
                            onClick: () => setShowHostelModal(true),
                        }}
                        permissions={true}
                        editAction={(record) => (
                            <Button onClick={() => {
                                // navigate(
                                //     `/admin/dashboard/billing/orders/${myOrders ? "your-orders" : "all-orders"}/list/edit/${record?.key}`
                                // );
                            }}
                            >
                                View
                            </Button>
                        )}
                    />
                </div>
            </div>

        </DashboardLayout>
    );
};
export default Hostellers;