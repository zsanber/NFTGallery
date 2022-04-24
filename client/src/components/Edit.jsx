import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { NavLink,useParams } from 'react-router-dom';
import { Terms } from "./Terms";

export const Edit = ({ userId,category }) => {
	const params = useParams()
	console.log('edit photos:', params)
	const { register, handleSubmit, formState: { errors }, reset } = useForm();
	const [photoCateg, setphotoCateg] = useState(0)
	const [successful, setSuccessful] = useState(false)
	const [msg, setMsg] = useState('')
	const [photo, setPhoto] = useState({})

	useEffect(() => {
		setphotoCateg(photo.categ_id)
	}, [photo])

	useEffect(() => {
		fetchPhoto()
	}, [msg])

	const fetchPhoto = async () => {
		try {
			const resp = await axios.get(`http://localhost:5000/photos/${params.photo.id}`);
			console.log('válasz:', resp.data[0])
			setPhoto(resp.data[0])
		} catch (err) {
			console.error(err);
		}
	};

	const onSubmit = (data) => {
		console.log('data-client side:', data);
		const url = `http://localhost:5000/photos/${photo.id}`
		sendData(url, data)
		reset()
	}
	const sendData = async (url, formdata) => {
		const formData = new FormData()
		formData.append('title', formdata.title)
		formData.append('categ_id', photoCateg)
		formData.append('story', formdata.story)
		const resp = await axios.put(url, formData)
		const data = await resp.data
		resp.status === 200 ? setSuccessful(true) : setSuccessful(false)
		setMsg(data.message)
	}
	console.log('editphoto', photo)
	console.log('photocateg=', photoCateg)


	return (
		<div className="homeBackground">
			<div className="container py-3">
				<NavLink to="/home" className="nav-link" aria-current="page" href="#">◀</NavLink>
				<div className="row justify-content-center mx-auto w-75 homeBox col-12 col-md-8 mt-5 order-1" >
					{photos.image && <img src={photo.image} alt="hegy" className="  border p-0 rounded-3" />}
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="d-flex align-items-center">
							<input type="text" className="form-control m-2" placeholder="Title"
								{...register("title", { required: true })} defaultValue={photo.title} />
							<div className="err">{errors.title && <span> Title required</span>}</div>
							<input disabled={photoCateg == 0} className="btn btn-primary" type="submit" value="Save" />
						</div>
						<div className="row">
							<div className="col-md-6">
								<select className="form-select m-2" {...register("categ_id")} onChange={(e) => setphotoCateg(e.target.value)} value={photoCateg}>
									{category.map(obj => (
										<option key={obj.id} value={obj.id} >
											{obj.name}
										</option>
									))}
								</select>
							</div>
							<div className={successful ? "col-md-6 text-success" : "col-md-6 text-danger"}>{msg}</div>
						</div>
						<textarea name="" id="story" cols="30" rows="10" className="form-control" defaultValue={photo.description}
							{...register("story", { required: true })} placeholder="Edit your story..." ></textarea>
						<div className="err">{errors.story && <span>Your story is missing...</span>}</div>
					</form>
				</div>
			</div>
			<div className="col-12 d-flex flex-column justify-content-end align-items-end fw-bold">
              <Terms />
      		</div>
		</div>
	)
}
