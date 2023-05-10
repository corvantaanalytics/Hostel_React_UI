import { Modal } from "components";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { addRooms } from "store/Actions/rooms";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  locationId: Yup.string().required("LocationId is required"),
  serviceApartmentId: Yup.string().required("ServiceApartmentId is required"),
  roomTypes: Yup.string().required("RoomType is required"),
  rent: Yup.string().required("Rent is required"),
});

export const AddRooms = ({ show, setShow }) => {
  const { t } = useTranslation("/Users/ns");
  const dispatch = useDispatch();
  const { locations } = useSelector((state) => state?.locations)
  const { serviceApartments } = useSelector((state) => state?.serviceApartments)
  const [location, setLocation] = useState([])
  const [ServiceApartments, setServiceApartments] = useState([])

  const initialValues = {
    id: "",
    locationId: "",
    location:"",
    serviceApartmentId: "",
    serviceApartment:"",
    address: "",
    roomTypes: "",
    rent: "",
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
      type: "select",
      name: "locationId",
      placeholder: "Select",
      title: t("Location"),
      options: location
    },
    {
      type: "select",
      name: "serviceApartmentId",
      title: t("ServiceApartment"),
      placeholder: "Select",
      options: ServiceApartments
    },
    {
      type: "type",
      name: "roomTypes",
      placeholder: " Enter RoomType ",
      title: t("RoomType"),
    },
    {
      type: "type",
      name: "rent",
      placeholder: " Enter Rent ",
      title: t("Rent"),
    },
  ];
  return (
    <Modal
      heading="Add Room"
      submitText="Add Room"
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
          serviceApartmentId: Number(values?.serviceApartmentId),
          rent: Number(values?.rent),
        };
        await dispatch(addRooms(newValues, setShow));
      }}
    />
  );
};
