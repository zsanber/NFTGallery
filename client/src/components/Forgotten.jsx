import React from 'react'
import { useForm } from 'react-hook-form';
import {Terms} from './Terms';


export const Forgotten=()=> {
  const {
    register,
    handleSubmit,
    formState: { errors },
      } = useForm();
  const onSubmit = (data) => console.log(data);

    return (
        <div className="reg">
          <div className="row justify-content-center mx-auto col-12">
            <div className="col-12">
                <div className="box col-sm-12 position-absolute top-50 start-50 translate-middle">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="text-secondary fw-bold mb-3">Forgotten your password?</h3>
                        <span className="text-secondary ">No problem. Enter your email address and we will reset your password.</span>
                        <input {...register('email', { required: true })} className="form-control mt-4 border border-info rounded p-2" placeholder="Email address" />
                        {errors.email && <p className="err text-danger small">Email address required</p>}
                        <input type="submit" value="Submit" className="btn btn-info form-control rounded mt-5 mb-1 fs-5 fw-bold text-white" />
                    </form>
                </div>
            </div>
            <div className="col-12 d-flex flex-column justify-content-end align-items-end fw-bold">
              <Terms />
            </div>
          </div>
        </div>
  )
}