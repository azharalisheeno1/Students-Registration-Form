import axios from 'axios';
import { Formik ,Form, Field, ErrorMessage} from 'formik';
// import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as Yup from 'yup'
function Create2() {
 

  const navigation=  useNavigate()

  const NewValidations=Yup.object({
    s_name:Yup.string().min(3).max(10).required("Name is Required"),
    s_age:Yup.number().min(10).max(50).required("Age is required"),
    s_email:Yup.string().email().required("Email is required")
  })
   return (
    <>
    
   
  
      <div className='border-2 md:w-[600px] w-[320px] mx-auto my-5 bg-gray-300'>
        <div>
          <h1 className='text-center bg-blue-500 text-white text-2xl p-2'>Create Data</h1>
        
<div className="flex items-center justify-center p-12">
 
  <div className="mx-auto w-full max-w-[550px]">
    <Formik validationSchema={NewValidations}  initialValues={{ s_name: "", s_email: "", s_age: "", }}
  onSubmit={(values, { setSubmitting }) => {
    axios.post('https://66212f553bf790e070b22200.mockapi.io/crud', {
        s_name: values.s_name,
        s_email: values.s_email,
        s_age: values.s_age
      })
      .then(() => {
        // Assuming navigation is a function to navigate to a different route
        // If not, replace navigation('/') with appropriate navigation logic
        navigation('/');
      })
      .catch(error => {
        console.error('Error:', error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  }} >
    <Form  >
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Full Name
        </label>
        <Field
          
          type="text"
          name="s_name"
          id="name"
          placeholder="Full Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
         
        />
        <ErrorMessage name='s_name'></ErrorMessage>
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Email Address
        </label>
        <Field
       
          type="text"
          name="s_email"
          id="email"
          placeholder="example@domain.com"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
         <ErrorMessage name='s_email'></ErrorMessage>
      </div>
      <div className="mb-5">
        <label
          htmlFor="age"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
         Age
        </label>
        <Field
       
          type="number"
          name="s_age"
         
          placeholder="Enter your Age"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
         <ErrorMessage name='s_age'></ErrorMessage>
      </div>
     
      <div>
        <button type='submit'
          className="hover:shadow-form rounded-md bg-blue-500 py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Submit Data
        </button>
      </div>
    </Form>
    </Formik>
  </div>
</div>


        </div>
      </div>
      <div className='mb-5 mx-auto mt-10 w-fit'>
     
     <Link to='/'>
     <button className='text-white text-2xl px-10 py-3 w-[500px] rounded-xl   bg-blue-500'>Read Data</button>
     </Link>
     
    </div> 
    </>
  )
}

export default Create2