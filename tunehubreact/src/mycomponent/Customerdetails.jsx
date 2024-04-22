import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Adminnavbar from './Adminnavbar';
import './Cd.css'

function Customerdetails() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/findusers"); 
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Adminnavbar />
      <div className='hip'>
        <h1>User Data</h1>
        <table border={2}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Address</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Is Premium</th>
              <th>Password</th>
              <th>Role</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.address}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.is_premium}</td>
                <td>{user.password}</td>
                <td>{user.role}</td>
                <td>{user.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Customerdetails;
