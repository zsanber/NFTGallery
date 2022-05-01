import axios from 'axios';
import React,{ useEffect, useState} from 'react'
import { useForm } from 'react-hook-form';
import {Terms} from './Terms';
import {Welcome} from './Welcome';


export const Register=()=> {
    const [successful,setSuccessful]=useState(false)
    const [msg,setMsg]=useState('')
    const [validUsername,setValidUsername]=useState(true)
    const [validEmail,setValidEmail]=useState(true)

    useEffect(()=>{
        setMsg('')
        if(!validUsername)
          setMsg('username not available!')
        if(!validEmail)
          setMsg(msg+' email address already in use!')
      },[validUsername,validEmail])

    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const url='/authRoute/register'
        sendData(url,data)
      }

    const sendData =async (url,formdata)=>{
        const resp=await axios.post(url,formdata,{headers:{'Content-Type': 'application/json'}})
        const data=await resp.data
        resp.status===200 ? setSuccessful(true) : setSuccessful(false)
        setMsg(data.message)
      }

    const checkUsername=(e)=>{
        if(e.target.value.length>0){
          const url='/authRoute/checkUsername'
          sendUsername(url,{"username": e.target.value})
        }
      }
    const sendUsername=async (url,obj)=>{
        const resp=await axios.post(url,obj)
        const data=await resp.data[0]
        data.nr==1 ? setValidUsername(false):setValidUsername(true)
      }
    const checkEmail=(e)=>{
        if(e.target.value.length>0){
          const url='/authRoute/checkEmail'
          sendEmail(url,{"email": e.target.value})
        }
      }
    const sendEmail=async (url,obj)=>{
        const resp=await axios.post(url,obj)
        const data=await resp.data[0]
        data.nr==1 ? setValidEmail(false):setValidEmail(true)
      }


  return (
  <div className="reg">
    <div className="row justify-content-center mx-auto col-12">
      <div className="col-12">
        <div className="box col-sm-12 position-absolute top-50 start-50 translate-middle">
            <form className="col-sm-12" onSubmit={handleSubmit(onSubmit)}>
              <h3 className="text-secondary fw-bold mb-3">Not a member yet?</h3>
              <input {...register('username', { required: true, maxLength: 20 })}
                className="form-control rounded mt-4 border border-info rounded p-2" placeholder="Username" onBlur={(e) => checkUsername(e)} />
              {errors.userName && <p className="err text-danger small">Username is required</p>}
              <input {...register('email', { required: true })} className="form-control rounded mt-3 border border-info rounded p-2" placeholder="Email address"
                onBlur={(e) => checkEmail(e)} />
              {errors.email && <p className="err text-danger small">Email address is required</p>}
              <input type="password" {...register('password', { required: true })} className="form-control rounded mt-3 border border-info rounded p-2" placeholder="Password" />
              {errors.password && <p className="err text-danger small">Faulty password</p>}
              <input type="submit" value="Create account" className="btn btn-info form-control rounded fs-5 fw-bold text-white mt-5 mb-1"
                disabled={!validUsername || !validEmail} />
            </form>
            <div>{msg}</div>
        </div>
      </div>
      <div className="col-12 d-flex flex-column justify-content-end align-items-end fw-bold">
        <Terms />
      </div>
    </div>
  </div>
  )
}
