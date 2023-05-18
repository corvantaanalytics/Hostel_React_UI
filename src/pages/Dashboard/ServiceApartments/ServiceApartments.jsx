import React, { useState, useEffect } from "react";
import { DashboardLayout } from "layout";
import { Table } from "components/Table/Table.component";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getAllLocations } from "store/Actions/location";
import { getAllServiceApartments, viewServiceApartment } from "store/Actions/serviceApartments";
import { AddServiceApartment } from "./AddServiceApartment";
import { ViewServiceApartment } from "./ViewServiceApartment";
import { EditServiceApartment } from "./EditServiceApartment";
import { DeleteServiceApartment } from "./DeleteServiceApartment";

const ServiceApartmentsPage = () => {

    const [showHostelModal, setShowHostelModal] = useState(false);
    const [editServiceApartmentModal, SetEditServiceApartmentModal] = useState(false);
    const [viewServiceApartmentModal, SetViewServiceApartmentModal] = useState(false);
    const [deleteServiceApartmentModal, SetDeleteServiceApartmentModal] = useState(false) 
    const [searchData, setSearchData] = useState("") 
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const { serviceApartments } = useSelector((state) => state?.serviceApartments)
    const { t } = useTranslation("/TitleModal/ns");

    const columns = [
        {
            title: ("ID"),
            dataIndex: "id",
            key: "id",
        },
        {
            title: ("Room Type"),
            dataIndex: "name",
            key: "name",
        },
        {
            title: ("Location"),
            dataIndex: "location",
            key: "location"
        },
        {
            title: ("Address"),
            dataIndex: "address",
            key: "address",
        }
    ];


    useEffect(() => {
        if (serviceApartments) {
          let dataArr = [];
          serviceApartments.forEach((key, index) => {
            dataArr.push({
              id: key?.id,
              location: key?.location,
              name: key?.name,
              address: key?.address,
            });
          });
          setData(dataArr);
        }
      }, [serviceApartments]);
      
    useEffect(() => {
        (async () => {
            await dispatch(getAllServiceApartments());
            await dispatch(getAllLocations());
        })();
    }, []);

    const onSearchHandler = (data) => {
        setSearchData(data)
    }

    
    return (
        <DashboardLayout>
            <div className="bg-[#08090A]  p-5 text-white">
                <h2 className="content-header p-4 pb-2 text-white ">ServiceApartments</h2>

                <AddServiceApartment
                    show={showHostelModal}
                    setShow={setShowHostelModal}
                />
                
                <ViewServiceApartment
                    show={viewServiceApartmentModal}
                    setShow={SetViewServiceApartmentModal}
                />
                
                <EditServiceApartment
                    show={editServiceApartmentModal}
                    setShow={SetEditServiceApartmentModal}
                />
                 <DeleteServiceApartment
                    show={deleteServiceApartmentModal}
                    setShow={SetDeleteServiceApartmentModal}
                />
                <div className="p-[40px] pb-[24px] mx-[20px] my-[15px] overflow-auto w-full h-full bg-[#000000] rounded-[8px]">
                    <Table
                        columns={columns}
                        data={data}
                        onSearchHandler={onSearchHandler}
                        fieldToFilter="name"
                        btnData={{
                            text: (t("Add Service Apartment")),
                            onClick: () => setShowHostelModal(true),
                        }}

                        permissions={true}
                        viewAction={(record) => (
                            <Button onClick={() => {
                               dispatch(viewServiceApartment(record?.id))
                                SetViewServiceApartmentModal(true)
                            }}
                            >
                                View
                            </Button>
                        )}
                        editAction={(record) => (
                            <Button onClick={() => {
                               dispatch(viewServiceApartment(record?.id))
                               SetEditServiceApartmentModal(true)
                            }}
                            >
                                Edit
                            </Button>
                        )}
                        deleteAction={(record) => (
                            <Button onClick={() => {
                               dispatch(viewServiceApartment(record?.id))
                               SetDeleteServiceApartmentModal(true)
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
export default ServiceApartmentsPage;