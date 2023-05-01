import { Modal } from "components";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addRooms } from "store/Actions/rooms";
// import { addClientUser } from "store";
import { useCountries } from "use-react-countries";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  locationId: Yup.string().required("LocationId is required"),
  serviceApartmentId: Yup.string().required("ServiceApartmentId is required"),
  address: Yup.string().required("Address is required"),
  roomTypes: Yup.string().required("RoomType is required"),
  rent: Yup.string().required("Rent is required"),
});

export const AddRooms = ({ show, setShow }) => {
  const { t } = useTranslation("/Users/ns");
  const dispatch = useDispatch();

  const initialValues = {
    id: "",
    locationId: "",
    serviceApartmentId: "",
    address:"",
    roomTypes: "",
    rent: "",
  };

  // const branch = [
  //   { label: "SingleSharing", value: "SingleSharing" },
  //   { label: "Twin Sharing", value: "Twin Sharing" },
  //   { label: "Three Sharing", value: "Three Sharing" },
  //   { label: "AC Room", value: "AC Room" },
  // ]

  // const location = [
  //   { label: "Pallavaram", value: "Pallavaram" },
  //   { label: "Egmore", value: "Egmore" },
  //   { label: "Tambaram", value: "Tambaram" },
  //   { label: "Adayar", value: "Adayar" },
  // ]

  const addFields = [
    {
      type: "id",
      name: "id",
      placeholder: "id",
      title: t("ID"),
    },
    {
      type: "type",
      name: "locationId",
      placeholder: " Enter LocationId ",
      title: t("LocationId"),
    },
    {
      type: "type",
      name: "serviceApartmentId",
      placeholder: " Enter ServiceApartmentId ",
      title: t("ServiceApartmentId"),
    },
    {
      type: "type",
      name: "address",
      placeholder: " Enter Address ",
      title: t("Address"),
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
          id:Number(values?.id),
          locationId:Number(values?.locationId),
          serviceApartmentId:Number(values?.serviceApartmentId),
          rent:Number(values?.rent),
        };
        await dispatch(addRooms(newValues,setShow));
      }}
    />
  );
};
