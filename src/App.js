import './App.css';
import Sidebar from './Sidebar.js';
import Chat from './Chat.js'
import { useEffect,useState } from 'react';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync')
      .then(response => {
        setMessages(response.data);
      });
  }, []);

  useEffect(() => {
    const pusher = new Pusher('15b01085b856becd1c7e', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages]);

  console.log(messages)

  return (
    <div className="app">
      <div className='app__body'>
        <Sidebar></Sidebar>
        <Chat messages = {messages}></Chat>
      </div>  
    </div>
  );
}

export default App;
