import React, { useEffect } from 'react'
import Auth from './auth'

const Index = () => {
  useEffect(() => {
    window.location.replace("/auth")
  }, [])
  return (
    <></>
  )
}

export default Index