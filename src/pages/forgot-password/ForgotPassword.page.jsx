import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Row, Col } from 'antd';
import { toast } from 'react-toastify';
import { VerifcationEmail } from 'pages/Dashboard/AllPopupmodel/VerificationEmail';
import './Forgot-password.scss';
const initialValues = {
    email: '',
};

const SignUpSchema = Yup.object().shape({
    email: Yup.string()
        .required('Email Address is required.')
        .email('Email format not recognized.'),
});

const fields = [
    { name: 'email', label: 'Email Address', placeholder: 'paul.elliott@fakemail.com' },
];


function ForgotPassword() {
    const currentToken = sessionStorage.getItem("token");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showAdd, setShowAdd] = useState(false);

    const passwordRecovery = (email)=> {
        return async (dispatch) => {
            try{
                const response = await fetch(
                    `apilinkpassword-recovery/${email}`,
                    {
                        method: 'POST',
                        headers: new Headers({
                            'Access-Control-Allow-Origin': '*',
                            'Authorization': `Bearer ${currentToken}`,
                            'x-api-key': 'qwertyuioasdfghjklzxcvbnm'
                        }),

                    }
                );
                const res = await response.json();

                if (response?.status === 200) {
                    setShowAdd(true)
                 }
            }catch(e) {
                console.error(e)
                toast.error("Email Not Registered")
            }
        };
    }

    return (
      <div className="w-screen min-height">
        <VerifcationEmail show={showAdd} setShow={setShowAdd} />
        <Row className="bg-color" style={{ height: "100%" }}>
          <Col lg={12}>
            <div className="p-0">
              <p className="logoname">
                WOw<span style={{ color: "#F08EDB" }}>Hostel</span>
              </p>
            </div>
            <div className="col mx-0 mb-15 ">
            <img src="/img/logo_women.jpg" className="logoimage" alt="" />
            </div>
          </Col>
          <Col lg={12} className="p-4 mt-4" style={{ background: "#0C0E0F" }}>
            <div className="frgt-screen p-8 page-responsiveness ">
              <div className="p-4 page-responsiveness">
                <h2 className="text-md text-2xl text-white title">
                  Forgot Password
                </h2>
                <p className="custom-text-light mb-4 subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={SignUpSchema}
                onSubmit={async (values, { resetForm }) => {
                  await dispatch(passwordRecovery(values.email));
                }}
              >
                {({ errors, touched }) => (
                  <Form className="w-full h-full">
                    {fields.map((field) => {
                      return (
                        <div className="pt-3 py-4" key={field?.name}>
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
                            className="input-length w-full h-12 input rounded-md placeholder:text-gray-400 text-gray-400 placeholder:text-sm px-3 placeholder:font-light focus:outline-none"
                            id={field?.name}
                            name={field?.name}
                            placeholder={field?.placeholder}
                          />
                        </div>
                      );
                    })}
                    <div className="pr-4">
                      <div style={{ paddingTop: "50%" }}>
                        <button
                          // onClick={() => setShowAdd(true)}
                          type="submit"
                          className="mt-4 submitButton hover:bg-pink-500 text-white w-full mb-2 rounded-md h-14 hover:bg-pink-600/[.8] ease-in duration-200"
                        >
                          Send Email
                        </button>
                      </div>
                      <div className="forgotpwd pt-5 Receive-email">
                        <Link to="#"> Didn't receive email? </Link>
                        <Link
                          to="/reset-password"
                          className="text-pink-400  Resend-email"
                        >
                          {" "}
                          Resend Email
                        </Link>
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

export default ForgotPassword;