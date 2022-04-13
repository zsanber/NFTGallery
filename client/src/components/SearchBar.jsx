import React,{useState} from 'react'
import './SearchBar.css'
import {useNavigate} from 'react-router-dom'


export const SearchBar=({pleceholder,posts})=> {
    const navigate = useNavigate()
    const [wordEntered,serWordEntered]=useState('')
    const [filteredPosts,setFilteredPosts]=useState([])

    const handleFilter=(event)=>{
        const word=event.target.value
        serWordEntered(word)
        console.log(wordEntered)
        const newArr=posts.filter(obj=>obj.title.toLowerCase().includes(word.toLowerCase()))
        if(word!=='')
            setFilteredPosts(newArr)
        else
            setFilteredPosts([])
    }
    const handleClear=()=>{
        setFilteredPosts([])
        serWordEntered('')
    }
  return (
    <div>
        <div className="d-flex justify-content-between border rounded">
            <input  className="border p-2" type="text" value={wordEntered} onChange={handleFilter}/>
            {wordEntered===""? <i className="fa-solid fa-magnifying-glass"></i>:
                <i className="fa-solid fa-x" onClick={handleClear}></i>}
        </div>
        {/*modal*/}
        {filteredPosts.length!=0 && (
            <div className="backdrop" onClick={handleClear}>
                <div className="dataResult">
                    {filteredPosts.map(obj=>
                        <div key={obj.id} onClick={()=>navigate('/posts/'+obj.id)}>{obj.title}</div>
                        )}
                </div>
            </div>
        )}
      
    </div>
  )
}
