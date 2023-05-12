import { Modal } from "components";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from 'moment';
// import { addClientUser } from "store";
import { useCountries } from "use-react-countries";
import * as Yup from "yup";
import { addExpenses } from "store/Actions/expenses";

const validationSchema = Yup.object().shape({
  locationId: Yup.string().required("Location is required"),
  serviceApartmentId: Yup.string().required(" Service Apartment is required"),
  expenseTypeId: Yup.string().required("Expense Type is required"),
  amount: Yup.string().required("Amount is required"),
  // date: Yup.date().required("Date is required"),
});

export const AddExpenses = ({ show, setShow }) => {
  const { t } = useTranslation("/Users/ns");
  const dispatch = useDispatch();
  const { locations } = useSelector((state) => state?.locations)
  const { serviceApartments } = useSelector((state) => state?.serviceApartments)
  const [location, setLocation] = useState([])
  const [ServiceApartments, setServiceApartments] = useState([])

  const initialValues = {
    id: "",
    locationId: "",
    serviceApartmentId: "",
    expenseTypeId: "",
    expenseType: "",
    amount: "",
    date: ""
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

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
  }
 
  const addFields = [
    {
      type: "id",
      name: "id",
      placeholder: "id",
      title: t("ID"),
    },
    {
      type: "select",
      name: "locationId",
      placeholder: "Select",
      title: t("Location"),
      options: location
    },
    {
      type: "select",
      name: "serviceApartmentId",
      placeholder: "Select",
      title: "Service Apartment",
      options: ServiceApartments
    },
    {
      type: "select",
      name: "expenseTypeId",
      placeholder: "Select",
      title: "Expense Type",
      options: expenseType
    },
    {
      type: "input",
      name: "amount",
      title: t("Amount"),
      placeholder: 'Enter Amount',
    },
    {
      type: "date",
      name: "date",
      title: "Date",
      placeholder: 'Enter Date',
      disabledTime: true
    },
  ];
  return (
    <Modal
      heading="Add Expenses"
      submitText="Add Expenses"
      show={show}
      setShow={setShow}
      fields={addFields}
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={async (values) => {
        const startDate = sessionStorage.getItem("startDate")
        const originalDate = startDate;
        const formattedDate = formatDate(originalDate)
        const newValues = {
          ...values,
          date: formattedDate
        };
        dispatch(addExpenses(newValues,setShow))
      }}
    />
  );
};
