import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import axiosClient from '../../helpers/axiosClient'
import { setToken } from '../../helpers/storages'
import {useHistory} from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import signInlogo from '../../assets/sign-in-logo.jpg'
import {signInRequest} from '../../redux/actions/sign-in-actions'


const SignInForm = () => { 

  const signInSchema = Yup.object().shape({

    username: Yup.string()
      .required("username is required")
      .min(2, "very short")
      .max(25, "very long"),
      
    password: Yup.string()
      .required("Password is required")
      .min(5, "Password is too short - should be 4 chars min")
      .max(25, "Should not exced 6 symbols")
      .uppercase("only uppercase accepted")
  })
    
  const initialValues = {
    username: "",
    password: ""
  };

 let history = useHistory()
 
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={async (values) => {
       // values.signInRequest()
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
                  
    }}>
    
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className="login-page">
            <div className="signInLeftColumn">
               <img src={signInlogo} alt="sign-in-logo" />
            </div>
            <div className="signInRightColumn">
             
            <Form className="form-container">
              <h1>Sign in to continue</h1>
              <div className="form-row">
                
                  <Field
                  placeholder="Enter username"
                  type="text"
                  name="username"
                  id="username"
                  
                  className={
                    errors.username && touched.username ? "input-error" : null
                  }
                  /><br />
                  <ErrorMessage name="username" component="span" className="error" />
              </div>

              <div className="form-row">
                
                <Field
                  placeholder="Enter password"
                  type="password"
                  name="password"
                  id="password"
                  className={
                    errors.password && touched.password ? "input-error" : null
                  }
                /><br />
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
              <p>You do not have an account ? <Link className="redirection" to='/registration'>Register</Link></p>
            </div>
            </Form> 
            </div>
            
          </div>
        );
      }}
     
    </Formik>
    
  );
};

export default SignInForm;


