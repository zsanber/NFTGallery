import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { NavLink, useParams } from 'react-router-dom';
import { Terms } from "./Terms";

export const Edit = ({ userId, categoryList }) => {
	const params = useParams()
	const { register, handleSubmit, formState: { errors } } = useForm();	
	const [successful, setSuccessful] = useState(false)
	const [msg, setMsg] = useState('')
	const [photo, setPhoto] = useState({})
	const [photoCategory, setPhotoCategory] = useState(0)

	useEffect(() => {
		fetchPhoto()
	}, [msg])

	const fetchPhoto = async () => {
		try {
			const resp = await axios.get(`http://localhost:5000/photos/photo/${params.id}`);
			setPhoto(resp.data[0])
			setPhotoCategory(resp.data[0].categorie_idcategorie)
		} catch (err) {
			console.error(err);
		}
	};

	const onSubmit = (data) => {
		const url = `http://localhost:5000/photos/${params.id}`
		sendData(url, data)
		fetchPhoto();
	}
	const sendData = async (url, data) => {
		const formData = new FormData()
		formData.append('title', data.title)
		formData.append('categ_id', data.categ_id)
		formData.append('story', data.story)
		const resp = await axios.put(url, formData)
		resp.status === 200 ? setSuccessful(true) : setSuccessful(false)
		setMsg(resp.data.message)
	}

	return (
		<div className="homeBackground">
			<div className="container py-2">
				<NavLink to="/" className="nav-link" aria-current="page" href="#">◀</NavLink>
				<div className="row justify-content-center mx-auto w-75 homeBox col-12 col-md-8 my-4 order-1" >
					{photo.image && <img src={photo.image} alt="hegy" className="  border p-0 rounded-3" />}
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="d-flex align-items-center">
							<input type="text" className="form-control m-2" placeholder="Title"
								{...register("title", { required: true })} defaultValue={photo.title} />
							<div className="err">{errors.title && <span> Title required</span>}</div>
							<input disabled={photoCategory == 0} className="btn btn-primary" type="submit" value="Save" />
						</div>
						<div className="row">
							<div className="col-md-6">
								<select className="form-select m-2" {...register("categ_id", { required: true })} 
										onChange={(event) => setPhotoCategory(event.target.value)}
										value={photoCategory} >
									{categoryList.map(obj => (
										<option key={obj.idcategorie} value={obj.idcategorie} >
											{obj.name}
										</option>
									))}
								</select>
							</div>
							<div className={successful ? "col-md-6 text-success" : "col-md-6 text-danger"}>{msg}</div>
						</div>
						<textarea name="" id="story" cols="30" rows="10" className="form-control m-2" defaultValue={photo.description}
							{...register("story", { required: true })} placeholder="Edit your story..." ></textarea>
						<div className="err">{errors.story && <span>Your story is missing...</span>}</div>
					</form>
				</div>
				<div className="col-12 d-flex flex-column justify-content-end align-items-end fw-bold mb-1 py-1">
					<Terms />
				</div>
			</div>
		</div>
	)
}
