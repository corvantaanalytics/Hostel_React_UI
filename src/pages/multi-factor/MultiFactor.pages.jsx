import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { Row, Col, InputNumber } from 'antd';
import './MultiFactor.pages.scss'

const initialValues = {
    otp1: '',
    otp2: '',
    otp3: '',
    otp4: '',
    otp5: '',
    otp6: ''
};


const fields = [
    { name: 'otp', label: 'OTP', placeholder: '**********' },
];


function MultiFactor() {
    const tempt_token = sessionStorage.getItem("temp_token");
    const loggedInEmail = sessionStorage.getItem("email");
    const dispatch = useDispatch();
    const verifyMFAOtp = (otp) => {
        return async (dispatch, getState) => {
            const currentToken = sessionStorage.getItem("token");
            const response = await fetch(
                `apilinkusers/verify-otp/?otp=${otp}?email=${loggedInEmail}?temp_token=${tempt_token}`,
                {
                    method: 'POST',
                    headers: new Headers({
                        'Content-type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Authorization': `Bearer ${currentToken}`,
                        'x-api-key': 'qwertyuioasdfghjklzxcvbnm'
                    }),
                }
            );
        };
    };

    return (
        <div className="w-screen" >
            <Row className='bg-color' style={{ height: '100%' }}>
                <Col lg={12}>
                    <div className='p-0'>
                        <p className="logoname">WOw<span style={{ color: '#F08EDB' }}>Hostel</span></p>
                    </div>
                    <div className="col mx-0 mb-15">
                        <img src="/img/logo.svg" className="robotimg-mx-auto" alt="" />
                    </div>
                </Col>
                <Col lg={12} className="p-4 page-responsiveness" style={{ background: '#0C0E0F' }}>
                    <div className="p-5 page-responsiveness">
                        <div className="p-4">
                            <h2 className="text-md text-2xl text-white title">
                                Multi Factor Authentication
                            </h2>
                            <p className="custom-text-light mb-4 subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <Formik

                            initialValues={initialValues}
                            onSubmit={async (values, { resetForm }) => {
                                try {
                                    const {otp1,otp2,otp3,otp4,otp5,otp6} = values
                                    const otp = Number(`${otp1}${otp2}${otp3}${otp4}${otp5}${otp6}`)
                                    await dispatch(
                                        verifyMFAOtp(otp)
                                    )
                                } catch (err) {

                                }
                            }}
                        >
                            {({ errors, touched, initialValues, setFieldValue }) => (
                                < Form className='px-4 w-full h-full'>
                                    <div className="box-Num pt-3">

                                        <InputNumber
                                            controls={false}
                                            size='large'
                                            className='numberfield input mr-5'
                                            name={"otp1"}
                                            type={"number"}
                                            onChange={value => {
                                                setFieldValue('otp1', value);
                                            }}
                                            defaultValue={initialValues['otp1']}
                                        />
                                        <InputNumber controls={false} size='large' type={"number"} name={"otp2"} className='numberfield input mr-5' onChange={value => {
                                            setFieldValue('otp2', value);
                                        }}
                                            defaultValue={initialValues['otp2']} />
                                        <InputNumber controls={false} size='large' type={"number"} name={"otp2"} className='numberfield input mr-5' onChange={value => {
                                            setFieldValue('otp3', value);
                                        }}
                                            defaultValue={initialValues['otp3']} />
                                        <InputNumber controls={false} size='large' type={"number"} name={"otp2"} className='numberfield input mr-5' onChange={value => {
                                            setFieldValue('otp4', value);
                                        }}
                                            defaultValue={initialValues['otp4']} />
                                        <InputNumber controls={false} size='large' type={"number"} name={"otp2"} className='numberfield input mr-5' onChange={value => {
                                            setFieldValue('otp5', value);
                                        }}
                                            defaultValue={initialValues['otp5']} />
                                        <InputNumber controls={false} size='large' type={"number"} name={"otp2"} className='numberfield input mr-5' onChange={value => {
                                            setFieldValue('otp6', value);
                                        }}
                                            defaultValue={initialValues['otp6']} />

                                    </div>
                                    <div className="MFA-button pr-6" style={{ marginTop: '50%' }}>

                                        <button
                                            type="submit"
                                            className=" mt-4 submitButton hover:bg-blue-700 text-white w-full mb-2 rounded-md h-14 hover:bg-pink-600/[.8] ease-in duration-200"
                                        >
                                            Continue to Pansophy
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

export default MultiFactor;
