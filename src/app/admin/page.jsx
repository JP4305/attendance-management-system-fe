'use client'
import React, { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const admin = () => {
  useEffect(() => {
    // Check if the unique identifier exists in a cookie
    let deviceId = localStorage.getItem('deviceId');

    // If not, generate a new one
    if (!deviceId) {
      deviceId = uuidv4();
      localStorage.setItem('deviceId', deviceId);
    }

    console.log('Device ID:', deviceId);
  }, []);
  const devideID = localStorage.getItem('deviceId')

  return (
    <div>Device ID:{devideID}</div>
  )
}

export default admin