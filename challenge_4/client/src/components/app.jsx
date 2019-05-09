import React from 'react';
// import ReactDOM from 'react-dom';
import Board from './board.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            square: 'hi'
        }

        this.changePiece = this.changePiece.bind(this);
    };

    changePiece() {
        this.setState({
            square: 1,
        });
    }


    render() {

        return(
            <div>
                {/* <button onClick={this.changePiece}>push</button>
                <div>{this.state.square}</div> */}
                <table >
                    <tr id="row1">
                        <td id="x-0, y-0">Firstname</td>
                        <td id="x-1, y-0">hello</td> 
                        <td id="x-2, y-0">Age</td>
                        <td id="x-3, y-0">Firstname</td>
                        <td id="x-4, y-0">Lastname</td> 
                        <td id="x-5, y-0">Age</td>
                        <td id="x-6, y-0">Age</td>
                    </tr>
                    <tr id="row2">
                        <td id="x-0, y-1">Firstname</td>
                        <td id="x-1, y-1">Lastname</td> 
                        <td id="x-2, y-1">Age</td>
                        <td id="x-3, y-1">Firstname</td>
                        <td id="x-4, y-1">Lastname</td> 
                        <td id="x-5, y-1">Age</td>
                        <td id="x-6, y-1">Age</td>
                    </tr>
                    <tr id="row3">
                        <td id="x-0, y-2">Firstname</td>
                        <td id="x-1, y-2">Lastname</td> 
                        <td id="x-2, y-2">Age</td>
                        <td id="x-3, y-2">Firstname</td>
                        <td id="x-4, y-2">Lastname</td> 
                        <td id="x-5, y-2">Age</td>
                        <td id="x-6, y-2">Age</td>
                    </tr>
                    <tr id="row4">
                        <td id="x-0, y-3">Firstname</td>
                        <td id="x-1, y-3">Lastname</td> 
                        <td id="x-2, y-3">Age</td>
                        <td id="x-3, y-3">Firstname</td>
                        <td id="x-4, y-3">Lastname</td> 
                        <td id="x-5, y-3">Age</td>
                        <td id="x-6, y-3">Age</td>
                    </tr>
                    <tr id="row5">
                        <td id="x-0, y-4">Firstname</td>
                        <td id="x-1, y-4">Lastname</td> 
                        <td id="x-2, y-4">Age</td>
                        <td id="x-3, y-4">Firstname</td>
                        <td id="x-4, y-4">Lastname</td> 
                        <td id="x-5, y-4">Age</td>
                        <td id="x-6, y-4"> Age</td>
                    </tr>
                    <tr id="row6">
                        <td id="x-0, y-5">Firstname</td>
                        <td id="x-1, y-5">Lastname</td> 
                        <td id="x-2, y-5">Age</td>
                        <td id="x-3, y-5">Firstname</td>
                        <td id="x-4, y-5">Lastname</td> 
                        <td id="x-5, y-5">Age</td>
                        <td id="x-6, y-5">Age</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default App;




