import { Modal } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteHosteller } from 'store/Actions/hostellers';
import { deleteLocation } from 'store/Actions/location';

export const DeleteHosteller = ({ show, setShow, id }) => {

  const { hosteller } = useSelector((state) => state?.hostellers)
  const dispatch = useDispatch();

  return (
    <Modal
      heading="Delete Hosteller"
      customBody={
        <div className="mb-[32px]">
          Are you sure you wish to delete this hosteller's details? This action is permanent
          and can not be undone.
        </div>
      }
      submitText="Delete Hosteller"
      handleSubmit={async () => {
        await dispatch(deleteHosteller(hosteller?.id,setShow));
      }}
      show={show}
      setShow={setShow}
    />
  );
};