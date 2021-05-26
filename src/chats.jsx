import React from "react";

function Chat(props){

    const  isUser = props.user===props.name;

    return (
        <div className={isUser?'chat_user':'chat_guest'}>
        <p class="username">{props.name}</p>
            <h3 class="message">{props.text}</h3>
        </div>
    );
}

export default Chat;