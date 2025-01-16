import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar/Sidebar.tsx';
import Chat from './components/chat/Chat.tsx';
import './components/chat/Chat.scss';


function App() {
  return (
    <div className="App">
      {/* sidebar */}
      <Sidebar />
      {/* chat */}
      <Chat />
    </div>
  );
}

export default App;
