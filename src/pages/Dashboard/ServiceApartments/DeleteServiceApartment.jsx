import { Modal } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLocation } from 'store/Actions/location';
import { deleteRoom } from 'store/Actions/rooms';
import { deleteServiceApartment } from 'store/Actions/serviceApartments';

export const DeleteServiceApartment = ({ show, setShow, id }) => {

  const { serviceApartment } = useSelector((state) => state?.serviceApartments)
  const dispatch = useDispatch();

  return (
    <Modal
      heading="Delete Service Apartment"
      customBody={
        <div className="mb-[32px]">
          Are you sure you wish to delete this Service Apartment? This action is permanent
          and can not be undone.
        </div>
      }
      submitText="Delete Service Apartment"
      handleSubmit={async () => {
        await dispatch(deleteServiceApartment(serviceApartment?.id,setShow));
      }}
      show={show}
      setShow={setShow}
    />
  );
};