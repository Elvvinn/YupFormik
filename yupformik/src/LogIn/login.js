import React from 'react'
import './login.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
function LogIn() {

    const reditem = () => {

        const inputemail = document.getElementByClassName("inputemail")
        inputemail.borderColor = "red"

    }


    return (

        <>
            <Formik
                initialValues={{ password: '', email: '', submit: '' }}
                validationSchema={Yup.object({

                    password: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Please write your password').trim(),
                    email: Yup.string().email('Invalid email address').required('The email or mobile number you entered isn’t connected to an account. Find your account and log in.').trim(),

                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >

                <Form>
                    <h2 className='titlefacebook'> Facebook </h2>
                    <div className='generalformik'>
                        <label htmlFor="email" className='logInto'>Log Into Facebook</label>
                        <Field name="email" type="email" className="inputemail" placeholder="Email or phone number" required />
                        <div style={{ color: "red", fontSize: " 25 " }}> <ErrorMessage name="email" /> </div>

                        <label htmlFor="password"></label>
                        <Field name="password" type="password" className="inputpassword" placeholder="Password" required />
                        <div style={{ color: " red ", fontSize: " 20 " }}> <ErrorMessage name="password" /> </div>

                        <button type="submit" className='LogInbtn' onClick={reditem} required>Log In</button>

                        <div className='fora'>
                            <Link to={"/"}> <a href='#'> Forgot password ?  </a> </Link>
                            <Link to={"/sign"}> <a href='#'> Sign up for Facebook </a> </Link>
                        </div>

                    </div>


                </Form>

            </Formik>

        </>
    )
}

export default LogIn