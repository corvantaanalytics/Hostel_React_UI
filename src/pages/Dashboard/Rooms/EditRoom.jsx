import { Modal } from "components";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { editRoom } from "store/Actions/rooms";
import * as Yup from "yup";

export const EditRoom = ({ show, setShow }) => {
  const { t } = useTranslation("/Users/ns");
  const dispatch = useDispatch();
  const { locations } = useSelector((state) => state?.locations)
  const { serviceApartments } = useSelector((state) => state?.serviceApartments)
  const { room } = useSelector((state) => state?.rooms)
  const [locationMenu, setLocationMenu] = useState([])
  const [ServiceApartments, setServiceApartments] = useState([])
  
  const initialValues = {
    id: room?.id,
    locationId: room?.locationId,
    location: room?.location,
    serviceApartmentId: room?.serviceApartmentId,
    serviceApartment: room?.serviceApartment,
    address: room?.address,
    roomTypes: room?.roomTypes,
    rent: room?.rent,
  };

  const validationSchema = Yup.object().shape({
    locationId:Yup.string().required("Location is required"),
    serviceApartmentId:Yup.string().required("ServiceApartment is required"),
  });
  
  useEffect(() => {
    let dataArr = [];
    locations.forEach((key, index) => {
      dataArr.push({
        value: key?.id,
        label: key?.location,
      });
    });
    setLocationMenu(dataArr)
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
      placeholder: room?.id,
      title: t("ID"),
    },
    {
      type: "select",
      name: "locationId",
      placeholder: room?.location,
      title: t("Location"),
      options:locationMenu
    },
    {
      type: "select",
      name: "serviceApartmentId",
      placeholder: room?.serviceApartment,
      title: t("ServiceApartment"),
      options:ServiceApartments
    },
    {
      type: "type",
      name: "roomTypes",
      placeholder:room?.roomTypes,
      title: t("RoomType"),
    },
    {
      type: "type",
      name: "rent",
      placeholder: room?.rent,
      title: t("Rent"),
    },
  ];
  return (
    <Modal
      heading="Edit Room"
      submitText="Edit Room"
      show={show}
      setShow={setShow}
      fields={addFields}
      validationSchema={validationSchema}
      initialValues={initialValues}
      handleSubmit={async (values) => {
        const newValues = {
          ...values,
          id: Number(values?.id),
          locationId: Number(values?.locationId),
          serviceApartmentId: Number(values?.serviceApartmentId),
          rent: Number(values?.rent),
        };
        await dispatch(editRoom(newValues,setShow));
      }}
    />
  );
};
