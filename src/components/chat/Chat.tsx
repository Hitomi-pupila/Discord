import React from 'react'
import ChatHeader from './ChatHeader.tsx'
import "./ChatHeader.scss";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import GifIcon from "@mui/icons-material/Gif";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { ChatMessage } from './ChatMessage.tsx';

const chat = () => {
  return (
    <div className='chat'>
        {/* chatHeader */}
        <ChatHeader />
        {/* chatMessage */}
        <div className='chatMessage'>
          <ChatMessage />
        </div>
        {/* chatInput */}
        <div className='chatInput'>
          <AddCircleOutlineIcon />
          <form action="">
            <input type="text" placeholder='#Udemyでメッセージを送信'/>
            <button type='submit' className='chatInputButton'>
              送信
            </button>
          </form>

          <div className='chatInputIcons'>
            <CardGiftcardIcon />
            <GifIcon />
            <EmojiEmotionsIcon />
          </div>
        </div>
    </div>
  )
}

export default chat