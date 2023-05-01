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
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { AddExpenses } from "./Addexpenses";
// import { AddIncome } from "./AddIncome";

const InputSelect = ({ options, placeholder }) => {
    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log("search:", value);
    };

    return (
        <select
            name="filter"
            className="w-full py-3 pl-5 pr-12 my-3 text-sm input text-white-P600 active focus-visible:ring-1 focus-visible:border-black-P600 focus-visible:outline-none focus-visible:bg-primary-P600 focus:ring-0"
            style={{ border: "1px solid #16191F" }}
            disabled
        >
            <option value="1" disabled selected>
                {placeholder}
            </option>
        </select>
    );
};

const ExpensesPage = () => {

    const [websites, setWebsites] = useState('');
    const [checkAll, setCheckAll] = useState(false);
    const [search, setSearch] = useState("");
    // const [page, setPage] = useState(0);
    const [selectedWebsite, setSelectedWebsite] = useState({});
    const [newWebsite, setNewWebsite] = useState({ name: "", url: "" });
    const [showAddModelModal, setShowAddModelModal] = useState(false);
    const [showWebsiteAPIKeyModal, setShowWebsiteAPIKeyModal] = useState(false);
    const [showWebsiteDetailsModal, setShowWebsiteDetailsModal] = useState(false);
    const [showDeleteWebsiteModal, setShowDeleteWebsiteModal] = useState(false);
    const [showHostelModal, setShowHostelModal] = useState(false);
    const dispatch = useDispatch();
    const { t } = useTranslation("/TitleModal/ns");
    const branch = [
        { id: "Pallavaram", name: "Pallavaram" },
        { id: "Tambaram", name: "Tambaram" },
        { id: "Egmore", name: "Egmore" },
        { id: "Adayar", name: "Adayar" },
    ];

    const roomType = [
        { id: "SingleSharing", name: "SingleSharing" },
        { id: "Twin Sharing", name: "Twin Sharing" },
        { id: "Three Sharing", name: "Three Sharing" },
        { id: "AC Room", name: "AC Room" },
    ];




    const showDetails = (w) => {
        setSelectedWebsite(w);
        setShowWebsiteDetailsModal(true);
    };

    const confirmDelete = (w) => {
        setSelectedWebsite(w);
        setShowDeleteWebsiteModal(true);
    };

    const copyAPIKey = async () => {
        try {
            await navigator.clipboard.writeText(selectedWebsite.api_key);
            // alert('Copied to clipboard')
            toast("API key copied to clipboard succesfully");
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    };

    const saveAWebsite = async () => {
        const data = {
            name: newWebsite.name,
            url: newWebsite.url,
            user_id: 35,
            expires: "2025-04-01T20:25:19.338Z",
            updated: "2023-04-01T20:25:19.338Z",
            created: "2023-04-01T20:25:19.338Z",
        };
        // console.log({data});
        // return false;
        try {
            await API.saveAConnectedWebsite(data);
            setShowAddModelModal(false);
            // readData();
            toast("Website created succesfully. Reading websites now...");
        } catch (e) {
            alert("Error saving because");
        }
    };
    const tableData = [];
    for (let i = 0; i < 20; i++) {
        tableData.push({
            key: i,
            id: `1391e37e-bcfc`,
            category: `Single Sharing`,
            description: 'N/A',
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
            title: ("Description"),
            dataIndex: "description",
            key: "description",
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
            title: ("Hostel Location"),
            dataIndex: "location",
            key: "location",
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
                <AddExpenses
                    show={showHostelModal}
                    setShow={setShowHostelModal}
                />
                <h2 className="content-header p-4 pb-2 text-white ">Expenses</h2>


                {/* Sub heading */}
                <div className="p-[40px] pb-[24px] mx-[20px] my-[15px]  bg-[#000000] rounded-[8px]">
                    <Table
                        columns={columns}
                        data={tableData}
                        fieldToFilter="name"
                        btnData={{
                            text: (t("Add Expenses")),
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
export default ExpensesPage;