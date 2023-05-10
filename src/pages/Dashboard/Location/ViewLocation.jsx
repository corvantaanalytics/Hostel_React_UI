import { Modal } from "components";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";


export const ViewLocation = ({ show, setShow }) => {
  const { t } = useTranslation("/Users/ns");
  const { location } = useSelector((state) => state?.locations)
 
  const addFields = [
    {
      type: "id",
      name: "id",
      placeholder: location?.id,
      title: t("ID"),
      disabled:true
    },
    {
      type: "input",
      name: "state",
      placeholder: location?.state,
      title: t("State"),
      disabled:true
    },
    {
      type: "input",
      name: "district",
      placeholder: location?.district,
      title: "District",
      disabled:true
    }, 
    {
      type: "input",
      name: "location",
      title: t("Location"),
      placeholder: location?.location,
      disabled:true
    },
  ];
  return (
    <Modal
      heading="View Location"
      submitText={false}
      cancelButtonText="Cancel"
      show={show}
      setShow={setShow}
      fields={addFields}
    />
  );
};
