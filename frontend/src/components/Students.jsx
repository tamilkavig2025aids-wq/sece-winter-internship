import React from 'react'

const Students = ({name,age}) => {//object destructing
  return (
    <>
      <div>Students</div>
      <h2>heading</h2>
      <h3>i am {name} and age is {age}</h3>
    </>
  )
}

export default Students