import React, { useEffect } from 'react'
import "./Verify.css"
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios';

const Verify = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId")
    const navigate = useNavigate()
    const verifyPayment = async() =>{
        console.log(success,orderId);
            const data = {success,orderId}
            const response = await axios.post('http://localhost:8000/api/order/verify',data)
            if(response.data.data.success){
                navigate("/myorders");
            }
            else{
                navigate('/')
            }
        
    }

    useEffect(()=>{
        verifyPayment();
    },[])

  return (
    <div className='verify'>
      <div className='spinner'></div>
    </div>
  )
}

export default Verify
