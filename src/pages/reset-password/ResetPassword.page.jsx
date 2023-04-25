import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './Reset-Password.scss';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Row, Col } from 'antd';
import axios from 'axios';
import { toast } from 'react-toastify';
;
const initialValues = {
    new_password: '',
    confirmPassword: '',
};

const SignUpSchema = Yup.object().shape({
    new_password: Yup.string()
        .required('password is required.')
        .min(6, 'Password must be atleast 6 characters'),
    confirmPassword: Yup.string()
        .required('Confirm Password is required.')
        .min(6, 'Password must be atleast 6 characters')
        .oneOf(
            [Yup.ref('new_password'), null],
            'Confirm Password must matches with Password'
        ),
});

const fields = [
    { name: 'new_password', label: 'Password', placeholder: '**********' },
    {
        name: 'confirmPassword',
        label: 'Confirm Password',
        placeholder: '**********',
    },
];



function ResetPassword() {

    const dispatch = useDispatch();
    const token = sessionStorage.getItem("ResetToken")

    useEffect(() => {
        const queryParameters = new URLSearchParams(window.location.search)
        const token = queryParameters.get("token")
        sessionStorage.setItem("ResetToken", token);
        if (token) {
            window.location.replace(`/reset-password`)
        }
    },);

    const passwordReset = (new_password) => {
        return async () => {
            const response = await axios.post(
                `apilinkreset-password`,
                { token, new_password },
                {
                    headers: new Headers({
                        'Access-Control-Allow-Origin': '*'
                    }),
                }
            );
            if (response?.status === 200) {
                toast.success("Password updated successfully")
            }
        };
    }


    return (
        <div className="w-screen min-height" >
            <Row className='bg-color'>
                <Col lg={12}>
                    <div className='p-0'>
                        <p className="logoname">WOw<span style={{ color: '#F08EDB' }}>Hostel</span></p>
                    </div>
                    <div className="col mx-0 mb-15">
                        <img src="/img/logo_women.jpg" className="logoimage" alt="" />
                    </div>
                </Col>
                <Col lg={12} className="p-4 page-responsiveness mt-4" style={{ background: '#0C0E0F' }}>
                    <div className=" p-5 page-responsiveness">
                        <div className="p-4 reset-name">
                            <h2 className="text-md text-2xl text-white title">
                                Reset Password
                            </h2>
                            <p className="custom-text-light mb-4 subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <Formik

                            initialValues={initialValues}
                            validationSchema={SignUpSchema}
                            onSubmit={async (values) => {
                                await dispatch(
                                    passwordReset(
                                        values.new_password,
                                    )
                                );
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form classname="w-full h-full">
                                    {fields.map((field) => {
                                        return (
                                            <div className="p-4" key={field?.name}>
                                                <div className='row'>
                                                    <div className='col-lg-6 col-sm-12'>
                                                        <label
                                                            htmlFor={field?.name}
                                                            className="form-label text-white font-light text-sm"
                                                        >
                                                            {field?.label}
                                                        </label>
                                                    </div>
                                                    <div className='col-lg-6 col-sm-12'>
                                                        {errors[field?.name] && touched[field?.name] ? (
                                                            <div className="text-red-650 text-sm align-left">
                                                                {errors[field?.name]}
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <Field
                                                    type={
                                                        field?.name === 'new_password' ||
                                                            field?.name === 'confirmPassword'
                                                            ? 'password'
                                                            : 'password'
                                                    }
                                                    className="input-length w-full h-12 input rounded-md placeholder:text-gray-400 text-gray-400 placeholder:text-sm px-3 placeholder:font-light focus:outline-none"
                                                    id={field?.name}
                                                    name={field?.name}
                                                    placeholder={field?.placeholder}
                                                />
                                            </div>
                                        );
                                    })}
                                    <div className="px-4" style={{ paddingTop: '25%' }}>

                                        <button
                                            type="submit"
                                            className=" mt-4 submitButton hover:bg-pink-500 text-white w-full mb-2 rounded-md h-14 hover:bg-pink-600/[.8] ease-in duration-200"
                                        >
                                            Reset Password
                                        </button>

                                    </div>

                                </Form>

                            )}

                        </Formik>
                    </div>
                </Col>
            </Row>


        </div>
    );
}

export default ResetPassword;
