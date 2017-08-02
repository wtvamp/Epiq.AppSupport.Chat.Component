import React from 'react';
import ReactDOM from 'react-dom';
import SupportChatComponent from 'SupportChatComponent.jsx';
import $ from 'jquery';

$.connection.hub.url = "http://sayhivm20170801035834.azurewebsites.net/signalr";
//$.connection.hub.url = "http://localhost:53035/signalr";

ReactDOM.render(
    <SupportChatComponent />,
    document.getElementById('Content')
);