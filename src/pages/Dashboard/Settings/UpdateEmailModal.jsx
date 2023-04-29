import { Modal } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmail } from 'store/Actions/hostellers';
import * as Yup from 'yup';

const initialValues = {
    email: '',
};

const validationSchema =Yup.object().shape({
    email: Yup.string().required('This field is required!'),
});

export const UpdateEmailModal = ({ show, setShow, id }) => {

    const dispatch = useDispatch();

    const fields = [
        {
            type:'input',
            name: 'email',
            placeholder: user?.email,
            title: 'Email Address',
        }
    ];


    return (
        <Modal
            heading="Update Email"
            cancelButtonText={false}
            fields={fields}
            initialValues={initialValues}
            validationSchema={validationSchema}
            submitText="Save Changes"
            handleSubmit={async (values) => {
            }}
            show={show}
            setShow={setShow}
        />
    );
};