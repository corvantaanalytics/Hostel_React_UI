import { Modal } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteLocation } from 'store/Actions/location';

export const DeleteLocation = ({ show, setShow, id }) => {

  const { location } = useSelector((state) => state?.locations)
  const dispatch = useDispatch();

  return (
    <Modal
      heading="Delete Location"
      customBody={
        <div className="mb-[32px]">
          Are you sure you wish to delete this location? This action is permanent
          and can not be undone.
        </div>
      }
      submitText="Delete Location"
      handleSubmit={async () => {
        await dispatch(deleteLocation(location?.id,setShow));
      }}
      show={show}
      setShow={setShow}
    />
  );
};