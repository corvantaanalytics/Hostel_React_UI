import { Modal } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLocation } from 'store/Actions/location';
import { deleteRoom } from 'store/Actions/rooms';

export const DeleteRoom = ({ show, setShow, id }) => {

  const { room } = useSelector((state) => state?.rooms)
  const dispatch = useDispatch();

  return (
    <Modal
      heading="Delete Room"
      customBody={
        <div className="mb-[32px]">
          Are you sure you wish to delete this room? This action is permanent
          and can not be undone.
        </div>
      }
      submitText="Delete Room"
      handleSubmit={async () => {
        await dispatch(deleteRoom(room?.id,setShow));
      }}
      show={show}
      setShow={setShow}
    />
  );
};