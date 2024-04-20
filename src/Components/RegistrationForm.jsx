import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import {  useNavigate ,NavLink} from 'react-router-dom';
import profile from '../assets/bg.jpg'
import axios from 'axios';
function RegistrationForm() {

  const navigation=  useNavigate();
  const NewValidations=Yup.object({
    fullname:Yup.string().min(3).max(15).required("Full Name is Required"),
    fathername:Yup.string().min(3).max(20).required("Name is Required"),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    age:Yup.number().positive().integer().min(10).max(50).required("Age is required"),
    address:Yup.string().min(10).max(50).required("Address is Required"),
  })



  return (
    <>
<NavLink to='/' >
<button type='submit'className="text-white mt-2 mb-3 w-[400px] ml-[320px] bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2">Read All Students Data</button>

     </NavLink>

<div className=" mb-3">
    <div className="flex justify-between bg-white rounded-lg shadow-lg  overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div className="hidden lg:block  lg:w-1/2  bg-cover"
         >
          <img src={profile} alt="" />
        </div>
        <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">Student Registration Form</h2>
            
            
            <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 lg:w-1/4"></span>
                <p  className="text-xs text-center text-gray-500 uppercase"> Insert Your Data</p>
                <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            
            <Formik validationSchema={NewValidations} initialValues={{fullname:"",fathername:"",email:"",age:"",address:""}}  onSubmit={(values, { setSubmitting }) => {
    
      axios.post('https://66212f553bf790e070b22200.mockapi.io/crud', {
        fullname: values.fullname,
        fathername:values.fathername,
        email: values.email,
        age: values.age,
        address:values.address

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
              <Form>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                <Field name="fullname" className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
                <ErrorMessage name='fullname'></ErrorMessage>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Father's Name</label>
              <Field name="fathername" className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
              <ErrorMessage name='fathername'></ErrorMessage>
            </div>
            
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <Field name="email" className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
              <ErrorMessage name='email'></ErrorMessage>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Age</label>
              <Field name="age" className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="number" />
              <ErrorMessage name='age'></ErrorMessage>
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
              <Field name="address" as="textarea" className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" />
              <ErrorMessage name='address'></ErrorMessage>
            </div>


            <div className="mt-8">
                <button type='submit' className="bg-gray-700 text-white font-semibold py-2 px-4 w-full rounded hover:bg-gray-600">Register Student Data</button>
            </div>

              </Form>
            </Formik>
            
        </div>
    </div>
</div>
    
    </>
  )
}

export default RegistrationForm