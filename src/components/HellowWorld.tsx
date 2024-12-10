import React from "react";

interface HelloWorldProps {
    name: String;
}

const HelloWorld: React.FC<HelloWorldProps> = ({ name }) => {
    return <p>Hello, {name}!</p>
};

export default HelloWorld;