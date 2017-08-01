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
                            <footer>
                                <InputGroup>
                                    <Input placeholder="Send a message" />
                                    <InputGroupButton><Button color="secondary">Send</Button></InputGroupButton>
                                </InputGroup>
                            </footer>
                        </CardBlock>
                    </Card>
                </Col>
            </Row>

        );
    }
}
export default SupportChatComponent;