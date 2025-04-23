import React from 'react'
import { useState } from 'react'
import AxioxService from '../common/ApiService'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';  
 function Login() {

let [email,setEmail]=useState("")
let [password,setPassword]=useState('')
let navigate = useNavigate()

const handleSubmit =async(e)=>{
  e.preventDefault()
  try {
    let res = await AxioxService.post('/user/login',{
      email,
      password
    })
    console.log(res.data);
    
    sessionStorage.setItem('token',res.data.token)
    navigate('/dashboard')
    if(res.status===201){
      toast.success("login successfull")

      console.log(res.data.message);
      navigate('/dashboard')

      
    }else{
      toast.error(res.data.message)
    }
  } catch (error) {
 
  toast.error(error.response.data.message || "error accoured")
 
  }
}


  return <>
   <div className='container-fluid login-page '>
    <div className='login'>
      <h3>LOGIN HERE !</h3>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
      </Form.Group>
       <div className="d-grid gap-2">
      <Button variant="dark" size="sm p-2" onClick={handleSubmit}>
        Login
      </Button>
      <Button variant="warning" size="sm p-2"  >
        SignUp
      </Button>
    </div>
      
      
    </Form>
    </div>
 
  </div>
  

  </>
}

export default Login


 