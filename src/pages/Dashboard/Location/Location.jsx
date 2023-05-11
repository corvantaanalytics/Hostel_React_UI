import React, { useState, useEffect } from "react";
import { DashboardLayout } from "layout";
import Text from "components/Text/Text.component";
import Input from "components/Input/Input.component";
// import Button from "components/Button/Button.component";
import Section from "components/Section/Section.component";
import Icon from "components/Icon/Icon.component";
import Banner from "components/Banner/Banner.component";
import { Table } from "components/Table/Table.component";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { AddLocation } from "./AddLocation";
import { getAllLocations, viewLocation } from "store/Actions/location";
import { ViewLocation } from "./ViewLocation";
import { EditLocation } from "./EditLocation";
import { DeleteLocation } from "./DeleteLocation";

const LocationPage = () => {

    const [showHostelModal, setShowHostelModal] = useState(false);
    const [viewLocations, setViewLocations] = useState(false);
    const [editLocations, setEditLocations] = useState(false);
    const [deleteLocations, setDeleteLocations] = useState(false);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const { locations } = useSelector((state) => state?.locations)
    const { t } = useTranslation("/TitleModal/ns");

    const columns = [
        {
            title: ("ID"),
            dataIndex: "id",
            key: "id",
        },
        {
            title: ("State"),
            dataIndex: "state",
            key: "state",
        },
        {
            title: ("District"),
            dataIndex: "district",
            key: "district",
        },
        {
            title: ("Location"),
            dataIndex: "location",
            key: "location",
        },
    ];

    useEffect(() => {
        if (locations) {
            let dataArr = [];
            locations.forEach((key, index) => {
                dataArr.push({
                    id: key?.id,
                    state: key?.state,
                    district: key?.district,
                    location: key?.location,
                });
            });
            setData(dataArr);
        }
    }, [locations]);

    useEffect(() => {
        (async () => {
            await dispatch(getAllLocations());
        })();
    }, []);

    return (
        <DashboardLayout>
            <div className="bg-[#08090A]  p-5 text-white">
                <h2 className="content-header p-4 pb-2 text-white ">Location</h2>

                <AddLocation
                    show={showHostelModal}
                    setShow={setShowHostelModal}
                />
                <ViewLocation
                    show={viewLocations}
                    setShow={setViewLocations}
                />
                <EditLocation
                    show={editLocations}
                    setShow={setEditLocations}
                />
                <DeleteLocation
                    show={deleteLocations}
                    setShow={setDeleteLocations}
                />
                <div className="p-[40px] pb-[24px] mx-[20px] my-[15px]  bg-[#000000] rounded-[8px]">
                    <Table
                        columns={columns}
                        data={data}
                        fieldToFilter="name"
                        btnData={{
                            text: (t("Add Location")),
                            onClick: () => setShowHostelModal(true),
                        }}

                        permissions={true}
                        viewAction={(record) => (
                            <Button onClick={() => {
                                dispatch(viewLocation(record?.id))
                                setViewLocations(true)
                            }}
                            >
                                View
                            </Button>
                        )}
                        editAction={(record) => (
                            <Button onClick={() => {
                                dispatch(viewLocation(record?.id))
                                setEditLocations(true)
                            }}
                            >
                                Edit
                            </Button>
                        )}
                        deleteAction={(record) => (
                            <Button onClick={() => {
                                dispatch(viewLocation(record?.id))
                                setDeleteLocations(true)
                            }}
                            >
                                Delete
                            </Button>
                        )}
                    />
                </div>
            </div>
        </DashboardLayout>
    );
};
export default LocationPage;