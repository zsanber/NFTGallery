import React from 'react'
import { useForm } from 'react-hook-form';


export const Register=()=> {
  const {
    register,
    handleSubmit,
    formState: { errors },
      } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
      <div className="reg">
          <div className="position-absolute top-50 start-50 translate-middle">
              <div className="box">
                  <form onSubmit={handleSubmit(onSubmit)}>
                      <h3 className="text-secondary fw-bold mb-3">Not a member yet?</h3>    
                      <input {...register('userName', { required: true })} className="form-control rounded mt-4 border border-info rounded p-2" placeholder="Username" />
                      {errors.userName && <p className="err text-danger small">Username is required</p>}
                      <input {...register('email', { required: true })} className="form-control rounded mt-3 border border-info rounded p-2" placeholder="Email address" />
                      {errors.email && <p className="err text-danger small">Email address is required</p>}
                      <input type="password" {...register('password', { required: true })} className="form-control rounded mt-3 border border-info rounded p-2" placeholder="Password" />
                      {errors.password && <p className="err text-danger small">Faulty password</p>}
                      <input type="submit" value="Create account" className="btn btn-info form-control rounded fs-5 fw-bold text-white mt-5 mb-1" />
                  </form>
              </div>
          </div>
      </div>
  )
}
