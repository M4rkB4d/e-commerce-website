import ReusableForm from "../components/ReusableForm";

const LoginPage: React.FC = () => {
  const handleFormSubmit = (formData: Record<string, any>) => {
    console.log("Form submitted with data:", formData);
    alert(`Form submitted: ${JSON.stringify(formData, null, 2)}`);
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password Clicked");
    alert("Forgot Password functionality invoked!");
  };

  const formFields = [
    {
      name: "email",
      label: "Email",
      type: "email" as "email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      name: "password",
      label: "Password",
      type: "password" as "password",
      placeholder: "Enter your password",
      required: true,
    }
  ];

  const buttons = [
    {
        label: "Forgot Password",
        styleType: "forgotPassword" as "forgotPassword",
        onClick: handleForgotPassword,
        type: "button" as "button"
    },
    {
        label: "Remember my account",
        styleType: "secondary" as "secondary",
        onClick: handleForgotPassword,
        type: "button" as "button"
    },
  ]

  const secondRowButtons = [
    {
        label: "Register Now",
        styleType: "secondary" as "secondary",
        onClick: handleForgotPassword,
        type: "button" as "button"
    },
    {
        label: "Submit",
        styleType: "primary" as "primary",
        type: "submit" as "submit"
    },
  ]

  return (
    <div style={{ padding: "20px" }}>
      <h1>Test</h1>
      <h2>Test</h2>
      <ReusableForm 
      fields={formFields} 
      buttons={buttons} 
      secondRowButtons={secondRowButtons}
      onSubmit={handleFormSubmit} 
      />
    </div>
  );
};

export default LoginPage;
