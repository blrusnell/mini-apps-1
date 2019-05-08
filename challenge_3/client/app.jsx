
class App extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            state: null
        };
    }


    render() {
        return(
            <div>
                <button>Checkout</button>
                <div>
                    <FormOne/>
                </div>
            </div>
        );
    }
}

const FormOne = (props) => (
    <div className="userInfo">
       <form>
            <label>
            Name:
            <input type="text" name="name"/>
            </label>
            <label>
            Email:
            <input type="text" name="email"/>
            </label>
            <label>
            Password:
            <input type="text" name="password"/>
            </label>
        </form>
    </div>

);

const f2 = (props) => {
    
};

const f3 = (props) => {
    
};


ReactDOM.render(<App /> , document.getElementById('app'));


  