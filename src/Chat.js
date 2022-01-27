import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import "./Chat.css"
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVert from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';

function Chat() {
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

        <p className='chat__message'>
          <span className='chat__name'>Icarus</span>

          NEW MESSAGE

          <span className='chat_timestamp'>
            {new Date().toUTCString()}
          </span>
        </p>

        <p className='chat__message chat__receiver'>
          <span className='chat__name'>Icarus</span>

          NEW MESSAGE

          <span className='chat_timestamp'>
            {new Date().toUTCString()}
          </span>
        </p>

      </div>

      <div className='chat__footer'>

        <InsertEmoticonIcon></InsertEmoticonIcon>
        <form>
          <input placeholder='Type a message' type="text"></input>
          <button type="submit">
            Send Message
          </button>
        </form>

        <MicIcon></MicIcon>
        
      </div>
  </div>;
}

export default Chat;
