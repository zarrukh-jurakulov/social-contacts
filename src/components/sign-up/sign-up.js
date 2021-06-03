import React, {useState} from 'react'
import './style.css'
import {Link, useHistory} from 'react-router-dom'
import axiosClient from '../../helpers/axiosClient'
import * as Yup from "yup"
import {Formik, Form, Field, ErrorMessage} from 'formik'
import signUpLogo from '../../assets/sign-in-logo.jpg'

const Registration = () => {

  const signUpSchema = Yup.object().shape({
      username: Yup.string()
      .required("username is required")
      .min(2, "very short")
      .max(25, "very long"),

      first_name: Yup.string()
      .required("first name is required")
      .min(2, "very short")
      .max(25, "very long"),

      last_name: Yup.string()
      .required("last name is required")
      .min(2, "very short")
      .max(25, "very long"),

      email : Yup.string()
      .required("email is required")
      .email("invalid email format")
      .min(2, "very short")
      .max(25, "very long"),

      password : Yup.string()
      .required("password is required")
      .min(4, "very short")
      .max(25, "very long")
  }) 
    
  const initialValues = {
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    username: ""
  }

   
    let history = useHistory()
   
    return (
        <Formik
        initialValues = {initialValues}
        validationSchema = {signUpSchema}
        onSubmit={async (values)=>{
            await  axiosClient().post("/auth/register", {
                email: values.email,
                first_name: values.first_name,
                last_name: values.last_name,
                password: values.password,
                username: values.username,
            })
            .then((res) => {
              localStorage.token = res.data.token;
                console.log('res', res);
              if(res.status === 201){
                history.push("/")  
              }
            })
            .catch((err) => {
              console.log('err', err);
            });
        }}>
            {(formik) => {
                const {errors, touched, isValid, dirty} = formik
                return (
                    <div className="sign-up-page">
                      <div className="signUpLeftColumn">
                        <img src={signUpLogo} alt="signUpLogo" />
                      </div>
                      <div className="signUpRightColumn">
                        
                        <Form className="form-container-register">
                          <h1>Sign up here</h1>
                            <div className="form-row">
                                
                                <Field type="text" placeholder="Enter Username" name="username" id="username"  className={
                                     errors.username && touched.username ? "input-error" : null
                                     } /><br />
                                      <ErrorMessage name="username" component="span" className="error" />
                            </div>

                            <div className="form-row">
                              
                                <Field type="text" placeholder="Enter First Name" name="first_name" id="first_name"  className={
                                     errors.first_name && touched.first_name ? "input-error" : null
                                     } /><br />
                                      <ErrorMessage name="first_name" component="span" className="error" />
                            </div>

                            <div className="form-row">
                                
                                <Field type="text" placeholder="Enter Last Name" name="last_name" id="last_name"  className={
                                     errors.last_name && touched.last_name ? "input-error" : null
                                     } /><br />
                                      <ErrorMessage name="last_name" component="span" className="error" />
                            </div>

                            <div className="form-row">
                                
                                <Field placeholder="Enter Email" type="text" name="email" id="email"  className={
                                     errors.email && touched.email ? "input-error" : null
                                     } /><br />
                                      <ErrorMessage name="email" component="span" className="error" />
                            </div>

                            <div className="form-row">
                                
                                <Field placeholder="Enter password" type="text" name="password" id="password"  className={
                                     errors.password && touched.password ? "input-error" : null
                                     } /><br />
                                      <ErrorMessage name="password" component="span" className="error" />
                            </div>
                            <button id="loginBtn"
                                 type="submit"
                                 className={!(dirty && isValid) ? "disabled-btn" : ""}
                                 disabled={!(dirty && isValid)}>Submit</button>

                            <div className='changeDirection'>
                                <p>Already have an account? <Link to='/'>Login</Link> </p>
                            </div>
                        </Form>
                      </div>
                        
                    </div>
                )
            }}
            
        </Formik>
       
    )
}

export default Registration
