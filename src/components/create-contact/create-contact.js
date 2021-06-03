import React, {useState} from 'react'
import './style.css'
import axiosClient from '../../helpers/axiosClient'
import { useHistory } from "react-router-dom";
import logo from '../../assets/contact.jpg'
import * as Yup from "yup"
import {Formik, Form, Field, ErrorMessage} from 'formik'

const CreateContact = () => {
  
    const [alert, setAlert] = useState("")

    let history = useHistory();

    const signUpSchema = Yup.object().shape({
        first_name: Yup.string()
        .required("First Name is required")
        .min(2, "very short")
        .max(25, "very long"),
  
        last_name: Yup.string()
        .required("Last Name is required")
        .min(2, "very short")
        .max(25, "very long"),
  
        country: Yup.string()
        .required("Country Name is required")
        .min(2, "very short")
        .max(25, "very long"),
  
        phone_number : Yup.string()
        .required("Phone Number is required")
        .min(4, "very short")
        .max(25, "very long")
    }) 

    const initialValues = {
        first_name: "",
        last_name: "",
        country: "Uzbekistan",
        phone_number: "+998"
      }

    return (
        <Formik
        initialValues = {initialValues}
        validationSchema = {signUpSchema}
        onSubmit={async (values)=>{
            await  axiosClient().post("/contacts/", {
                country_code: values.country,
                first_name: values.first_name,
                last_name: values.last_name,
                phone_number: values.phone_number,
             
            })
            .then((res) => {
              
              console.log('res', res);
              if(res.status === 201) {
                  setAlert("Contact is created !")
                  history.goBack()
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
                        <img src={logo} alt="signUpLogo" />
                      </div>
                      <div className="signUpRightColumn">
                        
                        <Form className="form-container-register">
                         
                            

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
                                
                                <Field placeholder="Enter Country" type="text" name="country" id="country"  className={
                                     errors.country && touched.country ? "input-error" : null
                                     } /><br />
                                      <ErrorMessage name="country" component="span" className="error" />
                            </div>

                            <div className="form-row">
                                
                                <Field placeholder="Enter Phone Number" type="text" name="phone_number" id="phone_number"  className={
                                     errors.phone_number && touched.phone_number ? "input-error" : null
                                     } /><br />
                                      <ErrorMessage name="phone_number" component="span" className="error" />
                            </div>
                            <button id="loginBtn"
                                 type="submit"
                                 className={!(dirty && isValid) ? "disabled-btn" : ""}
                                 disabled={!(dirty && isValid)}>Submit</button>

                            
                        </Form>
                      </div>
                        
                    </div>
                )
            }}
              
        </Formik>
      
    )
}

export default CreateContact