import React, { useState, useEffect } from "react";
import { DashboardLayout } from "layout";
import { Table } from "components/Table/Table.component";
import { Button } from "antd";
import { getAllHostellers, viewHosteller } from "store/Actions/hostellers";
import { useDispatch, useSelector } from "react-redux";
import { AddHosteller } from "./AddHosteller";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { getAllLocations } from "store/Actions/location";
import { getAllServiceApartments } from "store/Actions/serviceApartments";
import { ViewHosteller } from "./ViewHosteller";
import { EditHosteller } from "./EditHosteller";
import { DeleteHosteller } from "./DeleteLocation";

const Hostellers = () => {
    const { hostellers } = useSelector((state) => state?.hostellers)
    const { locations } = useSelector((state) => state?.locations)
    const { serviceApartments } = useSelector((state) => state?.serviceApartments)
    const [showHostelModal, setShowHostelModal] = useState(false);
    const [showHosteller, setshowHosteller] = useState(false);
    const [editHosteller, setEditHosteller] = useState(false);
    const [deleteHosteller, setDeleteHosteller] = useState(false);
    const [location, setLocation] = useState([])
    const [ServiceApartments, setServiceApartments] = useState([])
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
            await dispatch(getAllLocations());
            await dispatch(getAllServiceApartments());
        })();
    }, []);

    useEffect(() => {
        let locArr = [];
        locations.forEach((key, index) => {
            locArr.push({
                name: key?.location,
            });
        });
        setLocation(locArr)
    }, [locations]);

    useEffect(() => {
        let apartArr = [];
        serviceApartments.forEach((key, index) => {
            apartArr.push({
                name: key?.address
            });
        });
        setServiceApartments(apartArr)
    }, [serviceApartments]);

    const locationList = location
    const apartmentList = ServiceApartments

    return (
        <DashboardLayout>
            <div className="bg-[#08090A]  p-5 text-white">
                <AddHosteller
                    show={showHostelModal}
                    setShow={setShowHostelModal}
                />
                <ViewHosteller
                    show={showHosteller}
                    setShow={setshowHosteller}
                />
                <EditHosteller
                    show={editHosteller}
                    setShow={setEditHosteller}
                />
                <DeleteHosteller
                    show={deleteHosteller}
                    setShow={setDeleteHosteller}
                />
                <h2 className="content-header p-4 pb-2 text-white ">Hostellers</h2>
                <div className="p-[40px] pb-[24px] mx-[20px] my-[15px] overflow-auto w-full h-full bg-[#000000] rounded-[8px]">
                    <Table
                        columns={columns}
                        data={data}
                        fieldToFilter="name"
                        btnData={{
                            text: (t("Add Hosteller")),
                            onClick: () => setShowHostelModal(true),
                        }}
                        permissions={true}
                        onSearchHandler={true}
                        locationFilter={locationList}
                        apartmentFilter={apartmentList}
                        viewAction={(record) => (
                            <Button onClick={() => {
                                dispatch(viewHosteller(record?.id))
                                setshowHosteller(true)
                            }}
                            >
                                View
                            </Button>
                        )}
                        editAction={(record) => (
                            <Button onClick={() => {
                                dispatch(viewHosteller(record?.id))
                                setEditHosteller(true)
                            }}
                            >
                                Edit
                            </Button>
                        )}
                        deleteAction={(record) => (
                            <Button onClick={() => {
                                dispatch(viewHosteller(record?.id))
                                setDeleteHosteller(true)
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
export default Hostellers;