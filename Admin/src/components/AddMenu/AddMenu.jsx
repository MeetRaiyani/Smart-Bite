import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RiArrowDropDownLine } from "react-icons/ri";
import toast from 'react-hot-toast';


const AddMenu = () => {

  const[foodDetail,setFoodDetail]=useState({
    name:"",
    price:0,
    category:"main_course",
    description:""
  })
  
  const [image,setImage]= useState(false)
  const [drowDown,setDropDown] = useState(false)


const handleSubmit = async (e)=>{
  e.preventDefault();
  const data = new FormData()
  data.append("name",foodDetail.name)
  data.append("price",foodDetail.price)
  data.append("category",foodDetail.category)
  data.append("description",foodDetail.description)
  data.append("image",image)
  console.log(data);
  const response = await axios.post("http://localhost:8000/api/foodItem/add",data);
  if(response.status==200){
    toast.success("Recipy Added Successfully")
    setFoodDetail({
      name:"",
      price:0,
      category:"main_course",
      description:""
    });
    setImage(false);
  }
  

}

  return (
    <div className='flex flex-col lg:py-[90px] sm:py-[40px] max-sm:py-[40px] lg:px-[80px] max-sm:px-[20px] sm:px-[20px] md:px-[40px] w-full h-full overflow-x-auto'>
      <div className='flex justify-center items-center w-full mb-8'>
        <h1 className='text-3xl font-semibold'>Add <span className="text-orange"> Recipies </span></h1>
      </div>
      <form onSubmit={(e)=>handleSubmit(e)} className='w-full h-full'>
        <div className='image-container relative gap-2 w-fit flex flex-col items-start justify-center'>
          <label htmlFor="addImage" className='cursor-pointer'>Add Image
          <img 
          src={image?URL.createObjectURL(image):'/addimage.jpg'} 
          alt="" 
          className='h-[70px] cursor-pointer w-[70px] object-cover object-center rounded-md'
          />
          </label>
          <input type="file" required title='' id='addImage'  hidden className='absolute w-full opacity-0 cursor opacity-1 cursor-pointer top-[50%] left-0 ' onChange={(e)=> setImage(e.target.files[0])} />

        </div>
        <div className='flex mt-5 gap-3 flex-col w-full'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name">Name</label>
            <input type="text" required className='rounded-md bg-transparent outline-none border-[1px] px-3 py-2 text-white-400 lg:w-[90%] sm:w-[90%]' id='name' value={foodDetail.name} onChange={(e)=>setFoodDetail({...foodDetail,name:e.target.value})}/>
          </div>
          <div className='max-sm:flex-col max-sm:w-full flex-auto lg:gap-5 w-[90%] lg:flex'>
            <div className='flex flex-col w-full gap-1'>
              <label htmlFor="price">price</label>
              <input type="number" required min={0}  className='rounded-md bg-transparent outline-none border-[1px] px-3 py-2 text-white-400  max-sm:w-full' id='price' value={foodDetail.price} onChange={(e)=>setFoodDetail({...foodDetail,price:e.target.value})}/>
            </div>
            <div className='flex w-full flex-col gap-1'>
              <label htmlFor="category">Category</label>
              <div className='rounded-md bg-transparent outline-none border-[1px] px-3 py-2  text-white-400  flex justify-between items-center max-sm:w-full relative' onClick={()=>setDropDown(prev => !prev)}>
                
                <div className='category-data  flex justify-between w-full' ><p className='text-white-400'>{foodDetail.category}</p> <p><RiArrowDropDownLine className={`text-2xl transition-all ${drowDown ? "rotate-180":""}`} /></p> </div>
                
                <div className={`sub-category flex flex-col gap-3 absolute w-full bg-black-400 left-0 top-[40px] px-[10px] overflow-hidden rounded cursor-pointer ${drowDown ? "max-h-fit":"max-h-0 py-0" }`}>
                  <p className='w-full hover:text-white-400 mt-2' onClick={(e)=>setFoodDetail({...foodDetail,category:"starter"})}>starter</p>
                  <p className='w-full hover:text-white-400 ' onClick={(e)=>setFoodDetail({...foodDetail,category:"main_course"})}>main_course</p>
                  <p className='w-full hover:text-white-400 ' onClick={(e)=>setFoodDetail({...foodDetail,category:"dessert"})}>dessert</p>
                  <p className='w-full hover:text-white-400 mb-2' onClick={(e)=>setFoodDetail({...foodDetail,category:"beverage"})}>beverage</p>
                  <p className='w-full hover:text-white-400 mb-2' onClick={(e)=>setFoodDetail({...foodDetail,category:"panjabi"})}>Panjabi</p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name">Description</label>
            <textarea type="text" rows={4} required className='rounded-md bg-transparent outline-none border-[1px] px-3 py-2 text-white-400 lg:w-[90%] sm:w-[90%]' id='name' value={foodDetail.description} onChange={(e)=>setFoodDetail({...foodDetail,description:e.target.value})}></textarea>
          </div>
          <button type='submit' className='flex py-[10px] px-[20px] justify-center items-center bg-green-500 w-[100px] font-semibold font-poppins text-[16px] '> Add </button>
        </div>
      </form>
    </div>
  )
}

export default AddMenu
