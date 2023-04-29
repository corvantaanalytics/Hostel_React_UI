import { Modal } from "components";
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
  dateofbirth: Yup.string().required("Date is required"),
  addressforcommunication: Yup.string().required("Address is required"),
  permanentaddress: Yup.string().required("Address is required"),
  parentname: Yup.string().required("Parent Name is required"),
  parentcontactnumber: Yup.string().required("Number is required"),
  workplaceinformation: Yup.string().required("Address is required"),
  workplacephonenumber: Yup.string().required("Number is required"),
  roomdetails: Yup.string().required("Room Details is required"),
  rentdetails: Yup.string().required("Rent Details is required"),
  advancemoney: Yup.string().required("Amount is required"),
  dateofjoining: Yup.string().required("Date is required"),
});

export const AddHosteller = ({ show, setShow }) => {
  const { t } = useTranslation("/Users/ns");
  const dispatch = useDispatch();

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
    roomdetails: "",
    rentdetails: "",
    advancemoney: "",
    dateofjoining: "",
  };

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
      type: "input",
      name: "dateofbirth",
      placeholder: "DD-MM-YYYY",
      title: t("Date Of Birth"),
      //  disableDate: (current) => current && current.valueOf() < Date.now(),
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
      type: "input",
      name: "dateofjoining",
      placeholder: "DD-MM-YYYY",
      title: t("Date Of Joining"),
      // disableDate: (current) => current && current.valueOf() < Date.now(),
    },

  ];
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
        const newValues = {
          ...values,
          id:Number(values?.id),
          mobilenumber:Number(values?.mobilenumber),
          parentcontactnumber:Number(values?.parentcontactnumber),
          workplacephonenumber:Number(values?.workplacephonenumber),
          advancemoney:Number(values?.advancemoney),
          // dateofbirth: values.dateofbirth.toISOString(),
          // dateofjoining: values.dateofjoining.toISOString(),
        };
        await dispatch(addHosteller(newValues,setShow));
      }}
    />
  );
};
