import './App.css';
import {useState} from "react";

function App() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    console.log(input);
    console.log(messages)

    const sendMessage = (event) => {
        event.preventDefault();
        setMessages([...messages, input]);
        setInput('');
    }

  return (
    <div className="App">
      <h1>Hello im Henrik and this my is ass</h1>
        <form>
            <input value={input} onChange={event => setInput(event.target.value)}/>
            <button type="submit" onClick={sendMessage}>If you are not gay Click</button>
        </form>

        {
            messages.map(message => (
                <p>{message}</p>
            ))
        }
    </div>
  );
}

export default App;
