"use client";

import { Button as ButtonUI } from "@/components/ui/button";

const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <ButtonUI
      type='submit'
      className='w-full bg-blue-500 text-white p-2 rounded-md'
      onClick={onClick}
    >
      {children}
    </ButtonUI>
  );
};

export default Button;
