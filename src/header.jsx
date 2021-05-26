
import React from "react";

function Header(props){
    return (
        <header>
        <h1>🔥FIRE CHAT🔥</h1>
            <h3>Welcome <span>{props.name}</span></h3>
        </header>
    )
}

export default Header;