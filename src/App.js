import './App.css';
import {useEffect, useState} from "react";
import {Button, FormControl, FormHelperText, Input, InputLabel} from "@mui/material";
import Message from "./Message";

function App() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([{}]);
    const [userName, setUserName] = useState('');

    useEffect(()=>{
        setUserName(prompt('please enter your name'));
    }, [])

    const sendMessage = (event) => {
        event.preventDefault();
        setMessages([...messages, {userName: userName, text: input}]);
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
                <Message userName={message.userName} message = {message}/>
            ))
        }
    </div>
  );
}

export default App;
