import React from 'react';
import ReactDOM from 'react-dom';
import ChatComponent from 'ChatComponent.jsx';
//import HelloWorld from 'epiq-appsupport-button-component'
import $ from 'jquery';

$.connection.hub.url = "http://localhost:53035/signalr";

ReactDOM.render(
    <SupportChatComponent />,
    document.getElementById('Content')
);