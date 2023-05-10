import { Modal } from "components";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";


export const ViewHosteller = ({ show, setShow }) => {
  const { t } = useTranslation("/Users/ns");
  const { hosteller } = useSelector((state) => state?.hostellers)
  

  const addFields = [
    {
      type: "id",
      name: "id",
      placeholder:  hosteller?.id,
      title: t("ID"),
      disabled:true
    },
    {
      type: "input",
      name: "firstName",
      placeholder: hosteller?.firstName,
      title: t("Name"),
      disabled:true
    },
    {
      type: "input",
      name: "mobilenumber",
      placeholder:  hosteller?.mobilenumber,
      title: t("Mobile Number"),
      disabled:true
    },
    {
      type: "input",
      name: "email",
      placeholder:  hosteller?.email,
      title: t("Email"),
      disabled:true
    },
    {
      type: "input",
      name: "dateofbirth",
      placeholder:  hosteller?.dateofbirth,
      title: t("Date Of Birth"),
      disabled:true
      //  disableDate: (current) => current && current.valueOf() < Date.now(),
    },
    {
      type: "input",
      name: "addressforcommunication",
      placeholder:  hosteller?.addressforcommunication,
      title: t("Address For Communication"),
      disabled:true
    },
    {
      type: "input",
      name: "permanentaddress",
      placeholder: hosteller?.permanentaddress,
      title: t("Permanent Address"),
      disabled:true
    },
    {
      type: "input",
      name: "parentname",
      placeholder:  hosteller?.parentname,
      title: t("Parent Name"),
      disabled:true
    },
    {
      type: "input",
      name: "parentcontactnumber",
      placeholder:  hosteller?.parentcontactnumber,
      title: t("Parent Contact Number"),
      disabled:true
    },
    {
      type: "input",
      name: "workplaceinformation",
      placeholder: hosteller?.workplaceinformation,
      title: t("WorkPlace Address"),
      disabled:true
    },
    {
      type: "input",
      name: "workplacephonenumber",
      placeholder:  hosteller?.workplacephonenumber,
      title: t("WorkPlace Phonenumber"),
      disabled:true,
    },
    {
      type: "input",
      name: "locationId",
      placeholder:  hosteller?.location,
      title: t("Location"),
      disabled:true,
    },
    {
      type: "input",
      name: "serviceApartmentId",
      placeholder:  hosteller?.serviceApartment,
      title: t("Service Apartment"),
      disabled:true,
    },
    {
      type: "input",
      name: "roomdetails",
      placeholder:  hosteller?.roomdetails,
      title: t("Room Details"),
      disabled:true
    },
    {
      type: "input",
      name: "rentdetails",
      placeholder:  hosteller?.rentdetails,
      title: t("Rent Details"),
      disabled:true
    },
    {
      type: "input",
      name: "advancemoney",
      placeholder:  hosteller?.advancemoney,
      title: t("Advance Money"),
      disabled:true
    },
    {
      type: "input",
      name: "dateofjoining",
      placeholder:  hosteller?.dateofjoining,
      title: t("Date Of Joining"),
      disabled:true
      // disableDate: (current) => current && current.valueOf() < Date.now(),
    },

  ];
  return (
    <Modal
      heading="View Hosteller"
      submitText={false}
      cancelButtonText="Cancel"
      show={show}
      setShow={setShow}
      fields={addFields}
    />
  );
};
