import { Avatar, IconButton } from '@mui/material';
import React, { useState } from 'react';
import "./Chat.css"
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVert from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from './axios';

function Chat({ messages }) {

  const [input,setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post('/messages/new', {
      "message": input,
      "name": "Demo app",
      "timestamp": "Just Now",
      "received": false
    });

    setInput("");
  };

  return <div className='chat'>
      <div className='chat__header'>
        <Avatar></Avatar>

        <div className='chat__headerInfo'>
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>

        <div className='chat__headerRight'>
          <IconButton>
            <SearchIcon></SearchIcon>
          </IconButton>
          <IconButton>
            <AttachFileIcon></AttachFileIcon>
          </IconButton>
          <IconButton>
            <MoreVert></MoreVert>
          </IconButton>
        </div>
      </div>

      <div className='chat__body'>
        {messages.map((message) => (
          <p className= {`chat__message ${message.received && "chat__receiver"}`} >
          <span className='chat__name'>{message.name}</span>

          {message.message}

          <span className='chat_timestamp'>
            {message.timeStamp}
          </span>
        </p>
        ))}

      </div>

      <div className='chat__footer'>

        <InsertEmoticonIcon></InsertEmoticonIcon>
        <form>
          <input value={input} onChange = {e => setInput(e.target.value)}
           placeholder='Type a message'
           type="text"></input>
          <button onClick = {sendMessage} type="submit">
            Send Message
          </button>
        </form>

        <MicIcon></MicIcon>
        
      </div>
  </div>;
}

export default Chat;
