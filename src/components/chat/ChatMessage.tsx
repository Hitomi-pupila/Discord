import React from 'react'
import "./ChatMessage.scss";
import {Avatar} from "@mui/material";

export const ChatMessage = () => {
  return (
    <div className='message'>
        <Avatar />
        <div className='messageInfo'>
            <h4>
                Hitomi Code
                <span className='messageTimestamp'>2025/1/16</span>
            </h4>

            <p>メッセージ本文</p>
        </div>
    </div>
  )
}
