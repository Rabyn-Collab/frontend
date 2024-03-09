import React, { useState } from 'react'
import { Input, Button, Checkbox, Option, Select, Textarea } from "@material-tailwind/react";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { Radio } from "@material-tailwind/react";
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addUser } from '../features/userSlice';



const UserForm = () => {
  const dispatch = useDispatch();

  const nav = useNavigate();

  const userSchema = Yup.object({
    // email: Yup.string().matches(/^[a-z\s]{0,255}$/i, 'please provide valid mail').required('add required'),
    email: Yup.string().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'please provide valid mail').required('add required'),
    username: Yup.string().min(5).max(20).required(),
    image: Yup.mixed().test('fileType', 'invalid image', (e) => {
      return e && ['image/jpg', 'image/png', 'image/jpeg', 'image/webp'].includes(e.type);
    }),
    subject: Yup.string().required(),
    habits: Yup.array().min(1).required(),
    country: Yup.string().required(),
    msg: Yup.string().min(10).max(200).required()
  });


  const formik = useFormik({

    initialValues: {
      email: '',
      username: '',
      subject: '',
      habits: [],
      country: '',
      msg: '',
      image: null,
      imageRev: ""
    },

    onSubmit: (val, { resetForm }) => {

      dispatch(addUser({
        email: val.email,
        username: val.username,
        subject: val.subject,
        habits: val.habits,
        country: val.country,
        msg: val.msg,
        imageRev: val.imageRev,
        id: nanoid()
      }));

      nav(-1);

    },
    validationSchema: userSchema,

  });

  const programes = [
    { label: 'HTML', value: 'html', color: 'red' },
    { label: 'React', value: 'react', color: 'blue' },
  ];
  const habits = [
    { label: 'Dance', value: 'dance', color: 'red' },
    { label: 'Sing', value: 'sing', color: 'blue' },
    { label: 'Read', value: 'read', color: 'green' },
  ];


  return (
    <div className='p-10'>

      <form onSubmit={formik.handleSubmit}>
        <div className="w-72 space-y-5">
          <div>
            <Input
              label="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              type='email'

              name='email'
            />
            {formik.errors.email && formik.touched.username && <h1>{formik.errors.email}</h1>}
          </div>


          <div>
            <Input
              onChange={formik.handleChange}
              value={formik.values.username}
              label="Username"
              name='username'
            />

            {formik.errors.username && formik.touched.username && <h1>{formik.errors.username}</h1>}
          </div>



          <div className="rads">
            <h1>Choose Fav Subjects</h1>
            <div className="flex gap-5">

              {programes.map((p, i) => {
                return <Radio key={i}
                  name="subject"
                  onChange={formik.handleChange}
                  label={p.label} value={p.value} color={p.color} />;
              })}

            </div>
            {formik.errors.subject && formik.touched.subject && <h1>{formik.errors.subject}</h1>}
          </div>
          <div className="habs">
            <h1>Your Habits</h1>
            <div className="flex gap-5">

              {habits.map((p, i) => {
                return <Checkbox key={i}
                  name="habits"
                  onChange={formik.handleChange}
                  label={p.label} value={p.value} color={p.color} />;
              })}

            </div>
            {formik.errors.habits && formik.touched.habits && <h1>{formik.errors.habits}</h1>}
          </div>

          <div className="flex w-72 flex-col gap-6">
            <Select size="md" label="Select Country" name='country' onChange={(e) => formik.setFieldValue('country', e)} >
              <Option value='nepal'>Nepal</Option>
              <Option value='india'>India</Option>
              <Option value='china'>China</Option>
            </Select>
            {formik.errors.country && formik.touched.country && <h1>{formik.errors.country}</h1>}
          </div>



          <div className="w-96">
            <Textarea label="Message" name='msg' value={formik.values.msg} onChange={formik.handleChange} />
            {formik.errors.msg && formik.touched.msg && <h1>{formik.errors.msg}</h1>}
          </div>



          <Input
            onChange={(e) => {
              const file = e.target.files[0];
              formik.setFieldValue('image', file);
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.addEventListener('load', (e) => {
                formik.setFieldValue('imageRev', e.target.result);
              });
            }}
            label="Select An Image"
            name='image'
            type='file'
          />
          {formik.values.imageRev && <img src={formik.values.imageRev} alt="" />}
          {formik.errors.image && formik.touched.image && <h1>{formik.errors.image}</h1>}
          <Button type='submit' size='sm'>Submit</Button>
        </div>





      </form>


      {/* <div className="users mt-4 space-y-5">
        {data.map((user, i) => {
          return <div key={i} className='shadow-lg'>
            <h1>{user.email}</h1>
            <p>{user.username}</p>
            <button>Remove</button>
          </div>
        })}
      </div> */}





    </div>
  )
}

export default UserForm