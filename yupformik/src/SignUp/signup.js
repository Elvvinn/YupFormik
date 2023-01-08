import React from 'react'
import './signup.css'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
function SignUp() {
    return (
        <>

            <div className='generalsectiondiv'>

                <h1 className='titleface'>  facebook </h1>

                <div className='mainsection'>
                    <h4 className='create'> Create a new account </h4>
                    <p className='it'> It's quick and easy.</p>
                    <hr />
                    <Formik
                        initialValues={{ firstName: '', lastName: '', email: '', password: '', radio: '', gender: '' }}
                        validationSchema={Yup.object({
                            firstName: Yup.string()
                                .max(15, 'Must be 15 characters or less')
                                .required('Please write your First Name!!'),
                            lastName: Yup.string()
                                .max(20, 'Must be 20 characters or less')
                                .required('Please write your Last Name!!'),
                            email: Yup.string().email('Invalid email address').required('Please write your email!!'),
                            password: Yup.string()
                                .max(20, 'Must be 20 characters or less')
                                .required('Please write your password!!'),
                            radio: Yup.string()
                                .required('select a date !!'),
                            gender: Yup.string()
                                .required('choose a gender !! '),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        <Form>
                            <div className='upinp'>
                                <label htmlFor="firstName"></label>
                                <Field name="firstName" type="text" placeholder="First Name" className="firstname" required />
                                <div style={{ color: "red" }}> <ErrorMessage name="firstName" /> </div>

                                <label htmlFor="lastName"></label>
                                <Field name="lastName" type="text" placeholder="Last Name" className="lastname" required />
                                <div style={{ color: "red" }}> <ErrorMessage name="lastName" /> </div>
                            </div>

                            <div className='emailandpass'>
                                <label htmlFor="email"></label>
                                <Field name="email" type="email" placeholder="email" className="emailinp" required />
                                <div style={{ color: "red" }}> <ErrorMessage name="email" /> </div>

                                <label htmlFor="password"></label>
                                <Field name="password" type="password" placeholder="New Password" className="passwordinp" required />
                                <div style={{ color: "red" }}> <ErrorMessage name="password" /> </div>
                            </div>
                            <label>
                                <input type="date" id="birthday" name="birthday" value={"2023-01-09"} required></input>
                                <div style={{ color: "red" }}> <ErrorMessage name="radio" /> </div>
                            </label>

                            <div role="group" aria-labelledby="my-radio-group" className='genderchoose' name='gender' required>
                                <div style={{ color: "red" }}> <ErrorMessage name="gender" /> </div>
                                <div className='femalegender' required>
                                    <label>
                                        Female
                                        <Field type="radio" name="picked" value="One" className="redfemale" />
                                    </label>
                                </div>
                                <div className='malegender'>
                                    <label>
                                        Male
                                        <Field type="radio" name="picked" value="Two" className="redmale" required />
                                    </label>
                                </div>

                                <div className='customgender'>
                                    <label>
                                        Custom
                                        <Field type="radio" name="picked" value="Two" className="redcustom" required />
                                    </label>
                                </div>
                            </div>
                            <p className='firstp'> People who use our service may have uploaded your contact information to Facebook. <a href='https://www.facebook.com/help/637205020878504' target={"_blank"} className="learnmore"> Learn more. </a> <br /> </p>
                            <p className='lastp'> By clicking Sign Up, you agree to our <a href='https://www.facebook.com/legal/terms/update' target={"_blank"} className="terms"> Terms, </a> <a href='https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0' target={"_blank"} className="privacy"> Privacy Policy </a>  and <a href='https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0' target={"_blank"} className="cookies"> Cookies Policy </a>. You may receive SMS Notifications from us and can opt out any time.</p>
                            <div className='lastdiv'>
                                <button type="submit">Sign Up</button>
                                <Link to={"/"}> <a href='#' className='already'>Already have an account?</a> </Link>
                            </div>
                        </Form>
                    </Formik>

                </div>
            </div>
        </>
    )
}

export default SignUp