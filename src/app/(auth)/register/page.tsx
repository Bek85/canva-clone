const RegisterPage = () => {
  return (
    <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
      <h1 className='text-2xl font-bold mb-4'>Register</h1>
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
        <button
          type='submit'
          className='w-full bg-blue-500 text-white p-2 rounded-md'
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
