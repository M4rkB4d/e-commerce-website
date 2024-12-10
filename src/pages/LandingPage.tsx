import React from "react";

interface LandingPageProps {
    name: String;
}

const HelloWorld: React.FC<LandingPageProps> = ({ name }) => {
    return <p>Hello, {name}!</p>
};

export default HelloWorld;