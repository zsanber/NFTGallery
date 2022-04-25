import React,{useState, useContext} from 'react'
import {useForm} from 'react-hook-form';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import { validateImage } from "image-validator";
import { Terms } from "./Terms";


export const Upload=({userId,categoryList})=> {
	const { register, handleSubmit, formState: { errors } } = useForm();
  const [photoCategory,setPhotoCategory]=useState(0)
  const [successful,setSuccessFul]=useState(false)
  const [msg,setMsg] =useState('')
  const [selFile,setSelFile] = useState({})

  const onSubmit = (data) =>{
    if(selFile.length>0)
        verify(data,selFile[0])
  } 

  /*const onSubmit = (data) => {
    console.log("kliens oldal: ", data);
    let url = '/posts'
    sendData(url, data)
    reset()
  }*/

  const verify=async (data,file)=>{
    console.log('verify:',file)
    const isValidImage = await validateImage(file);
    isValidImage && sendData('/photos',data)//amikor megvan a válasz csak akkor menjen a kérés a szerverre
  }
  
  const sendData=async (url, data) =>{
    const formData=new FormData()
    formData.append('image',selFile[0])
    formData.append('title',data.title)
    formData.append('user_id',data.user_id)
    formData.append('categ_id',data.categ_id)
    formData.append('story',data.story)
    try {
      const resp=await axios.photos(url,formData)
      const data=await resp.data
      console.log(data)
      setMsg(data.message)
      resp.status===200 ? setSuccessFul(true):setSuccessFul(false)
    }catch(e){
      setSuccessFul(false)
      setMsg(`'Error while uploading' : ${e.message}`)
    }
  }
console.log('selFile=',selFile)
console.log('Filesize:',selFile.length>0 ? selFile[0].sizeReadable : 0)

  return (
    <div className="homeBackground">
      <div className="container py-2">
      <NavLink to="/" className="nav-link" aria-current="page" href="#">◀</NavLink>
        <div className="row justify-content-center mx-auto w-75 homeBox col-12 col-md-8 my-4 order-1" >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex align-items-center justify-content-between py-3 ">

              <label htmlFor="file"><i className="col-12" placeholder="File" role="button"></i></label>
              <input type="file" accept="image/*" className="form-control"
                {...register("image", { required: true })} />
              <div className="err">{errors.image && <span>No file found</span>}</div>

              {/*<div className="files">
                          <FileDrop setSelFile={setSelFile} setMsg={setMsg}/>
                    </div>*/}

              <input type="text" className="form-control m-2 photoTitle" placeholder="Title"
                {...register("title", { required: true })} />
              <div className="err">{errors.title && <span>Title required</span>}</div>

              <input type="text"  {...register("user_id")} hidden value={userId} />

              <input disabled={photoCategory === 0} type="submit" className="btn btn-primary m-2" value="Upload" />
            </div>
            <div className="row">
              <div className="col-md-6">
               <select  className="form-select mb-4" {...register("categ_id")} onChange={(e)=>setPhotoCategory(e.target.value)}>
              <option value="0">Choose a category...</option>
              {categoryList.map(obj=>(
                  <option key={obj.idcategorie} value={obj.idcategorie}>{obj.name}</option>
              ))}

            </select>
              </div>
              <div className={successful ? "col-md-6 text-success" : "col-md-6 text-danger"}>{msg}</div>
            </div>
            <textarea cols="30" rows="10" className="form-control"
              {...register("story", { required: true })} placeholder="Tell your story..."></textarea>
            <div className="err">{errors.story && <span>Your story is missing...</span>}</div>
          </form>
        </div>
        <div className="col-12 d-flex flex-column justify-content-end align-items-end fw-bold mb-1">
          <Terms />
        </div>
      </div>
      
    </div>
  )
}
