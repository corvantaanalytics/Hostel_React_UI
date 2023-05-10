import { Modal } from "components";
import { useTranslation } from "react-i18next";
import {  useSelector } from "react-redux";

export const ViewServiceApartment = ({ show, setShow }) => {
  const { t } = useTranslation("/Users/ns");
  const { serviceApartment } = useSelector((state) => state?.serviceApartments)
    
const addFields = [
  {
    type: "id",
    name: "id",
    placeholder: serviceApartment?.id,
    title: t("ID"),
    disabled: true
  },
  {
    type: "input",
    name: "locationId",
    placeholder: serviceApartment?.location,
    title: t("Location"),
    disabled: true
  },
  {
    type: "input",
    name: "name",
    placeholder: serviceApartment?.name,
    title: "Room Type",
    disabled: true
  },
  {
    type: "input",
    name: "address",
    title: t("Address"),
    placeholder: serviceApartment?.address,
    disabled: true
  },
];
return (
  <Modal
    heading="View Service Apartment"
    submitText={false}
    cancelButtonText="Cancel"
    show={show}
    setShow={setShow}
    fields={addFields}
  />
);
};
