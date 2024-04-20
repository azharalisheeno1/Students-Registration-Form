import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Read() {
const[apiData,setApiData] =useState([])
const getData=()=>{
  axios.get('https://66212f553bf790e070b22200.mockapi.io/crud').then((response)=>{
  setApiData(response.data);
  })
}
function handleDelete(id){
axios.delete(`https://66212f553bf790e070b22200.mockapi.io/crud/${id}`).then(()=>{
  getData();
})
}
 
  useEffect(() => {
    getData()
    
  }, [])


  return (
    <>

<div className="relative overflow-x-auto  w-[1200px] mx-auto  mt-5 shadow-lg sm:rounded-lg" >

    <table className="w-full text-center  rtl:text-right dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                   ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Full Name
                </th>
                <th scope="col" className="px-6 py-3">
                   Father Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                   Age
                </th>
                <th scope="col" className="px-6 py-3">
                    Address
                </th>
               
                <th scope="col" className="px-6 py-3">
                   Delete
                </th>
            </tr>
        </thead>
        <tbody>
            
          {apiData.map((item)=>{
            return(<>
            <tr  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.id}
                </th>
                <td className="px-6 py-4">
                {item.fullname}
                </td>
                <td className="px-6 py-4">
                {item.fathername}
                </td>
                <td className="px-6 py-4">
                {item.email}
                </td>
                <td className="px-6 py-4">
                {item.age}
                </td>
                <td className="px-6 py-4">
                {item.address}
                </td>
               
                <td className="px-6 py-4">
                    <button   className="font-medium hover:text-red-700 text-red-500 w-20 " onClick={()=>{if(window.confirm('Are You Sure  To Delete ?')) {handleDelete(item.id)} }}>Delete</button>
                </td>
            </tr>
            
            </>)
          })}
      
      
        </tbody>
    </table>
    
</div>

<div className='mb-5 mx-[170px]  mt-10 w-72'>
     
     <Link to='/Create'>
     {/* <button className='text-white text-2xl px-10 py-3 rounded-xl   bg-cyan-500'>Create New Data</button> */}
     
     <button type="submit" className="text-white  w-[400px] bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2">Register New Student</button>

     
     </Link>
     
    </div>    
    
    
    
    </>
  )
}

export default Read