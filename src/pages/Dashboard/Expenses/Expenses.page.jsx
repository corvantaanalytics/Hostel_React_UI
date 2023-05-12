import React, { useState, useEffect } from "react";
import { DashboardLayout } from "layout";
import { Table } from "components/Table/Table.component";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { AddExpenses } from "./Addexpenses";
import { getAllLocations } from "store/Actions/location";
import { getAllServiceApartments } from "store/Actions/serviceApartments";
import { getAllExpenses } from "store/Actions/expenses";

const ExpensesPage = () => {

    const [showHostelModal, setShowHostelModal] = useState(false);
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
                    amount: key?.amount
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
                <h2 className="content-header p-4 pb-2 text-white ">Expenses</h2>


                {/* Sub heading */}
                <div className="p-[40px] pb-[24px] mx-[20px] my-[15px]  bg-[#000000] rounded-[8px]">
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