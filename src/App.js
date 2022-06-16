import './App.css';
import {useState} from "react";

function App() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    console.log(input);
    console.log(messages)

    const sendMessage = (event) => {
        // all logic goes her
        setMessages([...messages, input]);
        setInput('');
    }

  return (
    <div className="App">
      <h1>Hello im Henrik and this my is ass</h1>

      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button onClick={sendMessage}>If you are not gay Click</button>

    </div>
  );
}

export default App;
