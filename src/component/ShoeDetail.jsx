import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const ShoeDetail = () => {
    const params = useParams();
    const pathName = useLocation();
    console.log(params)
    console.log(pathName)
  return (
    <div>ShoeDetail</div>
  )
}

export default ShoeDetail