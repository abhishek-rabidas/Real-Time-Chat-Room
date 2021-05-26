import React from "react";
import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Header from "./header";
import Chat from "./chats";
import db from "./firebase_config";
import firebase from "firebase";


function App() {

    const [input, setInput] = React.useState('');
    const [chats, setChats] = React.useState([]);
    const [username, setUsername] = React.useState('');

    console.log(chats);

    function sendMessage(event){
        event.preventDefault();
        db.collection('chats').add({name:username, text: input, timestamp: firebase.firestore.FieldValue.serverTimestamp()});
        setChats([...chats, {name:username, text: input}]);
        setInput('');
    }

    React.useEffect( () => {
        setUsername(prompt("Enter your name"));
    }, []);

    React.useEffect(() => {
        db.collection('chats').orderBy('timestamp', 'desc').onSnapshot(snapshot =>
            setChats(snapshot.docs.map(doc => doc.data())));
    }, [] );

    return (
        <div>
        <Header name={username} />
        <form>
            <input autoComplete="off" className="input-box" onChange={event => setInput(event.target.value)} type="text" value={input} />
            <Button id="btn" variant="contained" color="primary" disabled={!input} type="submit" onClick={sendMessage}><SendIcon /></Button>
            </form>
            <div className="container">
            {chats.map(message => (<Chat user={username} name={message.name} text={message.text} />))}
            </div>
        </div>
    );
}

export default App;