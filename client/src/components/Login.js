import React from 'react'
import { useForm } from 'react-hook-form';


export const Login=()=> {
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
                    <h2 className="text-secondary fw-bold mb-3">Welcome</h2>
                        <input {...register('email', { required: true })} className="form-control mt-4 border border-info rounded p-2" placeholder="Email address" />
                        {errors.email && <p className="err text-danger small">Email address required</p>}
                        <input type="password" {...register('password', { required: true })} className="form-control mt-4 border border-info rounded p-2" placeholder="Password" />
                        {errors.password && <p className="err text-danger small">Faulty password</p>}
                        <a className="text-info fw-bold text-decoration-none mb-4 p-2" href="/Forgotten">Forgot your password?</a>
                        <input type="submit" value="Login" className="btn btn-info form-control rounded mt-4 mb-1 fs-5 fw-bold text-white" />
                        <a className="text-info fw-bold text-decoration-none p-2" href="/Register">Not a member? Sign up Here!</a>
                    </form>
                </div>
            </div>
        </div>
  )
}
