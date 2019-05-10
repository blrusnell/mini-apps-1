import React from 'react';
// import ReactDOM from 'react-dom';
import Board from './board.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }

        this.changePiece = this.changePiece.bind(this);
    };

    changePiece(event) {
        this.setState({
            [event.target.id]: 1,
        });
    }


    render() {

        return(
            <div></div>
        );
    }
}

export default App;




