import React from "react";
import { useNavigate } from "react-router-dom";

interface SideBarButtonProps {
  children: React.ReactNode;
  path: string;
}

function SideBarButton({ children, path }: SideBarButtonProps) {
  const navigate = useNavigate();
  const handleButtonClick = (path: string) => {
    navigate(path);
    console.log(path);
  };
  return (
    <button
      onClick={() => handleButtonClick(path)}
      className="hover:bg-accent1 w-12 h-12 flex items-center justify-center rounded-xl hover:shadow-md duration-150"
    >
      <div className="text-2xl text-gray-700">{children}</div>
    </button>
  );
}

export default SideBarButton;
