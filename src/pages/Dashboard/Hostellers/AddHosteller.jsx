import { Modal } from "components";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addHosteller } from "store/Actions/hostellers";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Full name is required"),
  mobilenumber: Yup.string().required("Mobile Number is required"),
  email: Yup.string()
  .required('Email Address is required.')
  .email('Email format not recognized.'),
  addressforcommunication: Yup.string().required("Address is required"),
  permanentaddress: Yup.string().required("Address is required"),
  parentname: Yup.string().required("Parent Name is required"),
  parentcontactnumber: Yup.string().required("Number is required"),
  workplaceinformation: Yup.string().required("Address is required"),
  workplacephonenumber: Yup.string().required("Number is required"),
  locationId: Yup.string().required("Location is required"),
  serviceApartmentId: Yup.string().required("ServiceApartment is required"),
  roomdetails: Yup.string().required("Room Details is required"),
  rentdetails: Yup.string().required("Rent Details is required"),
  advancemoney: Yup.string().required("Amount is required"),
});

export const AddHosteller = ({ show, setShow }) => {
  const { t } = useTranslation("/Users/ns");
  const dispatch = useDispatch();
  const { locations } = useSelector((state) => state?.locations)
  const { serviceApartments } = useSelector((state) => state?.serviceApartments)
  const [location, setLocation] = useState([])
  const [ServiceApartments, setServiceApartments] = useState([])
  
  const initialValues = {
    id: "",
    firstName: "",
    mobilenumber: "",
    email: "",
    dateofbirth: "",
    addressforcommunication: "",
    permanentaddress: "",
    parentname: "",
    parentcontactnumber: "",
    workplaceinformation: "",
    workplacephonenumber: "",
    locationId: "",
    location:"",
    serviceApartmentId: "",
    serviceApartment:"",
    roomdetails: "",
    rentdetails: "",
    advancemoney: "",
    dateofjoining: "",
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

  const addFields = [
    {
      type: "id",
      name: "id",
      placeholder: "id",
      title: t("ID"),
    },
    {
      type: "input",
      name: "firstName",
      placeholder: "Enter Name",
      title: t("Name"),
    },
    {
      type: "input",
      name: "mobilenumber",
      placeholder: "Enter Mobile Number",
      title: t("Mobile Number"),
    },
    {
      type: "input",
      name: "email",
      placeholder: "Enter Email",
      title: t("Email"),
    },
    {
      type: "birthDate",
      name: "dateofbirth",
      placeholder: "DD-MM-YYYY",
      title: t("Date Of Birth"),
    },
    {
      type: "input",
      name: "addressforcommunication",
      placeholder: "Enter Address",
      title: t("Address For Communication"),
    },
    {
      type: "input",
      name: "permanentaddress",
      placeholder: "Enter Address",
      title: t("Permanent Address"),
    },
    {
      type: "input",
      name: "parentname",
      placeholder: "Enter Parent Name",
      title: t("Parent Name"),
    },
    {
      type: "input",
      name: "parentcontactnumber",
      placeholder: "Enter Parent NUmber",
      title: t("Parent Contact Number"),
    },
    {
      type: "input",
      name: "workplaceinformation",
      placeholder: "Enter Address",
      title: t("WorkPlace Address"),
    },
    {
      type: "input",
      name: "workplacephonenumber",
      placeholder: "Enter Number",
      title: t("WorkPlace Phonenumber"),
    },
    {
      type: "select",
      name: "locationId",
      title: t("Location"),
      placeholder: "Select",
      options:location
    },
    {
      type: "select",
      name: "serviceApartmentId",
      title: t("Service Apartment"),
      placeholder: "Select",
      options:ServiceApartments
    },
    {
      type: "input",
      name: "roomdetails",
      placeholder: "Enter Room Details",
      title: t("Room Details"),
    },
    {
      type: "input",
      name: "rentdetails",
      placeholder: "Enter Rent Details",
      title: t("Rent Details"),
    },
    {
      type: "input",
      name: "advancemoney",
      placeholder: "Enter Amount",
      title: t("Advance Money"),
    },
    {
      type: "date",
      name: "dateofjoining",
      placeholder: "DD-MM-YYYY",
      title: t("Date Of Joining"),
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
      heading="Add Hosteller"
      submitText="Add Hosteller"
      show={show}
      setShow={setShow}
      fields={addFields}
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={async (values) => {
        const startDate = sessionStorage.getItem("startDate")
        const birthDate = sessionStorage.getItem("birthDate")
        const originalStartDate = startDate;
        const formattedStartDate = formatDate(originalStartDate)
        const originalBirthDate = birthDate;
        const formattedBirthDate = formatDate(originalBirthDate)
        const newValues = {
          ...values,
          id:Number(values?.id),
          dateofjoining: formattedStartDate,
          dateofbirth: formattedBirthDate,
          mobilenumber:Number(values?.mobilenumber),
          parentcontactnumber:Number(values?.parentcontactnumber),
          locationId: Number(values?.locationId),
          serviceApartmentId: Number(values?.serviceApartmentId),
          workplacephonenumber:Number(values?.workplacephonenumber),
          advancemoney:Number(values?.advancemoney),
        };
        await dispatch(addHosteller(newValues,setShow));
      }}
    />
  );
};
