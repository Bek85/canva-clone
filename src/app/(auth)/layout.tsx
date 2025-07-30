import Link from "next/link";
import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <nav className='absolute top-5 left-5 flex items-center justify-between w-full px-10'>
        <Link href='/' className='flex items-center gap-2'>
          <Image src='/logo.svg' alt='logo' width={130} height={130} />
          <p className='text-2xl font-bold'>AI Chat</p>
        </Link>
        <div className='flex items-center gap-4'>
          <Link
            href='/register'
            className='text-sm text-gray-500 hover:text-gray-700'
          >
            Register
          </Link>
          <Link
            href='/login'
            className='text-sm text-gray-500 hover:text-gray-700'
          >
            Login
          </Link>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default AuthLayout;
