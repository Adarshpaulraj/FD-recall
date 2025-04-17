import axios from 'axios'
import { useEffect,useState } from 'react'
 
 
function App() {
 const [data,setData]= useState([])
const  userdata = async()=>{
  try {
    let res = await axios.get(`${import.meta.env.VITE_RENDER_URL}/user`)
    console.log(res);
    
    if(res.status === 200){
      setData(res.data.data)
    }
  } catch (error) {
    console.log(error);
    
  }
}

useEffect(()=>{
userdata()
},[])

  return (
    <>
       <table>
        <thead>
          <tr>
            <th>id</th>
            <th>firstName</th>
            <th>Last Name</th>
            <th>Email</th>
             <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((e)=>{
              return <tr key={e._id}>
                <td>{e._id}</td>
                <td>{e.firstName} </td>
                <td> {e.lastName} </td>
                <td> {e.email} </td>
                <td> {e.createdAt} </td>
              </tr>
            })
          }
        </tbody>
       </table>
    </>
  )
}

export default App
