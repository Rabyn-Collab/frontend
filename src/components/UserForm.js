import React, { useState } from 'react'
import { Input, Button, Checkbox, Option, Select, Textarea } from "@material-tailwind/react";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import { Radio } from "@material-tailwind/react";
import * as Yup from 'yup';

const UserForm = () => {

  const [data, setData] = useState([]);
  const nav = useNavigate();

  const userSchema = Yup.object({
    //email: Yup.string().email('').required('add required'),
    username: Yup.string().min(5).max(20).required(),
    image: Yup.mixed().test('fileType', 'invalid image', (e) => {

      return ['image/jpg', 'image/png', 'image/jpeg'].includes(e.type);
    })
  });

  const formik = useFormik({

    initialValues: {
      email: '',
      username: '',
      subject: '',
      habits: [],
      country: '',
      msg: '',
      image: ''
    },

    onSubmit: (val, { resetForm }) => {
      console.log(val);

      // setData((prev) => [...prev, val]);
      // resetForm();
      // // nav('/about');
    },
    //validationSchema: userSchema

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
            {/* {formik.errors.email && <h1>{formik.errors.email}</h1>} */}
          </div>

          <Input
            onChange={formik.handleChange}
            value={formik.values.username}
            label="Username"
            name='username'
          />

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
          </div>

          <div className="flex w-72 flex-col gap-6">
            <Select size="md" label="Select Country" name='country' onChange={(e) => formik.setFieldValue('country', e)} >
              <Option value='nepal'>Nepal</Option>
              <Option value='india'>India</Option>
              <Option value='china'>China</Option>
            </Select>
          </div>



          <div className="w-96">
            <Textarea label="Message" name='msg' value={formik.values.msg} onChange={formik.handleChange} />
          </div>




          <div className='space-y-2'>
            <h1>Select An Image</h1>

            <Input
              label="Image File"
              onChange={(e) => {

                const file = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.addEventListener('load', (e) => {

                })
                // console.log(e.target.value);
                //const url = URL.createObjectURL(file)
                formik.setFieldValue('image', file);
              }}
              value={formik.values.email}
              type='file'
              name='image'
              multiple
              accept='image/*'
            />
            {formik.errors.image && <h1 className='text-pink-700'>{formik.errors.image}</h1>}
            {/* {formik.values.image && <img src={formik.values.image} alt="" />} */}
          </div>



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