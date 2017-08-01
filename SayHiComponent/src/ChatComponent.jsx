﻿import React from 'react';
import dotnetify from 'dotnetify';
import ChatBubble from 'react-chat-bubble';

class SupportChatComponent extends React.Component {
    render() {
        return (
            <ChatBubble messages={this.state.messages}/>
        );
    }
}
export default SupportChatComponent;