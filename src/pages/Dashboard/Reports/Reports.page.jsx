import React, { useState, useEffect } from "react";
import { DashboardLayout } from "layout";
import Text from "components/Text/Text.component";
import Input from "components/Input/Input.component";
// import Button from "components/Button/Button.component";
import Section from "components/Section/Section.component";
import Icon from "components/Icon/Icon.component";
import Banner from "components/Banner/Banner.component";
import { Table } from "components/Table/Table.component";
import { Button, DatePicker, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { DateRangePicker } from "components/formFields";
import ReactDatePicker from "react-datepicker";
import { Option } from "antd/es/mentions";
// import { AddLocation } from "./AddLocation";
// import { getAllLocations, viewLocation } from "store/Actions/location";
// import { ViewLocation } from "./ViewLocation";
// import { EditLocation } from "./EditLocation";
// import { DeleteLocation } from "./DeleteLocation";

const Report = () => {

    const [showHostelModal, setShowHostelModal] = useState(false);
    const [viewLocations, setViewLocations] = useState(false);
    const [editLocations, setEditLocations] = useState(false);
    const [deleteLocations, setDeleteLocations] = useState(false);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const { locations } = useSelector((state) => state?.locations)
    const { t } = useTranslation("/TitleModal/ns");
    const [birthDate, setBirthDate] = useState(new Date());
    const { RangePicker } = DatePicker;

    // const columns = [
    //     {
    //         title: ("ID"),
    //         dataIndex: "id",
    //         key: "id",
    //     },
    //     {
    //         title: ("State"),
    //         dataIndex: "state",
    //         key: "state",
    //     },
    //     {
    //         title: ("District"),
    //         dataIndex: "district",
    //         key: "district",
    //     },
    //     {
    //         title: ("Location"),
    //         dataIndex: "location",
    //         key: "location",
    //     },
    // ];

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
            // await dispatch(getAllLocations());
        })();
    }, []);

    return (
        <DashboardLayout>
            <div className="bg-[#08090A]  p-5 text-white">
                <h2 className="content-header p-4 pb-2 text-white ">Reports</h2>

                {/* <AddLocation
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
                /> */}
                <div className="p-[40px] pb-[24px] mx-[20px] my-[15px] overflow-auto w-full h-full bg-[#000000] rounded-[8px]">
                    <RangePicker
                        style={{
                            WebkitTextFillColor: "#fff",
                            backgroundColor: '#0C0D0E',
                            width: '100%'
                        }}
                        onChange={(date, dateString, id) => ''
                            // handleDateRange(date, dateString, id)
                        }
                        dropdownClassName="custom-date-picker-dd "
                        format="YYYY-MM-DD    "
                        placeholder={["Date Range"]}
                        className="custom-date-picker w-[350px] h-[52px] bg-[#171723] rounded-[8px] text-[#92928F] flex items-center justify-between px-[16px]"
                    />
                    <Select
                        placeholder="Type to Search ..."
                        style={{ WebkitTextFillColor: "#fff", }}
                        optionFilterProp="children"
                        showSearch
                        // style={{color:'#000000'}}
                        className="mt-5 form-select appearance-none block w-full px-[16px] h-[52px] text-base font-normal text-[#92928f] bg-[#0C0D0F] bg-clip-padding bg-no-repeat border-none rounded-[8px] transition ease-in-out m-0 focus:bg-[#171723] focus:border-none focus:outline-none"
                    >
                        <Option value=""></Option>
                        <Option value="1">hi</Option>
                        <Option value="2">how</Option>
                    </Select>
                    <Button
                        style={{ fontFamily: "Poppins" }}
                        type="submit"
                        className="mt-5 bg-[#f900b9] text-[#fff] h-[52px] p-8 py-2 border-none rounded-[8px]">
                        Download
                    </Button>
                </div>
            </div>
        </DashboardLayout>
    );
};
export default Report;