import { Modal } from "components";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addLocation } from "store/Actions/location";
// import { addClientUser } from "store";
import { useCountries } from "use-react-countries";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  state: Yup.string().required("State is required"),
  district: Yup.string().required("District is required"),
  location: Yup.string().required("Location is required"),
});

export const AddLocation = ({ show, setShow }) => {
  const { t } = useTranslation("/Users/ns");
  const dispatch = useDispatch();

  const initialValues = {
    id: "",
    state: "",
    district: "",
    location: "",
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
      name: "state",
      placeholder: "Enter State..",
      title: t("State"),
    },
    {
      type: "input",
      name: "district",
      placeholder: "Enter District",
      title: "District",
    }, 
    {
      type: "input",
      name: "location",
      title: t("Location"),
      placeholder:'Select Location',
    },
  ];
  return (
    <Modal
      heading="Add Location"
      submitText="Add Location"
      show={show}
      setShow={setShow}
      fields={addFields}
      initialValues={initialValues}
      validationSchema={validationSchema}
      handleSubmit={async (values) => {
        const newValues = {
          ...values,
          id:Number(values?.id),
        };
        await dispatch(addLocation(newValues,setShow));
      }}
    />
  );
};
