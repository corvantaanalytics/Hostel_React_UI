import { Modal } from "components";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { editExpense } from "store/Actions/expenses";
import { editHosteller } from "store/Actions/hostellers";
import * as Yup from "yup";

export const EditExpense = ({ show, setShow }) => {
  const { t } = useTranslation("/Users/ns");
  const dispatch = useDispatch();
  const { locations } = useSelector((state) => state?.locations)
  const { expense } = useSelector((state) => state?.expenses)
  const { serviceApartments } = useSelector((state) => state?.serviceApartments)
  const { hosteller } = useSelector((state) => state?.hostellers)
  const [location, setLocation] = useState([])
  const [ServiceApartments, setServiceApartments] = useState([])

  const validationSchema = Yup.object().shape({
    locationId: Yup.string().required("Location is required"),
    serviceApartmentId: Yup.string().required(" Service Apartment is required"),
    expenseTypeId: Yup.string().required("Expense Type is required"),
    amount: Yup.string().required("Amount is required"),
  });
  
  
  const initialValues = {
    id: expense?.id,
    locationId:  expense?.locationId,
    location: expense?.location,
    serviceApartmentId: expense?.serviceApartmentId,
    serviceApartment: expense?.serviceApartment,
    expenseTypeId: expense?.expenseTypeId,
    expenseType: expense?.expenseType,
    amount:  expense?.amount,
    date:  expense?.date
  };

  
  useEffect(() => {
    let dataArr = [];
    locations.forEach((key, index) => {
      dataArr.push({
        value: key?.id,
        label: key?.location,
      });
    });
    setLocation(dataArr)
  }, [locations]);

  useEffect(() => {
    let data = [];
    serviceApartments.forEach((key, index) => {
      data.push({
        value: key?.id,
        label: key?.address,
      });
    });
    setServiceApartments(data)
  }, [serviceApartments]);

  const expenseType = [
    { label: "Rent", value: "1" },
    { label: "Maintenance", value: "2" },
    { label: "Electricity Bill", value: "3" },
    { label: "Food", value: "4" },
  ]

  const addFields = [
    {
      type: "id",
      name: "id",
      placeholder:  hosteller?.id,
      title: t("ID"),
    },
    {
      type: "select",
      name: "locationId",
      placeholder: expense?.location,
      title: t("Location"),
      options: location
    },
    {
      type: "select",
      name: "serviceApartmentId",
      placeholder:  expense?.serviceApartment,
      title: t("Service Apartment"),
      options: ServiceApartments
    },
    {
      type: "select",
      name: "expenseTypeId",
      placeholder:  expense?.expenseType,
      title: t("Expense Type"),
      options: expenseType
    },
    {
      type: "input",
      name: "amount",
      title: t("Amount"),
      placeholder: expense?.amount,
    },
    {
      type: "date",
      name: "date",
      title: "Date",
      placeholder: expense?.date,
      disabledTime: true
    },

  ];

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
  }

  return (
    <Modal
      heading="Edit Expense"
      submitText="Edit Expense"
      show={show}
      setShow={setShow}
      fields={addFields}
      validationSchema={validationSchema}
      initialValues={initialValues}
      handleSubmit={async (values) => {
        const startDate = sessionStorage.getItem("startDate")
        const originalDate = startDate;
        const formattedDate = formatDate(originalDate)
        const newValues = {
          ...values,
          amount:Number(values?.amount),
          date: formattedDate? formattedDate:expense?.date
        };
        await dispatch(editExpense(newValues,setShow));
      }}
    />
  );
};
