import React from "react";
import { ButtonStyles } from "../styles/ButtonStyles";

interface CustomButtonProps {
  label: string;
  onClick?: () => void;
  type?: "submit" | "button";
  disabled?: boolean;
  styleType?: "primary" | "secondary" | "danger" | "disabled" | "outline" | "forgotPassword"; // Style options
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  styleType = "primary",
}) => {
  const style = disabled ? ButtonStyles.disabled : ButtonStyles[styleType];

  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled} 
      style={style}>
      {label}
    </button>
  );
};

export default CustomButton;
