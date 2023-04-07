import React from 'react'
import './ChatGPT.css'
import { useState, useEffect } from 'react'
export function ChatGPT(){

  const [value, setValue] = useState('')

  const [message, setMessage] = useState('')

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const response = await fetch('http://localhost:8001/completions', options);
      const data = await response.json();
      let message = '';
      if (data && data.message) {
        message = data.message;
      }
      setMessage(message);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(message)
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+</span>
          New Chat
        </div>
        <nav>
          <p>Made by Dribble!</p>
        </nav>
      </aside>

      <section className="main">
        <h1>Dribble</h1>

        <ul className="feed">
        <li>{message}</li>
        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input value={value} onChange={(e) => setValue(e.target.value)}/>
            <div id="submit" onClick={getMessages}>
              -
            </div>
            <p className="info">
              CHAT GPT
            </p>
          </div>
        </div>
      </section>

    </div>

  )
};
