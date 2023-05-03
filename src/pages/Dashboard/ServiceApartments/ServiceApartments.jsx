import React, { useState, useEffect } from "react";
import { DashboardLayout } from "layout";
import Text from "components/Text/Text.component";
import Input from "components/Input/Input.component";
// import Button from "components/Button/Button.component";
import Section from "components/Section/Section.component";
import Icon from "components/Icon/Icon.component";
import Banner from "components/Banner/Banner.component";
import { Table } from "components/Table/Table.component";
import Tag from "components/Tag/Tag.component";
import Dropdown from "components/Dropdown/Dropdown.component";
// import MyModal from "components/MyModal/MyModal.component";
import { toast } from "react-toastify";
import { API } from "lib/api";
// import ModelDropdown from "components/ModelDropdown/ModelDropdown.component";
import { Button, Select } from "antd";
import { getAllHostellers } from "store/Actions/hostellers";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { AddExpenses } from "../Expenses/Addexpenses";
import { getAllLocations } from "store/Actions/location";
import { data } from "autoprefixer";
import { getAllServiceApartments } from "store/Actions/serviceApartments";
import { AddServiceApartment } from "./AddServiceApartment";

const ServiceApartmentsPage = () => {

    const [showHostelModal, setShowHostelModal] = useState(false);
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
        })();
    }, []);
    
    return (
        <DashboardLayout>
            <div className="bg-[#08090A]  p-5 text-white">
                <h2 className="content-header p-4 pb-2 text-white ">ServiceApartments</h2>

                <AddServiceApartment
                    show={showHostelModal}
                    setShow={setShowHostelModal}
                />
                {/* Sub heading */}
                <div className="p-[40px] pb-[24px] mx-[20px] my-[15px]  bg-[#000000] rounded-[8px]">
                    <Table
                        columns={columns}
                        data={data}
                        fieldToFilter="name"
                        btnData={{
                            text: (t("Add Service Apartment")),
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
export default ServiceApartmentsPage;