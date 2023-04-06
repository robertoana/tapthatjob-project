import React from 'react'
import './ChatGPT.css'
export function ChatGPT(){
function handleSubmit(){
    async function handleSubmit(e){
      e.preventDefault();
    }
  }

  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          <div className="chat-message">
              <div className="chat-message-centre">
               <div className="avatar">
               
               </div>
               <div className="message">
                 Hello World
               </div>
              </div>
            </div>
            <div className="chat-message chatgpt">
              <div className="chat-message-centre">
               <div className="avatar chatgpt">
               
               </div>
               <div className="message">
                 I am an AI
               </div>
              </div>
            </div>
        </div>
          <div className="chat-input">
            <form onSubmit={handleSubmit}>
            <input rows="1"/*te lasa sa scrii doar pe un rand*/
              className="chat-input-textarea" 
              placeholder="Type your message here">
            </input>
            </form>
          </div>
      </section>
    </div>

  )
};