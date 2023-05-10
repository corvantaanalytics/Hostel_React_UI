import React, { useState, useEffect } from "react";
import { DashboardLayout } from "layout";
import { Table } from "components/Table/Table.component";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { AddRooms } from "./AddRooms";
import { getAllRooms, viewRoom } from "store/Actions/rooms";
import { getAllLocations } from "store/Actions/location";
import { getAllServiceApartments } from "store/Actions/serviceApartments";
import { EditRoom } from "./EditRoom";


const RoomsPage = () => {

    const [showHostelModal, setShowHostelModal] = useState(false);
    const [showRoom, setShowRoom] = useState(false);
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
                    location:key?.location,
                    serviceApartment: key?.serviceApartment,
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
            title: ("Roomtype"),
            dataIndex: "roomTypes",
            key: "roomTypes",
        },
        {
            title: ("Location"), 
            dataIndex: "location",
            key: "location",
        },
        {
            title: ("Service Apartment"),
            dataIndex: "serviceApartment",
            key: "serviceApartment",
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
            await dispatch(getAllLocations());
            await dispatch(getAllServiceApartments());
        })();
    }, []);
    return (
        <DashboardLayout>
            <div className="bg-[#08090A]  p-5 text-white">

                <h2 className="content-header p-4 pb-2 text-white ">Rooms</h2>
                <AddRooms
                    show={showHostelModal}
                    setShow={setShowHostelModal}
                />
                 <EditRoom
                    show={showRoom}
                    setShow={setShowRoom}
                />
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
                                dispatch(viewRoom(record?.id))
                                setShowRoom(true)
                            }}
                            >
                                Edit
                            </Button>
                        )}
                    />
                </div>
            </div>
        </DashboardLayout>
    );
};
export default RoomsPage;