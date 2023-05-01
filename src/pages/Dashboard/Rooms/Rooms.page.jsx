import React, { useState, useEffect } from "react";
import { DashboardLayout } from "layout";
import Section from "components/Section/Section.component";
import { Table } from "components/Table/Table.component";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { AddRooms } from "./AddRooms";
import { getAllRooms } from "store/Actions/rooms";


const RoomsPage = () => {

    const [showHostelModal, setShowHostelModal] = useState(false);
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const { rooms } = useSelector((state) => state?.rooms)
    const { t } = useTranslation("/TitleModal/ns");

    useEffect(() => {
        if (rooms) {
            let dataArr = [];
            rooms.forEach((key, index) => {
                dataArr.push({
                    id: key?.id,
                    address: key?.address,
                    roomTypes: key?.roomTypes,
                    rent: key?.rent,
                });
            });
            setData(dataArr);
        }
    }, [rooms]);

    const columns = [
        {
            title: ("ID"),
            dataIndex: "id",
            key: "id",
        },
        {
            title: ("Address"),
            dataIndex: "address",
            key: "address",
        },
        {
            title: ("Roomtype"),
            dataIndex: "roomTypes",
            key: "roomTypes",
        },
        {
            title: ("Rent"),
            dataIndex: "rent",
            key: "rent",
        },


    ];

    useEffect(() => {
        (async () => {
            await dispatch(getAllRooms());
        })();
    }, []);
    return (
        <DashboardLayout>
            <div className="bg-[#08090A]  p-5 text-white">
                <AddRooms
                    show={showHostelModal}
                    setShow={setShowHostelModal}
                />
                <Section.PageHeading>
                    <div className="ml-5 py-8 Headingtext">Rooms</div>

                </Section.PageHeading>

                {/* Sub heading */}
                <div className="p-[40px] pb-[24px] mx-[20px] my-[15px]  bg-[#000000] rounded-[8px]">
                    <Table
                        columns={columns}
                        data={data}
                        fieldToFilter="name"
                        btnData={{
                            text: (t("Add Room")),
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
export default RoomsPage;