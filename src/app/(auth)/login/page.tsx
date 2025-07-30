"use client";

import Button from "./_components/Button";

const LoginPage = () => {
  return (
    <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
      <h1 className='text-2xl font-bold mb-4'>Login</h1>
      <form>
        <div className='mb-4'>
          <label htmlFor='email' className='block text-sm font-medium mb-1'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='w-full p-2 border border-gray-300 rounded-md'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='password' className='block text-sm font-medium mb-1'>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='w-full p-2 border border-gray-300 rounded-md'
          />
        </div>
        <Button
          onClick={(e) => {
            e.preventDefault();
            console.log("clicked");
          }}
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
