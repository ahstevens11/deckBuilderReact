import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return(
        <div id="app">
            <h1>Hello World</h1>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)