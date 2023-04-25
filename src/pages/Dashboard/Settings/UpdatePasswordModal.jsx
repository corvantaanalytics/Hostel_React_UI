import { Modal } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails, UpdatePassword } from 'store/Actions/settings';
import { getUserDetailsDispatch, setSettingsLoading } from 'store/Slices/settingsSlice';
import * as Yup from 'yup';

const initialValues = {
    new_password:'',
    confirmpassword:'',
};

const validationSchema =Yup.object().shape({
    
    new_password: Yup.string()
    .required('password is required.')
    .min(6, 'Password must be atleast 6 characters'),
    confirmpassword: Yup.string()
    .required('Confirm Password is required.')
    .min(6, 'Password must be atleast 6 characters')
    .oneOf(
        [Yup.ref('new_password'), null],
        'Confirm Password must matches with new Password'
    ),
});

export const UpdatePasswordModal = ({ show, setShow, id }) => {
    // const dispatch = useDispatch();
    const { user } = useSelector((state) => state?.settings)
    const dispatch = useDispatch();
    const password123 = sessionStorage.getItem("password"); 

    const fields = [
        {
            type:'input',
            disabled:true,
            name: 'currentpassword',
            placeholder:password123,
            title: 'Current Password',
        },
        {
            type:'input',
            name: 'new_password',
            placeholder: '********',
            title: 'New Password',
        },
        {
            type:'input',
            name: 'confirmpassword',
            placeholder: '********',
            title: 'Confirm Password',
        }
    ];

    return (
        <Modal
            heading="Update Password"
            cancelButtonText={false}
            fields={fields}
            initialValues={initialValues}
            validationSchema={validationSchema}
            submitText="Save Changes"
            handleSubmit ={async (values) => {
                dispatch(                   
                   UpdatePassword(values?.new_password,setShow)
                  
               )
           }
           }
            // handleSubmit={async () => {
            //     await dispatch(cancelRequestAtTheEnd(product?.id));
            //     setShow(false);
            // }}
            show={show}
            setShow={setShow}
        />
    );
};