import React, { useState } from 'react';
import axios from 'axios';
import "./Mobile.css";
// import firebase from '../../firebase';

function Mobile() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const sendOtp = async () => {
    try {
      const response = await axios.post('http://localhost:3000/send-otp', {
        phoneNumber,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage('Error sending OTP');
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:3000/verify-otp', {
        phoneNumber,
        otp,
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
      setMessage('Error verifying OTP');
    }
  };

  return (
    <div className="Mobile">
      <h1>Mobile OTP Verification</h1>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button onClick={sendOtp}>Send OTP</button>
      </div>
      <div>
        <label>OTP:</label>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      </div>
      <button onClick={verifyOtp}>Verify OTP</button>
      <div>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Mobile;
