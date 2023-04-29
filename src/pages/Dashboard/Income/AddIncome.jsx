import { Modal } from "components";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { addClientUser } from "store";
import { useCountries } from "use-react-countries";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Please use 8 or more characters with a mix of letters, numbers & symbols"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  status: Yup.bool().required("Status is required"),
  companyName: Yup.string().required("Company Name is required"),
  address1: Yup.string().required("Address 1 is required"),
  city: Yup.string().required("City is required"),
  state_region: Yup.string().required("State/Region is required"),
  zipCode: Yup.string().required("ZIP Code is required"),
  country: Yup.string().required("Country is required"),
  brandId: Yup.string().required("Brand is required"),
});

export const AddIncome = ({ show, setShow }) => {
  const { t } = useTranslation("/Users/ns");
  const dispatch = useDispatch();
  const { id } = useParams();

  const initialValues = {
    fullName: "",
    // email: "",
    password: "",
    confirmPassword: "",
    status: true,
    // ipAddresses: "",
    companyName: "",
    brandId: "",
    address1: "",
    address2: "",
    city: "",
    state_region: "",
    zipCode: "",
    country: "",
    parentID: id ? id : "",
  };
  const location = [
    { label: "Pallavaram", value: "Pallavaram" },
    { label: "Egmore", value: "Egmore" },
    { label: "Tambaram", value: "Tambaram" },
    { label: "Adayar", value: "Adayar" },
  ]
  const addFields = [
    {
      type: "id",
      name: "id",
      placeholder: "id",
      title: t("ID"),
    },
    {
      type: "input",
      name: "description",
      placeholder: "Enter description..",
      title: t("Description"),
    },
    {
      type: "switch",
      name: "status",
      title: t("status"),
    },
    {
      type: "input",
      name: "Category",
      placeholder: "Category",
      title: "Category",
    },
    {
      type: "select",
      name: "hostelLocation",
      title: t("Hostel Location"),
      placeholder:'Select Location',
      options:location
    },
  ];
  return (
    <Modal
      heading="Add Income"
      submitText="Add Income"
      show={show}
    //   loading={loading || brandsLoading}
      setShow={setShow}
      fields={addFields}
      initialValues={initialValues}
      validationSchema={validationSchema}
    //   handleSubmit={async (values) => {
    //     await dispatch(addClientUser(values));
    //     setShow(false);
    //   }}
    />
  );
};
