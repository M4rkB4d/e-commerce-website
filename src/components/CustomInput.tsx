import React, { useState } from "react";
import { InputStyles } from "../styles/InputStyles";

type InputVariant = "outlined" | "filled" | "underlined";

interface CustomInputProps {
  id: string;
  label: string;
  name: string;
  type: "text" | "email" | "password" | "number";
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  variant?: InputVariant; // Defines which style variant to use
}

const CustomInput: React.FC<CustomInputProps> = ({
  id,
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required = false,
  disabled = false,
  variant = "outlined",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  // Determine the base style
  const baseStyle = InputStyles[variant];

  // Combine styles dynamically
  const inputStyles: React.CSSProperties = {
    ...baseStyle,
    ...(isFocused ? InputStyles.focused : {}),
    ...(disabled ? InputStyles.disabled : {}),
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <label
        htmlFor={name}
        style={{
          display: "block",
          marginBottom: "5px",
          fontWeight: "bold",
        }}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        style={inputStyles} // Apply dynamic styles
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default CustomInput;
