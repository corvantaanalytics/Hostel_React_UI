import { Modal } from "components";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addServiceApartment } from "store/Actions/serviceApartments";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("District is required"),
  locationId:Yup.string().required("Location is required"),
  address: Yup.string().required("Location is required"),
});

export const AddServiceApartment = ({ show, setShow }) => {
  const { t } = useTranslation("/Users/ns");
  const dispatch = useDispatch();
  const { locations } = useSelector((state) => state?.locations)
  const [location, setLocation] = useState([])

  const initialValues = {
    id: "",
    locationId: "",
    location:"",
    name: "",
    address: "",
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
      options: location,
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
      placeholder: 'Select Address',
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
          id: Number(values?.id),
          locationId: Number(values?.locationId),
        };
        await dispatch(addServiceApartment(newValues, setShow));
      }}
    />
  );
};
