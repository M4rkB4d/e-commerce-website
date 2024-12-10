export class ButtonStyles {
    // Primary button style
    static primary: React.CSSProperties = {
        backgroundColor: '#4caf50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s',
    };

    // Secondary button style
    static secondary: React.CSSProperties = {
        backgroundColor: '#f0f0f0',
        color: '#333',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s',
    };

    // Danger button style
    static danger: React.CSSProperties = {
        backgroundColor: '#ff4d4d',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s',
    };

    // Disabled button style
    static disabled: React.CSSProperties = {
        backgroundColor: '#ccc',
        color: '#666',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'not-allowed',
        fontSize: '16px',
    };

    // Outline button style
    static outline: React.CSSProperties = {
        backgroundColor: 'transparent',
        color: '#4caf50',
        border: '2px solid #4caf50',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s',
    };

    static forgotPassword: React.CSSProperties = {
        backgroundColor: 'transparent',
        color: '#007bff', // Blue like a hyperlink
        border: 'none',
        textDecoration: 'underline',
        padding: '5px',
        cursor: 'pointer',
        fontSize: '14px',
        transition: 'color 0.3s',
    };
}
