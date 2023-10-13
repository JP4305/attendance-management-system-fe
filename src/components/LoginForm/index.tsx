'use client'
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Backend for login
  };

  return (
    <div className="">
      <h2 className="text-2xl text-center font-semibold mb-4">Login</h2>
      <form className='gird justify-items-center' onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            UserID:
          </label>
          <input
            type="email"
            id="email"
            className="px-3 py-2 border border-gray-300 rounded"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="px-3 py-2 border border-gray-300 rounded"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className=" bg-blue-500 text-white font-semibold px-5 py-2 rounded-xl hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
