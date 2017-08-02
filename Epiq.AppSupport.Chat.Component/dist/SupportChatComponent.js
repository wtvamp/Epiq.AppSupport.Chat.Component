import React from 'react';
import dotnetify from 'dotnetify';
import ChatBubble from 'react-chat-bubble';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Button, InputGroup, InputGroupButton, Input, Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle } from 'reactstrap';

class SupportChatComponent extends React.Component {

    constructor(props) {

        super(props);
        // Connect this component to the back-end view model.
        this.vm = dotnetify.react.connect("SupportChatComponentVM", this);

        // Set up function to dispatch state to the back-end with optimistic update.
        this.dispatch = state => this.vm.$dispatch(state);
        this.dispatchState = state => {
            this.setState(state);
            this.vm.$dispatch(state);
        };

        // The VM's initial state was generated server-side and included with the JSX.
        //return window.vmStates.SupportChatComponentVM;

        this.state = {
            messages: []
        };
    }

    componentWillUnmount() {
        this.vm.$destroy();
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
                        React.createElement(SendChatMessageBox, { onAdd: value => this.dispatchState({ Add: { type: 0, text: value, image: "http://lorempixel.com/50/50/cats/" } }) })
                    )
                )
            )
        );
    }
}
export default SupportChatComponent;

var SendChatMessageBox = React.createClass({
    displayName: 'SendChatMessageBox',

    getInitialState() {
        return { message: "" };
    },
    render() {
        const handleAdd = () => {
            if (this.state.message) {
                this.props.onAdd(this.state.message);
                this.setState({ message: "" });
            }
        };
        return React.createElement(
            'footer',
            null,
            React.createElement(
                InputGroup,
                null,
                React.createElement(Input, { placeholder: 'Send a message', id: 'SendSupportMessage', value: this.state.message, onChange: event => this.setState({ message: event.target.value }) }),
                React.createElement(
                    InputGroupButton,
                    null,
                    React.createElement(
                        Button,
                        { color: 'secondary', onClick: handleAdd },
                        'Send'
                    )
                )
            )
        );
    }
});
