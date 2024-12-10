import React, { useState } from "react";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

type InputType = "text" | "email" | "password" | "number";
type ButtonType = "submit" | "button";

interface Field {
  name: string;
  label: string;
  type: InputType;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string | number;
  variant?: "outlined" | "filled" | "underlined";
  disabled?: boolean;
}

interface Button {
  label: string;
  styleType: "primary" | "secondary" | "danger" | "disabled" | "outline" | "forgotPassword";
  onClick?: () => void;
  type?: ButtonType;
}

interface ReusableFormProps {
  fields: Field[];
  secondRowFields?: Field[];
  buttons: Button[];
  secondRowButtons?: Button[];
  onSubmit: (formData: Record<string, any>) => void; // Callback to handle form submission
  customStyles?: React.CSSProperties; // Optional styles for the form
  renderExtraContent?: () => React.ReactNode; //Render extra elements inside the form
}

const ReusableForm: React.FC<ReusableFormProps> = ({
     fields,
     secondRowFields,
     buttons, 
     secondRowButtons,
     onSubmit,
     customStyles,
     renderExtraContent
    }) => {
  const [formData, setFormData] = useState<Record<string, any>>(
    fields.reduce((acc, field) => {
      acc[field.name] = field.defaultValue || "";
      return acc;
    }, {} as Record<string, any>)
  );

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    fields.forEach((field) => {
      if (field.required && !formData[field.name]) {
        newErrors[field.name] = `${field.label} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

//   const firstRowButtons = buttons.filter((button) => button.label === )

  return (
    <form onSubmit={handleSubmit} style={{ width: "300px", margin: "auto", ...customStyles }}>
      {fields.map((field) => (
        <div key={field.name} style={{ marginBottom: "15px" }}>
          <CustomInput
            id={field.name}
            label={field.name}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={(e) => handleChange(field.name, e.target.value)}
            variant="outlined"
          />
          {errors[field.name] && (
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors[field.name]}
            </p>
          )}
        </div>
      ))}
      {renderExtraContent && renderExtraContent()} {/* Custom content */}
      <div style={{
         display: "flex",
         justifyContent: "space-between",
         gap: "10px" 
         }}>
        {buttons.map((button, index) => (
          <CustomButton
            key={index}
            label={button.label}
            styleType={button.styleType}
            onClick={
                button.type === "submit"
                  ? undefined // Leave undefined for submit buttons to use form's onSubmit
                  : button.onClick // Custom handler for other buttons
              }
              type={button.type}
          />
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
        {secondRowButtons?.map((button, index) => (
          <CustomButton
            key={index}
            label={button.label}
            styleType={button.styleType}
            onClick={
                button.type === "submit"
                  ? undefined // Leave undefined for submit buttons to use form's onSubmit
                  : button.onClick // Custom handler for other buttons
              }
              type={button.type}
          />
        ))}
      </div>
    </form>
  );
};

export default ReusableForm;
