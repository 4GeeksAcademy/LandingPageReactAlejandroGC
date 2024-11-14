import React from "react";
import Jumbotron from "./jumbotron";
import Card from "./card";

const Containers = () => {
    return (
        <div className="container">
            <Jumbotron/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}

export default Containers;