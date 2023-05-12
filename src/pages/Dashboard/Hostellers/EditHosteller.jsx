import { Modal } from "components";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { editHosteller } from "store/Actions/hostellers";
import * as Yup from "yup";

export const EditHosteller = ({ show, setShow }) => {
  const { t } = useTranslation("/Users/ns");
  const dispatch = useDispatch();
  const { locations } = useSelector((state) => state?.locations)
  const { serviceApartments } = useSelector((state) => state?.serviceApartments)
  const { hosteller } = useSelector((state) => state?.hostellers)
  const [location, setLocation] = useState([])
  const [ServiceApartments, setServiceApartments] = useState([])

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Full name is required"),
    mobilenumber: Yup.string().required("Mobile Number is required"),
    email: Yup.string()
      .required('Email Address is required.')
      .email('Email format not recognized.'),
    dateofbirth: Yup.string().required("Date is required"),
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
    dateofjoining: Yup.string().required("Date is required"),
  });

  const initialValues = {
    id: hosteller?.id,
    firstName: hosteller?.firstName,
    mobilenumber: hosteller?.mobilenumber,
    email: hosteller?.email,
    dateofbirth: hosteller?.dateofbirth,
    addressforcommunication: hosteller?.addressforcommunication,
    permanentaddress: hosteller?.permanentaddress,
    parentname: hosteller?.parentname,
    parentcontactnumber: hosteller?.parentcontactnumber,
    workplaceinformation: hosteller?.workplaceinformation,
    workplacephonenumber: hosteller?.workplacephonenumber,
    locationId: hosteller?.locationId,
    location: hosteller?.location,
    serviceApartmentId: hosteller?.serviceApartmentId,
    serviceApartment: hosteller?.serviceApartment,
    roomdetails: hosteller?.roomdetails,
    rentdetails: hosteller?.rentdetails,
    advancemoney: hosteller?.advancemoney,
    dateofjoining: hosteller?.dateofjoining,
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
      placeholder: hosteller?.id,
      title: t("ID"),
    },
    {
      type: "input",
      name: "firstName",
      placeholder: hosteller?.firstName,
      title: t("Name"),
    },
    {
      type: "input",
      name: "mobilenumber",
      placeholder: hosteller?.mobilenumber,
      title: t("Mobile Number"),
    },
    {
      type: "input",
      name: "email",
      placeholder: hosteller?.email,
      title: t("Email"),
    },
    {
      type: "input",
      name: "dateofbirth",
      placeholder: hosteller?.dateofbirth,
      title: t("Date Of Birth"),
    },
    {
      type: "input",
      name: "addressforcommunication",
      placeholder: hosteller?.addressforcommunication,
      title: t("Address For Communication"),
    },
    {
      type: "input",
      name: "permanentaddress",
      placeholder: hosteller?.permanentaddress,
      title: t("Permanent Address"),
    },
    {
      type: "input",
      name: "parentname",
      placeholder: hosteller?.parentname,
      title: t("Parent Name"),
    },
    {
      type: "input",
      name: "parentcontactnumber",
      placeholder: hosteller?.parentcontactnumber,
      title: t("Parent Contact Number"),
    },
    {
      type: "input",
      name: "workplaceinformation",
      placeholder: hosteller?.workplaceinformation,
      title: t("WorkPlace Address"),
    },
    {
      type: "input",
      name: "workplacephonenumber",
      placeholder: hosteller?.workplacephonenumber,
      title: t("WorkPlace Phonenumber"),
    },
    {
      type: "select",
      name: "locationId",
      placeholder: hosteller?.location,
      title: t("Location"),
      options: location
    },
    {
      type: "select",
      name: "serviceApartmentId",
      placeholder: hosteller?.serviceApartment,
      title: t("Service Apartment"),
      options: ServiceApartments
    },
    {
      type: "input",
      name: "roomdetails",
      placeholder: hosteller?.roomdetails,
      title: t("Room Details"),
    },
    {
      type: "input",
      name: "rentdetails",
      placeholder: hosteller?.rentdetails,
      title: t("Rent Details"),
    },
    {
      type: "input",
      name: "advancemoney",
      placeholder: hosteller?.advancemoney,
      title: t("Advance Money"),
    },
    {
      type: "input",
      name: "dateofjoining",
      placeholder: hosteller?.dateofjoining,
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
      heading="Edit Hosteller"
      submitText="Edit Hosteller"
      show={show}
      setShow={setShow}
      fields={addFields}
      validationSchema={validationSchema}
      initialValues={initialValues}
      handleSubmit={async (values) => {
        const startDate = sessionStorage.getItem("startDate")
        const birthDate = sessionStorage.getItem("birthDate")
        const originalStartDate = startDate;
        const formattedStartDate = formatDate(originalStartDate)
        const originalBirthDate = birthDate;
        const formattedBirthDate = formatDate(originalBirthDate)
        const newValues = {
          ...values,
          id: Number(values?.id),
          dateofjoining: formattedStartDate ? formattedStartDate : hosteller?.dateofjoining,
          dateofbirth: formattedBirthDate ? formattedBirthDate : hosteller?.dateofbirth,
          mobilenumber: Number(values?.mobilenumber),
          parentcontactnumber: Number(values?.parentcontactnumber),
          locationId: Number(values?.locationId),
          serviceApartmentId: Number(values?.serviceApartmentId),
          workplacephonenumber: Number(values?.workplacephonenumber),
          advancemoney: Number(values?.advancemoney),
        };
        await dispatch(editHosteller(newValues, setShow));
      }}
    />
  );
};
