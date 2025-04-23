import React from 'react'
 import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import UseLogout from '../hooks/UseLogout'
import AxiosService from '../common/ApiService'
import { toast } from 'react-toastify'

   import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
    function Dashboard( ) {
      let Logout = UseLogout()
         const [data,setData]= useState([])
        const navigate = useNavigate()
        const  userdata = async()=>{
          try {
            let res = await AxiosService.get('/user')
              console.log(res);
            
            if(res.status === 200){
              setData(res.data.data)
            }
          } catch (error) {
            console.log(error);
            
            if(error.response.status ===400){
              toast.error(error.response.data.message || "error accoured")
            Logout()
             } 
            
          }
        }

        const deleteUser = async(_id)=>{
          try {
             await axios.delete(`${import.meta.env.VITE_RENDER_URL}/user/delete/${_id}`)
             navigate('/')
          } catch (error) {
         
            
          }
        }
        
        useEffect(()=>{
 
        userdata()
        },[])      
 
    
  return (
    <div className="container-fluid">

    {/* <!-- Page Heading --> */}
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <Button className='logout' onClick={()=>Logout()} >  Logout</Button>
                </div>
   
 
    <div className="row">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th> FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Create At</th>

        </tr>
      </thead>
      <tbody>
       {
         data.map((e)=>{
         return <tr key={e._id}>
            <td></td>
            <td>{e.firstName}</td>
            <td>{e.lastName} </td>
            <td>{e.email}</td>
            <td>{e.createdAt}</td>
             <td>
             <Button variant="primary"  >Edit</Button>
             &nbsp;
             &nbsp;
             <Button variant="danger"  onClick={()=>deleteUser(e._id)} >Delete</Button>
             </td>
          </tr>
         })
       }
       
       </tbody>
    </Table>
     </div>
</div>
  )
}

export default Dashboard