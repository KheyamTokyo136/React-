import React from 'react'
import { useParams } from 'react-router-dom'

const Coursesdetails = () => {
    const params=useParams()    
  return (
    <div>
      <h1>{params.Courseid} Courses Details</h1>
    </div>
  )
}

export default Coursesdetails
