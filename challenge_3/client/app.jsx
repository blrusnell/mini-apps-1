
class App extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            isCheckout: true,
            isf1form: false,
            isf2form: false,
            isf3form: false
        };

        this.firstFormRender = this.firstFormRender.bind(this);
        this.secondFormRender = this.secondFormRender.bind(this);
        this.thirdFormRender = this.thirdFormRender.bind(this);
        
    }

    firstFormRender (e) {
        this.setState({
            isCheckout: false,
            isf1form: true
        })
    }

    secondFormRender() {
        this.setState({
            isf1form: false,
            isf2form: true
        })
    }

    thirdFormRender() {
        this.setState({
            isf2form: false,
            isf3form: true
        })
    }


    render() {
        if (this.state.isCheckout) {
            return <button onClick={this.firstFormRender}>Checkout</button>
        } else
        if (this.state.isf1form) {
            return <div><F1 secondForm={this.secondFormRender}/></div>
        } else
        if (this.state.isf2form) {
            return <div><F2/></div>
        } else
        if (this.state.isf3form) {
            return <div><F3/></div>
        }
    }
}

const F1 = (props) => (
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
        <button onClick={props.secondForm}>Next</button>
    </div>

);

const F2 = (props) => (
    <div className="shippingInfo">
    <form>
         <label>
         Shipping Address:
         <input type="text" name="address"/>
         </label>
         <label>
         City:
         <input type="text" name="city"/>
         </label>
         <label>
         State:
         <input type="text" name="state"/>
         </label>
         <label>
         Zip Code:
         <input type="text" name="zip"/>
         </label>
     </form>
     <button onClick={props.thirdFormRender}>Next</button>
 </div>
);

const F3 = (props) => (
    <div className="cardInfo">
    <form>
         <label>
         Credit Card Number:
         <input type="text" name="cardNumber"/>
         </label>
         <label>
         Expiration Date:
         <input type="text" name="expiry"/>
         </label>
         <label>
         CVV:
         <input type="text" name="cvv"/>
         </label>
         <label>
         Zip Code:
         <input type="text" name="zip"/>
         </label>
     </form>
 </div>
);


ReactDOM.render(<App /> , document.getElementById('app'));


  