import React, {useEffect} from 'react'

const Reset = () => {
  useEffect(()=>{
    window.location.href("https://dashboard.pesa24.in/auth/reset-password")
  },[])
  return (
    <>
      
    </>
  )
}

export default Reset