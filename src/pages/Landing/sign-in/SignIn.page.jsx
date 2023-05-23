import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Row, Col } from "antd";
import * as Yup from "yup";
import "./SignIn.page.scss";
import axios from "axios";

const fields = [
    {
        name: "username",
        label: "Email Address",
        placeholder: "Enter Your Email",
    },
    {
        name: "password",
        label: "Password",
        placeholder: "**********"
    },
];

const initialValues = {
    username: "",
    password: "",
};

const SignUpSchema = Yup.object().shape({
    username: Yup.string()
        .required("Email Address is required.")
        .email("Email format not recognized."),
    password: Yup.string()
        .required("password is required.")
        .min(5, "Password must be atleast 8 characters"),
});

function SignIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const REACT_API_BASE_URL = sessionStorage.getItem("URL");
  
    const login = (username, password) => {
        return async () => {
            const response = await axios.post(
                `${REACT_API_BASE_URL}/authenticate`, { username, password }, {
                headers: new Headers({
                    "Content-type": "application/json"
                }),
            }
            );
            if (response?.status === 200) {
                navigate(`/dashboard`);
                sessionStorage.setItem("token", response?.data?.token);
            }

        }
    };

    return (
        <div className="w-screen min-height">
            <Row className="" style={{ height: "100%" }}>
                <Col lg={12}>
                    <div className="p-0">
                        <p className="logoname">
                            Wow<span style={{ color: "#F08EDB" }}>Hostel</span>
                        </p>
                    </div>
                    <div className="mx-0 col mb-15">
                        <img src="/img/logo_women.jpg" className="mx-auto-robotimg" alt="" />
                    </div>
                </Col>
                <Col lg={12} className="p-4 page-responsiveness mt-4" style={{ background: "#0C0E0F" }}>
                    <div className="p-3 page-responsiveness">
                        <div className="p-4">
                            <h2 className="text-2xl text-white text-md title">Sign In</h2>
                            <p className="mb-4 custom-text-light subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={SignUpSchema}
                            onSubmit={async (values, { resetForm }) => {
                                try {
                                    await dispatch(login(values.username, values.password));
                                } catch (err) { }
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form className="w-full">
                                    {fields.map((field) => {
                                        return (
                                            <div className="p-4 pt-3" key={field?.name}>
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
                                                    className="input-length w-full h-12 px-3 text-gray-400 rounded-md input placeholder:text-gray-400 placeholder:text-sm placeholder:font-light focus:outline-none"
                                                    id={field?.name}
                                                    name={field?.name}
                                                    placeholder={field?.placeholder}
                                                />
                                            </div>
                                        );
                                    })}
                                    <div className="p-4" style={{ paddingTop: "5%" }}>
                                        <div className='row'>
                                            <div className="col-lg-6 col-sm-12">
                                                <button
                                                    type="button"
                                                    className="mt-4 p-2 cancelButton hover:#F08EDB text-white w-full mb-2 rounded-md h-14 hover:bg-pink-600/[.8] ease-in duration-200"
                                                    onClick={() => {
                                                        navigate("/landing/sign-up");
                                                    }}
                                                >
                                                    Create an Account
                                                </button>
                                            </div>
                                            <div className="col-lg-6 col-sm-12">
                                                <button
                                                    type="submit"
                                                    className="mt-4 p-2 submitButton hover:bg-blue-700 text-white w-full mb-2 rounded-md h-14 hover:bg-pink-600/[.8] ease-in duration-200"
                                                >
                                                    Sign In
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-5 forgotpwd">
                                        <Link to="/forgot-password"> Forgot your Password? </Link>
                                        <Link to="/forgot-password" className="text-pink-400">
                                            {" "}
                                            Reset Password
                                        </Link>
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

export default SignIn;
