import React from 'react'

const Message = () => {
  return (
    <div>
        <div className="chat chat-start">
        <div className="chat-header">
            <time className="text-xs opacity-50">2 hours ago</time>
        </div>
            <div className="chat-bubble">
                It's over Anakin,
                <br />
                I have the high ground.
            </div>
        </div>
        <div className="chat chat-end">
            <div className="chat-header">
                <time className="text-xs opacity-50">2 hours ago</time>
            </div>
            <div className="chat-bubble bg-slate-600">You underestimate my power!</div>
        </div>
    </div>
  )
}

export default Message