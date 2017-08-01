import React from 'react';
import dotnetify from 'dotnetify';
import ChatBubble from 'react-chat-bubble';

class SupportChatComponent extends React.Component {
    constructor(props) {
        super(props);
        //dotnetify.react.connect("SupportChatComponentVM", this);

        this.state = {
            messages: [{
                "type": 0,
                "image": "http://lorempixel.com/50/50/cats/",
                "text": "Hello! Good Morning!"
            }, {
                "type": 1,
                "image": "http://lorempixel.com/50/50/animals/",
                "text": "Hello! Good Afternoon!"
                }]
        };
    }

    render() {
        return (
            <ChatBubble messages={this.state.messages} />
        );
    }
}
export default SupportChatComponent;