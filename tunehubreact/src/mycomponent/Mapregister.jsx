import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Mapregister.css'

const Mapregister = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');
  const [address, setAddress] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const resp = await axios.post("http://localhost:8080/register", { username, email, password, gender, role, address });
      console.log(resp.data);
      if (resp.data === "registersucces") {
        console.log("success");
        setResponse("Registration successful!");
      
        navigate('/login');
      } else {
        console.log("failed");
        setResponse("E-mail id already exists");
      }
    } catch (error) {
      console.error(error);
      setResponse("Server side error. Unable to send request to backend.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='reg'>
      <div className='ims'><img src='logo.png'alt='logo' width={100} height={80}></img></div>
      <form onSubmit={handleSubmit}className='myt'>
        <label> Username -<input type='text' name='username' value={username} onChange={(e) => setUsername(e.target.value)}></input></label>
        <br /><br />
        <label> E-mail -<input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}></input></label>
        <br /><br />
        <label> Password -<input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}></input></label>
        <br /><br />
        <label>
          GENDER-
          <input type='radio' name='gender' value='male' checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
          Male
        </label>
        <label>
          <input type='radio' name='gender' value='female' checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
          Female
        </label>
        <br /><br />
        <label>
          ROLE-
          <input type='radio' name='role' value='admin' checked={role === 'admin'} onChange={(e) => setRole(e.target.value)} />
          Admin
        </label>
        <label>
          <input type='radio' name='role' value='user' checked={role === 'user'} onChange={(e) => setRole(e.target.value)} />
          User
        </label>
        <br /><br />
        <label>Address-<input type='text' name='address' value={address} onChange={(e) => setAddress(e.target.value)} /></label>
        <br /><br />
        <button type="submit" disabled={isLoading}>{isLoading ? 'Submitting...' : 'Submit'}</button>
        {response && <p>{response}</p>}
      </form>
     
    </div>
  );
}

export default Mapregister;
