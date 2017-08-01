import React from 'react';
import dotnetify from 'dotnetify';

class SupportChatComponent extends React.Component {
    constructor(props) {
        super(props);

        dotnetify.react.connect("SupportChatComponentVM", this);
        this.state = { Greetings: "", ServerTime: "" };
    }

    render() {
        return (
            <div>
                This is a test of the chat component
            </div>
        );
    }
}

export default SupportChatComponent;