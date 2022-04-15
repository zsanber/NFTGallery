import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import {Terms} from './Terms';


export const Login=({ setUser, setUserName, setUserId })=> {
  const {register, handleSubmit, formState: { errors },} = useForm();
  const [successful, setSuccessful] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    successful ? setUser(true) : setUser(false)
  }, [successful])

  const onSubmit = (data) =>{
    console.log(data);
    let url = '/auth/login'
    sendData(url, data)
  }

  const sendData = async (url, formdata) => {
    try {
      const resp = await axios.post(url, formdata, { headers: { 'Content-Type': 'application/json' } })
      const data = await resp.data
      setSuccessful(true)
      setUserName(data.username)
      setUserId(data.userId)
    } catch (err) {
      console.log(err.message);
      console.log(err.response.status)
      if (err.response.status == 401) {
        setSuccessful(false)
        setUserName('')
        setMsg(err.response.data.message)
      } else
        setMsg(err.message)
    }
  }

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
                    <div>{msg}</div>
                </div>
            </div>
            <Terms />
        </div>
  )
}
