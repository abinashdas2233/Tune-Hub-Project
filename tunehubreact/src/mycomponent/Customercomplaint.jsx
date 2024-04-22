import React, { useState } from 'react';
import axios from 'axios';
import Customernavbar from './Customernavbar';
import './Cc.css'

function Customercomplaint() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [num, setnum] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/pcom", {
        name: name,
        email: email,
        num: num,
        feedback: feedback
      });
      console.log('Response:', response.data);
     
      setName('');
      setEmail('');
      setnum('');
      setFeedback('');
      alert('Complaint submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit complaint due to server error. Please try again later.');
    }
  };
  
  return (
    <div>
      <Customernavbar />
      <div className="sectiont">
        <h1>Feedback Form</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name: <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br /><br />
          <label>
            Email: <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br /><br />
          <label>
            Contact no: <input type='tel' name='contact' value={num} onChange={(e) => setnum(e.target.value)} />
          </label>
          <br /><br />
          <label>
            Feedback: <textarea name='complaint' placeholder='We would love to hear your valuable feedback' value={feedback} onChange={(e) => setFeedback(e.target.value)}></textarea>
          </label>
          <br /><br />
          <input type='submit' name='submit' />
        </form>
      </div>
    </div>
  );
}

export default Customercomplaint;
