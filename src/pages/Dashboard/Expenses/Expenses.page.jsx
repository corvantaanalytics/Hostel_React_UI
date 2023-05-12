import React, { useState, useEffect } from "react";
import { DashboardLayout } from "layout";
import { Table } from "components/Table/Table.component";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { AddExpenses } from "./Addexpenses";
import { getAllLocations } from "store/Actions/location";
import { getAllServiceApartments } from "store/Actions/serviceApartments";
import { getAllExpenses, viewExpense } from "store/Actions/expenses";
import moment from "moment";
import { DeleteExpense } from "./DeleteExpense";
import { EditExpense } from "./EditExpense";

const ExpensesPage = () => {

    const [showHostelModal, setShowHostelModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const { t } = useTranslation("/TitleModal/ns");
    const { expenses } = useSelector((state) => state?.expenses)

    useEffect(() => {
        if (expenses) {
            let dataArr = [];
            expenses.forEach((key, index) => {
                dataArr.push({
                    id: key?.id,
                    location: key?.location,
                    serviceApartment: key?.serviceApartment,
                    expenseType: key?.expenseType,
                    amount: key?.amount,
                    date: key?.date
                });
            });
            setData(dataArr);
        }
    }, [expenses]);

    const columns = [
        {
            title: ("ID"),
            dataIndex: "id",
            key: "id",
        },
        {
            title: ("Location"),
            dataIndex: "location",
            key: "location",
        },
        {
            title: ("Service Apartment"),
            dataIndex: "serviceApartment",
            key: " serviceApartment",
        },
        {
            title: ("Expense Type"),
            dataIndex: "expenseType",
            key: "expenseType",
        },

        {
            title: ("Amount"),
            dataIndex: "amount",
            key: "amount",
        },
        {
            title: t("Created Date"),
            dataIndex: "date",
            key: "date",
            render: (text, record) => record?.date !== "N/A" ? moment(record?.date).format('MMMM Do, YYYY') : "N/A",
        },

    ];

    useEffect(() => {
        (async () => {
            await dispatch(getAllLocations());
            await dispatch(getAllServiceApartments());
            await dispatch(getAllExpenses());
        })();
    }, []);

    return (
        <DashboardLayout>
            <div className="bg-[#08090A]  p-5 text-white">
                <AddExpenses
                    show={showHostelModal}
                    setShow={setShowHostelModal}
                />

                <DeleteExpense
                    show={showDeleteModal}
                    setShow={setShowDeleteModal}
                />

                <EditExpense
                    show={showEditModal}
                    setShow={setShowEditModal}
                />

                <h2 className="content-header p-4 pb-2 text-white ">Expenses</h2>


                {/* Sub heading */}
                <div className="p-[40px] pb-[24px] mx-[20px] my-[15px] overflow-auto w-full h-full bg-[#000000] rounded-[8px]">
                    <Table
                        columns={columns}
                        data={data}
                        fieldToFilter="name"
                        btnData={{
                            text: (t("Add Expenses")),
                            onClick: () => setShowHostelModal(true),
                        }}

                        permissions={true}
                        editAction={(record) => (
                            <Button onClick={() => {
                                dispatch(viewExpense(record?.id));
                                setShowEditModal(true);
                            }}
                            >
                                Edit
                            </Button>
                        )}
                        deleteAction={(record) => (
                            <Button onClick={() => {
                                dispatch(viewExpense(record?.id));
                                setShowDeleteModal(true);
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
export default ExpensesPage;