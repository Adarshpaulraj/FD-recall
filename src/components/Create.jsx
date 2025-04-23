import React, { useState } from 'react'
 import Form from 'react-bootstrap/Form';
 import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

  
 
function Create( ) {

let [firstName,setFirstname]=useState('')
let [lastName,setLastName] = useState('')
let [email,setEmail] = useState('')
let [password,setPassword]=useState('')
  let navigate = useNavigate()
let handleSubmit = async()=>{
    try {
       let res = await axios.post(`${import.meta.env.VITE_RENDER_URL}/user/create`,{
        firstName,lastName,email,password
       })
       navigate('/dashboard')

      if(res.status === 201){
        console.log(res.data.message);
       }

    } catch (error) {
        console.log(error);
        
    }
}



  return <>
   <div className="container-fluid">

   <div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Create</h1>
     
   </div>
   <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your Name" onChange={(e)=>setFirstname(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="name@example.com" onChange={(e)=>setLastName(e.target.value)}/>
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your mobile number" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <Button  onClick={()=>handleSubmit()}>Submit</Button>
        </Form>
       </div>
      </>
}
 
export default Create



 