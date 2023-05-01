import React, { useState, useEffect } from "react";
import { DashboardLayout } from "layout";
import Section from "components/Section/Section.component";
import { Table } from "components/Table/Table.component";
import { Button } from "antd";
import { getAllHostellers } from "store/Actions/hostellers";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { AddIncome } from "./AddIncome";


const IncomePage = () => {

    const [showHostelModal, setShowHostelModal] = useState(false);
    const dispatch = useDispatch();
    const { t } = useTranslation("/TitleModal/ns");

    const tableData = [];
    for (let i = 0; i < 20; i++) {
        tableData.push({
            key: i,
            id: `1391e37e-bcfc`,
            category: `Single Sharing`,
            status: `1`,
            location: 'Pallavaram',
            roomType: 'Ac/Non-Ac',
            lastEdited: `07-03-23`,
            dateCreated: `07-03-23`,
        });
    }

    const columns = [
        {
            title: ("ID"),
            dataIndex: "id",
            key: "id",
        },
        {
            title: ("Category"),
            dataIndex: "category",
            key: "category",
            render: (category, record) => {
                return (
                    <div className="flex items-center gap-[12px]">
                        <p className="text-white">{category ? category : "N/A"}</p>
                    </div>
                )
            },
        },

        {
            title: "Status",
            dataIndex: "orderstatus",
            key: "orderstatus",
            render: (orderstatus) => {
                let color = "";
                let text = "";
                switch (orderstatus) {
                    case 0:
                        color = "bg-[#392F28] text-[#FFA800]";
                        text = "DRAFT";
                        break;
                    case 1:
                        color = "bg-[#392F28] text-[#FFA800]";
                        text = "PENDING";
                        break;
                    case 2:
                        color = "bg-[#1C3238] text-[#0BB783]";
                        text = "PAID";
                        break;
                    case 3:
                        color = "bg-[#1C3238] text-[#0BB783]";
                        text = "PROCESSING";
                        break;
                    case 4:
                        color = "bg-[#1C3238] text-[#0BB783]";
                        text = "COMPLETED";
                        break;
                    case 5:
                        color = "bg-[#1C3238] text-[#0BB783]";
                        text = "ACCEPTED";
                        break;
                    case 6:
                        color = "bg-[#3A2434] text-[#F64E60]";
                        text = "CANCELLED";
                        break;
                    default:
                        color = "";
                        text = "UNKNOWN";
                }

                return (
                    <div
                        className={`${color} px-[8px] py-[4px] w-[fit-content] rounded-[4px]`}
                    >
                        {text}
                    </div>
                );
            },
        },
        {
            title: ("Location"),
            dataIndex: "location",
            key: "location",
        },
        {
            title: ("Roomtype"),
            dataIndex: "roomType",
            key: "roomType",
        },
        {
            title: ("Date Created"),
            dataIndex: "dateCreated",
            key: "dateCreated",
            // sorter: (a, b) => (moment(a?.dateCreated) < moment(b?.dateCreated) ? -1 : 1),
            // render: (text, record) => record?.createdOn !== "N/A" ? moment(record?.createdOn).format('MMMM Do, YYYY') : "N/A",
        },
        {
            title: ("Last Edited"),
            dataIndex: "lastEdited",
            key: "lastEdited",
            // sorter: (a, b) => (moment(a?.createdOn) < moment(b?.createdOn) ? -1 : 1),
            // render: (text, record) => record?.createdOn !== "N/A" ? moment(record?.createdOn).format('MMMM Do, YYYY') : "N/A",
        },
    ];

    useEffect(() => {
        (async () => {
            // await dispatch(getAllHostellers());
            // await dispatch(getApiKey());
        })();
    }, []);
    return (
        <DashboardLayout>
            <div className="bg-[#08090A]  p-5 text-white">
                <AddIncome
                    show={showHostelModal}
                    setShow={setShowHostelModal}
                />
                <Section.PageHeading>
                   <div className="ml-5 py-8 Headingtext">Income</div>
                </Section.PageHeading>

                {/* Sub heading */}
                <div className="p-[40px] pb-[24px] mx-[20px] my-[15px]  bg-[#000000] rounded-[8px]">
                    <Table
                        columns={columns}
                        data={tableData}
                        fieldToFilter="name"
                        btnData={{
                            text: (t("Add Income")),
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
export default IncomePage;