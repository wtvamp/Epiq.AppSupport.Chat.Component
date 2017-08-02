import React from 'react';
import dotnetify from 'dotnetify';
import ChatBubble from 'react-chat-bubble';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, 
    Button, InputGroup, InputGroupButton, Input, Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, } from 'reactstrap';

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
        }

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
        return (
            <Row>
                <Col sm="6">
                    <Card>
                        <CardBlock>
                            <CardTitle>
                                Epiq Support Chat
                                <button type="button" className="close" aria-label="Close"><span aria-hidden="true">×</span></button>
                             </CardTitle>
                            <CardSubtitle>App Name Goes Here</CardSubtitle>
                            <CardText>
                                <ChatBubble messages={this.state.messages} />
                            </CardText>
                            <SendChatMessageBox onAdd={value => this.dispatchState({ Add: { type: 0, text: value, image: "http://lorempixel.com/50/50/cats/" }})} />
                        </CardBlock>
                    </Card>
                </Col>
            </Row>

        );
    }
}
export default SupportChatComponent;

var SendChatMessageBox = React.createClass({
    getInitialState() {
        return { message: "" }
    },
    render() {
        const handleAdd = () => {
            if (this.state.message) {
                this.props.onAdd(this.state.message);
                this.setState({ message: "" });
            }
        };
        return (
            <footer>
                <InputGroup>
                    <Input placeholder="Send a message" id="SendSupportMessage" value={this.state.message} onChange={event => this.setState({ message: event.target.value })} />
                    <InputGroupButton><Button color="secondary" onClick={handleAdd}>Send</Button></InputGroupButton>
                </InputGroup>
            </footer>
        );
    }
});