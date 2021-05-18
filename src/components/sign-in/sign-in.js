import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import axiosClient from '../../helpers/axiosClient'
import { setToken } from '../../helpers/storages'
import {useHistory} from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";



const SignInForm = () => {

  const signInSchema = Yup.object().shape({

    username: Yup.string()
      .required("username is required")
      .min(2, "very short")
      .max(15, "very long"),
      
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password is too short - should be 4 chars min")
      .max(15, "Should not exced 6 symbols")
      .uppercase("only uppercase accepted")
  })
    
  const initialValues = {
    username: "",
    password: ""
  };

 let history = useHistory()
 
    // const logIn = () => {
    //         axiosClient().post("/auth/login", {
    //           username: signInSchema.password,
    //           password: signInSchema.password,
    //         }).then((res) => {
    //           setToken(res.data.token)
    //           //localStorage.token = ;
    //           console.log('>> response :', res);
    //           console.log("valuesss",signInSchema);
    //           if(res.status === 200){
    //             history.push("/profile")
    //           }

    //           console.log(res.status);
              
    //         })
    //         .catch((err) => {
    //           console.log('>> error :', err);
    //         });   
    // }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={async (values) => {
        await axiosClient().post("/auth/login", {
                username: values.username,
                password: values.password,
              }).then((res) => {
                setToken(res.data.token)
                  console.log('>> response :', res);
                  if(res.status === 200){
                  history.push("/profile")
                }
                })
                .catch((err) => {
                  console.log('>> error :', err);
                });   
                  console.log(">> input values :",values);
    }}>
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className="login-page">
            <h1>Sign in to continue</h1>
            <Form className="form-container">

              <div className="form-row">
                <label htmlFor="username">Username</label><br />
                  <Field
                  type="text"
                  name="username"
                  id="username"
                  className={
                    errors.username && touched.username ? "input-error" : null
                  }
                  />
                  <ErrorMessage name="username" component="span" className="error" />
              </div>

              <div className="form-row">
                <label htmlFor="password">Password</label><br />
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className={
                    errors.password && touched.password ? "input-error" : null
                  }
                />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="error"
                />
              </div>

              <button id="loginBtn"
                type="submit"
                className={!(dirty && isValid) ? "disabled-btn" : ""}
                disabled={!(dirty && isValid)}
              >
                Sign In
              </button>

              <div className='directToRegiter'>
              <p>You do not have account ? <Link to='/registration'>Register</Link></p>
            </div>
            </Form>
          </div>
        );
      }}
     
    </Formik>
    
  );
};

export default SignInForm;


