import React from 'react';
// import ReactDOM from 'react-dom';
import Square from './square.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
    };


    render() {
        return(
            <div className="square">
                <Square x={0} y={0}/>
                <Square x={1} y={0}/>
                <Square x={2} y={0}/>
            </div>
        );
    }
}

export default App;




