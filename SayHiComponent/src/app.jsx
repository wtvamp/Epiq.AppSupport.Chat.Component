import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from 'HelloWorld.jsx';
import $ from 'jquery';

$.connection.hub.url = "http://localhost:53035/signalr";

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('Content')
);