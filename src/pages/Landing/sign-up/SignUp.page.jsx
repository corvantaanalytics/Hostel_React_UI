import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { Formik, Form, Field } from "formik";
import { Row, Col } from "antd";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import './SignUp.page.scss';
import { AuthTokenKey } from "lib/constants";
import { toast } from "react-toastify";
import { VerifyYourEmail } from "pages/Dashboard/AllPopupmodel/VerifyYourEmail";

const initialValues = {
  full_name: '',
  email: '',
  phoneNumber: '',
  country: '',
  password: '',
};

const SignUpSchema = Yup.object().shape({
  full_name: Yup.string().required('Full Name is required.'),
  email: Yup.string()
    .required('Email Address is required.')
    .email('Email format not recognized.'),
  phoneNumber: Yup.string().required('Phone Number is required.'),
  country: Yup.string().required('Country is required.'),
  password: Yup.string()
    .required('password is required.')
    .min(6, 'Password must be atleast 8 characters'),
});

const fields = [
  { name: 'full_name', label: 'Full Name', placeholder: 'Paul Elliott' },
  { name: 'email', label: 'Email Address', placeholder: 'paul.elliott@fakemail.com' },
  { name: 'phoneNumber', label: 'Phone Number', placeholder: '219 - 666 - 0114' },
  { name: 'country', label: 'Country', placeholder: 'United states of America' },
  { name: 'password', label: 'Password', placeholder: '**********' },
];

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showAdd, setShowAdd] = useState(false);

  const signup = (
    full_name,
    email,
    phoneNumber,
    country,
    password,
  ) => {
    return async (dispatch) => {
      const response = await fetch(
        `apilinkusers/open`,
        {
          method: "POST",
          body: JSON.stringify({
            full_name,
            email,
            phoneNumber,
            country,
            password
          }),
          headers: new Headers({
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'x-api-key': 'qwertyuioasdfghjklzxcvbnm'
          }),
        }
      );
      if (response?.status === 200) {
        setShowAdd(true)
      }
      else {
        toast.error("Username already exists")
      }
    };
  };

  const navigateToSignIn = () => {
    navigate('/sign-in');
  }
  return (
    <div className="w-screen min-height">
      <VerifyYourEmail show={showAdd} setShow={setShowAdd} />
      <Row className='bg-color' style={{ height: "100%" }}>
        <Col lg={12}>
          <div className="screen-HW p-0">
            <p className="logoname">
              WOw<span style={{ color: "#F08EDB" }}>Hostel</span>
            </p>
          </div>
          <div className="mx-0 col mb-15">
            <img src="/img/logo_women.jpg" className="logoimage" alt="" />
          </div>
        </Col>
        <Col lg={12} className="p-4 page-responsiveness mt-4" style={{ background: "#0C0E0F" }}>
          <div className="p-5 page-responsiveness">
            <div className=" p-4">
              <h2 className="text-md text-2xl text-white title">
                Create An Account
              </h2>
              <p className="custom-text-light mb-4 subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={SignUpSchema}
              onSubmit={async (values, { resetForm }) => {
                await dispatch(
                  signup(
                    values.full_name,
                    values.email,
                    values.phoneNumber,
                    values.country,
                    values.password,
                  )
                );
              }}
            >
              {({ errors, touched }) => (
                <Form className="w-full">
                  {fields.map((field) => {
                    return (
                      <div className="pt-3 p-4" key={field?.name}>
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
                              <div className="text-red-600 text-sm align-left">
                                {errors[field?.name]}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <Field
                          type={
                            field?.name === "password" ||
                              field?.name === "confirmPassword"
                              ? "password"
                              : "text"
                          }
                          className="Input-Length w-full h-12 input rounded-md placeholder:text-gray-400 text-gray-400 placeholder:text-sm px-3 placeholder:font-light focus:outline-none"
                          id={field?.name}
                          name={field?.name}
                          placeholder={field?.placeholder}
                        />
                      </div>
                    );
                  })}
                  <div className="px-4" style={{ paddingTop: '5%' }}>
                    <div className='row'>
                      <div className="col-lg-6 col-sm-12">
                        <button
                          type="submit"
                          className="mt-4 p-2 cancelButton hover:bg-blue-700 text-white w-full mb-2 rounded-md h-14 hover:bg-pink-600/[.8] ease-in duration-200"
                          onClick={navigateToSignIn}
                        >
                          Sign in
                        </button>
                      </div>
                      <div className=" col-lg-6 col-sm-12">
                        <button
                          onClick={() => signup()}
                          type="submit"
                          className="mt-4 p-2 submitButton hover:bg-blue-700 text-white w-full mb-2 rounded-md h-14 hover:bg-pink-600/[.8] ease-in duration-200"
                        >
                          Create an Account
                        </button>
                      </div>
                    </div>
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

export default SignUp;
