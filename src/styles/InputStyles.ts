export class InputStyles {
  // Base style for the input
  static base: React.CSSProperties = {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#ccc",
    outline: "none",
    transition: "border-color 0.3s, background-color 0.3s",
  };

  // Variant: Outlined
  static outlined: React.CSSProperties = {
    ...InputStyles.base,
    borderWidth: "2px",
    borderColor: "#4caf50",
    backgroundColor: "#fff",
  };

  // Variant: Filled
  static filled: React.CSSProperties = {
    ...InputStyles.base,
    borderWidth: "0px",
    backgroundColor: "#f9f9f9",
  };

  // Variant: Underlined
  static underlined: React.CSSProperties = {
    ...InputStyles.base,
    borderWidth: "0 0 2px 0", // Bottom border only
    borderColor: "#4caf50",
    borderRadius: "0",
  };

  // Focused input style
  static focused: React.CSSProperties = {
    borderColor: "#4caf50", // Change only borderColor
    backgroundColor: "#e8f5e9",
  };

  // Disabled input style
  static disabled: React.CSSProperties = {
    backgroundColor: "#e0e0e0",
    cursor: "not-allowed",
    color: "#888",
    borderColor: "#ccc", // Retain a clear disabled state
  };
}
