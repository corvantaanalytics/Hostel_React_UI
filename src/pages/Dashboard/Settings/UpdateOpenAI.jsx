import { Modal } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { updateApiKey, updateEmail } from 'store/Actions/settings';
import * as Yup from 'yup';

const initialValues = {
    key: '',
};

const validationSchema =Yup.object().shape({
    key: Yup.string().required('This field is required!'),
});

export const UpdateAIModal = ({ show, setShow, id }) => {
    const { user } = useSelector((state) => state?.settings)
    const settingValue = sessionStorage.getItem('openAi')
    const dispatch = useDispatch();

    const fields = [
        {
            type:'input',
            name: 'key',
            placeholder:settingValue,
            title: 'AIKey',
        }
    ];


    return (
        <Modal
            heading="Update AI Key"
            cancelButtonText={false}
            fields={fields}
            initialValues={initialValues}
            validationSchema={validationSchema}
            submitText="Save Changes"
            handleSubmit={async (values) => {
                dispatch(                   
                    updateApiKey(values?.key,setShow)
                )
            }}
            show={show}
            setShow={setShow}
        />
    );
};