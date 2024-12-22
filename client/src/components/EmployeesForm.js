import React, { useState } from 'react'

function EmployeesForm() {

    let [employees, setEmployees] = useState([]);

    let getEmployeesFromServer =async()=>{
        let reqOptions ={
            method:"GET"
        }
        let JSONData = await fetch("http://localhost:8888/employees",reqOptions);
        let JSOData = await JSONData.json();
        setEmployees(JSOData);
        console.log(JSOData);
    }

  return (
    <div>
        <form>
            <button type='button' onClick={()=>{
                getEmployeesFromServer();
            }}>Get Employees</button>
        </form>
        <br></br>        

        
<div className='tableDiv'>
        <table>
            <thead>
            <tr style={{backgroundColor:"orange",color:"white", fontWeight:"bolder"}}>
                <th>S.NO</th>
                <th>ID</th>
                <th>Profile Picture</th>
                <th>First Name</th>
                <th>last Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Department</th>
                <th>Country</th>
            </tr>
            </thead>
            <tbody>
                {employees.map((ele,i)=>{
                    return(
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{ele.id}</td>
                            <td><img src={ele.profilePicture} alt=''></img></td>
                            <td>{ele.firstName}</td>
                            <td>{ele.lastName}</td>
                            <td>{ele.age}</td>
                            <td>{ele.gender}</td>
                            <td>{ele.email}</td>
                            <td>{ele.department}</td>
                            <td>{ele.country}</td>
                        </tr> 
                    )
                })}
            
            </tbody>
            <tfoot></tfoot>
        </table>
        </div>

    </div>
  )
}

export default EmployeesForm