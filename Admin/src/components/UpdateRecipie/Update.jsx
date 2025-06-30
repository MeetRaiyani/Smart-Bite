import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { RiArrowDropDownLine } from "react-icons/ri";
import toast from 'react-hot-toast';
const Update = () => {
  const {id} = useParams();
  
  const[foodDetail,setFoodDetail]=useState({})
  const [drowDown,setDropDown] = useState(false)
  const [update,setUpdate] = useState(false)

  const fetchdata = async () => {
    const response = await axios.post("http://localhost:8000/api/foodItem/fetch-food",{id});
    if(response.data.success){
      setFoodDetail(response.data.data);
     
    }
    else
    {
     toast.error("Error")
    }
 }

const handleSubmit = async (e)=>{
  e.preventDefault();
  const {_id,name,description,category,price} = foodDetail;
  const data = {_id,name,description,category,price}
  console.log(data);
  const response = await axios.post("http://localhost:8000/api/foodItem/update",data);

  if(response.status==200){
    toast.success("Recipy Updated Successfully");
    setUpdate(true)
  }
}


  useEffect(()=>{
    fetchdata();
  },[])
 
  return (
    <div className='flex flex-col lg:py-[90px] sm:py-[40px] max-sm:py-[40px] lg:px-[80px] max-sm:px-[20px] sm:px-[20px] md:px-[40px] w-full h-full overflow-x-auto'>
      <div className='flex justify-center items-center w-full mb-8'>
        <h1 className='text-3xl font-semibold'>Update <span className="text-orange"> Recipies </span></h1>
      </div>
      <form onSubmit={(e)=>handleSubmit(e)} className='w-full h-full'>
        <div className='image-container relative gap-2 w-fit flex flex-col items-start justify-center'>
          <label htmlFor="image">Update Image</label>
          <img 
          src={foodDetail.image} 
          alt="" 
          className='h-[70px] w-[70px] object-cover object-center rounded-md'
          />

        </div>
        <div className='flex mt-5 gap-3 flex-col w-full'>
          <div className='flex flex-col gap-1'>
          <label htmlFor="name">Name</label>
          <input type="text" className='rounded-md bg-transparent outline-none border-[1px] px-3 py-2 text-white-400 lg:w-[90%] sm:w-[90%]' id='name' value={foodDetail.name} onChange={(e)=>setFoodDetail({...foodDetail,name:e.target.value})}/>
          </div>
          <div className='max-sm:flex-col flex-auto lg:gap-5 w-[90%] lg:flex'>
            <div className='flex flex-col w-full gap-1'>
              <label htmlFor="price">price</label>
              <input type="text" className='rounded-md bg-transparent outline-none border-[1px] px-3 py-2 text-white-400  max-sm:w-[90%]' id='price' value={foodDetail.price} onChange={(e)=>setFoodDetail({...foodDetail,price:e.target.value})}/>
            </div>
            <div className='flex max-sm:w-[100%] w-full flex-col gap-1'>
              <label htmlFor="category">Category</label>
              <div className='rounded-md bg-transparent outline-none border-[1px] px-3 py-2  text-white-400  flex justify-between items-center max-sm:w-[90%] relative' onClick={()=>setDropDown(prev => !prev)}>
                
              <div className='category-data  flex justify-between w-full' ><p className='text-white-400'>{foodDetail.category}</p> <p><RiArrowDropDownLine className={`text-2xl transition-all ${drowDown ? "rotate-180":""}`} /></p> </div>
                
                <div className={`sub-category flex flex-col gap-3 absolute w-full bg-black-400 left-0 top-[40px] px-[10px] overflow-hidden rounded cursor-pointer ${drowDown ? "max-h-fit":"max-h-0 py-0" }`}>
                  <p className='w-full hover:text-white-400 mt-2' onClick={(e)=>setFoodDetail({...foodDetail,category:"starter"})}>starter</p>
                  <p className='w-full hover:text-white-400 ' onClick={(e)=>setFoodDetail({...foodDetail,category:"main_course"})}>main_course</p>
                  <p className='w-full hover:text-white-400 ' onClick={(e)=>setFoodDetail({...foodDetail,category:"dessert"})}>dessert</p>
                  <p className='w-full hover:text-white-400 mb-2' onClick={(e)=>setFoodDetail({...foodDetail,category:"beverage"})}>beverage</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
          <label htmlFor="name">Description</label>
          <textarea type="text" rows={5} className='rounded-md bg-transparent outline-none border-[1px] px-3 py-2 text-white-400 lg:w-[90%] sm:w-[90%]' id='name' value={foodDetail.description} onChange={(e)=>setFoodDetail({...foodDetail,description:e.target.value})}></textarea>
          </div>
          <button className='flex py-[10px] px-[20px] justify-center items-center bg-green-500 w-[100px] '> Update 
            {update ? <Navigate to={"/manage"}/> :""}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Update
