import React, { useState } from 'react'
import './SearchBar.css'



export const SearchBar = ({ placeholder, setPhotosFiltered, photos}) => {

    const [wordEntered, serWordEntered] = useState('')
    

    const handleFilter = (event) => {
        const word = event.target.value
        serWordEntered(word)
        if (word == '')
            setPhotosFiltered(photos)
        else {


            console.log(wordEntered)
            const newArr = photos.filter(obj => obj.title.toLowerCase().includes(word.toLowerCase()))
            if (newArr.length > 0)

                setPhotosFiltered(newArr)
            else{
                console.log('nincs találat')
                setPhotosFiltered(photos)
            }

        }
       
    }
    const handleClear = () => {

        serWordEntered('')
        setPhotosFiltered(photos)
    }
    console.log(wordEntered)
    return (
        <div>
            <div className="searchbar d-flex justify-content-between border rounded">
                <input className="input p-1" type="text" value={wordEntered} onChange={handleFilter} />
                {wordEntered === "" ? <i className="fa-solid fa-magnifying-glass"></i> :
                    <i className="fa-solid fa-x" onClick={handleClear}></i>}
            </div>


        </div>
    )
}
