import './App.css';
import {useEffect, useState} from "react";
import {Button, FormControl, FormHelperText, Input, InputLabel} from "@mui/material";
import Message from "./Message";
import db from "./firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import firebase from 'firebase';

function App() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [userName, setUserName] = useState('');

    useEffect(()=>{
        db.collection('messages').onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    },[])

    useEffect(()=>{
        setUserName(prompt('please enter your name'));
    }, [])

    const sendMessage = (event) => {
        event.preventDefault();
        db.collection('messages').add({
            message : input,
            userName: userName,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setInput('');
    }

  return (
    <div className="App">
      <h1>Hello im Henrik </h1>
        <h2>Welcome {userName}</h2>
        <form>
            <FormControl>
                <InputLabel >Enter a Message</InputLabel>
                <Input value={input} onChange={event => setInput(event.target.value)}/>
                <Button disabled={!input} variant="outlined" color="primary" type="submit" onClick={sendMessage}>Send</Button>
            </FormControl>

        </form>

        {
            messages.map(message => (
                <Message userName={userName} message = {message.message}/>
            ))
        }
    </div>
  );
}

export default App;
