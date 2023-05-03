import { Modal } from "components";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addLocation } from "store/Actions/location";
import { addServiceApartment } from "store/Actions/serviceApartments";
// import { addClientUser } from "store";
import { useCountries } from "use-react-countries";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  // state: Yup.string().required("State is required"),
  name: Yup.string().required("District is required"),
  address: Yup.string().required("Location is required"),
});

export const AddServiceApartment = ({ show, setShow }) => {
  const { t } = useTranslation("/Users/ns");
  const dispatch = useDispatch();

  const initialValues = {
    id: "",
    locationId: "",
    name: "",
    address: "",
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
      name: "locationId",
      placeholder: "Enter Location..",
      title: t("Location"),
    },
    {
      type: "input",
      name: "name",
      placeholder: "Enter Room Type",
      title: "Room Type",
    }, 
    {
      type: "input",
      name: "address",
      title: t("Address"),
      placeholder:'Select Address',
    },
  ];
  return (
    <Modal
      heading="Add Service Apartment"
      submitText="Add Service Apartment"
      show={show}
      setShow={setShow}
      fields={addFields}
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={async (values) => {
        const newValues = {
          ...values,
          id:Number(values?.id),
          location:Number(values?.locationId)
        };
        await dispatch(addServiceApartment(newValues,setShow));
      }}
    />
  );
};
