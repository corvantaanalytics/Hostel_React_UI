import { Modal } from "components";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { editServiceApartment } from "store/Actions/serviceApartments";
import * as Yup from "yup";

export const EditServiceApartment= ({ show, setShow }) => {
  const { t } = useTranslation("/Users/ns");
  const dispatch = useDispatch();
  const { locations } = useSelector((state) => state?.locations)
  const { serviceApartment } = useSelector((state) => state?.serviceApartments)
  const [locationMenu, setLocationMenu] = useState([])
  
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("District is required"),
    locationId:Yup.string().required("Location is required"),
    address: Yup.string().required("Location is required"),
  });
  
  const initialValues = {
    id: serviceApartment?.id,
    locationId: serviceApartment?.locationId,
    location:serviceApartment?.location,
    name: serviceApartment?.name,
    address: serviceApartment?.address
  };
  
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

  
  const addFields = [
    {
      type: "id",
      name: "id",
      placeholder:serviceApartment?.id,
      title: t("ID"),
    },
    {
      type: "select",
      name: "locationId",
      placeholder: serviceApartment?.location,
      title: t("Location"),
      options: locationMenu
    },
    {
      type: "input",
      name: "name",
      placeholder: serviceApartment?.name,
      title: "Room Type",
    }, 
    {
      type: "input",
      name: "address",
      title: t("Address"),
      placeholder:serviceApartment?.address,
    },
  ];
  return (
    <Modal
      heading="Edit Service Apartment"
      submitText="Edit Service Apartment"
      show={show}
      setShow={setShow}
      fields={addFields}
      validationSchema={validationSchema}
      initialValues={initialValues}
      handleSubmit={async (values) => {
        const newValues = {
          ...values,
          id:Number(values?.id),
          locationId:Number(values?.locationId)
        };
        await dispatch(editServiceApartment(newValues,setShow));
      }}
    />
  );
};
