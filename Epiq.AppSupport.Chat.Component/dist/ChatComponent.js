import React from 'react';
import dotnetify from 'dotnetify';
import ChatBubble from 'react-chat-bubble';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Button, InputGroup, InputGroupButton, Input, Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle } from 'reactstrap';

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
        return React.createElement(
            Row,
            null,
            React.createElement(
                Col,
                { sm: '6' },
                React.createElement(
                    Card,
                    null,
                    React.createElement(
                        CardBlock,
                        null,
                        React.createElement(
                            CardTitle,
                            null,
                            'Epiq Support Chat',
                            React.createElement(
                                'button',
                                { type: 'button', className: 'close', 'aria-label': 'Close' },
                                React.createElement(
                                    'span',
                                    { 'aria-hidden': 'true' },
                                    '\xD7'
                                )
                            )
                        ),
                        React.createElement(
                            CardSubtitle,
                            null,
                            'App Name Goes Here'
                        ),
                        React.createElement(
                            CardText,
                            null,
                            React.createElement(ChatBubble, { messages: this.state.messages })
                        ),
                        React.createElement(
                            'footer',
                            null,
                            React.createElement(
                                InputGroup,
                                null,
                                React.createElement(Input, { placeholder: 'Send a message' }),
                                React.createElement(
                                    InputGroupButton,
                                    null,
                                    React.createElement(
                                        Button,
                                        { color: 'secondary' },
                                        'Send'
                                    )
                                )
                            )
                        )
                    )
                )
            )
        );
    }
}
export default SupportChatComponent;
