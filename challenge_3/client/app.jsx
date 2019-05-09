
class App extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            //changing state to change the forms on the page
            isCheckout: true,
            isf1form: false,
            isf2form: false,
            isf3form: false,
            isConfirmation: false
            
        };

        this.firstFormRender = this.firstFormRender.bind(this);
        this.secondFormRender = this.secondFormRender.bind(this);
        this.thirdFormRender = this.thirdFormRender.bind(this);
        this.onChange = this.onChange.bind(this);
        
    }

    onChange(e) {
        this.setState({
        [e.target.name]: e.target.value
        });
    }
        

    firstFormRender (e) {
        this.setState({
            isCheckout: false,
            isf1form: true,
        
        })
    }

    secondFormRender(event) {
        console.log(this.state.name)
        this.setState({
            isf1form: false,
            isf2form: true,
            //name: event.target.value
        })
    }

    thirdFormRender() {
        console.log(this.state.name)
        this.setState({
            isf2form: false,
            isf3form: true,
        })
    }


    confirmationRender() {
        this.setState({
            isf3form: false,
            isConfirmation: true
        })
    }

    purchaseRender() {
        this.setState({
            isConfirmation: false,
            isCheckout: true,

            name: '',
            email: '',
            password: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            cardNumber: '',
            expiry: '',
            cvv: '',
            zipCode: '',

        });
    }


    render() {
        if (this.state.isCheckout) {
            return <button onClick={this.firstFormRender}>Checkout</button>
        } else
        if (this.state.isf1form) {
            return <div><F1 secondForm={this.secondFormRender} change={this.onChange}/></div>
        } else
        if (this.state.isf2form) {
            return <div><F2 thirdForm={this.thirdFormRender} change={this.onChange}/></div>
        } else
        if (this.state.isf3form) {
            return <div><F3 confirmRender={this.confirmationRender} change={this.onChange}/></div>
        }
        if (this.state.isConfirmation) {
            return <div><F3 confirmRender={this.confirmationRender} change={this.onChange}/></div>
        }
    }
}

const F1 = (props) => (
    <div className="userInfo">
       <form>
            <label>
            Name:
            <input type="text" name="name" onChange={(e) => props.change(e)} />
            </label>
            <label>
            Email:
            <input type="text" name="email" onChange={(e) => props.change(e)}/>
            </label>
            <label>
            Password:
            <input type="text" name="password" onChange={(e) => props.change(e)}/>
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
         <input type="text" name="address" onChange={(e) => props.change(e)}/>
         </label>
         <label>
         City:
         <input type="text" name="city" onChange={(e) => props.change(e)}/>
         </label>
         <label>
         State:
         <input type="text" name="state" onChange={(e) => props.change(e)}/>
         </label>
         <label>
         Zip Code:
         <input type="text" name="zip" onChange={(e) => props.change(e)}/>
         </label>
     </form>
     <button onClick={props.thirdForm}>Next</button>
 </div>
);

const F3 = (props) => (
    <div className="cardInfo">
    <form>
         <label>
         Credit Card Number:
         <input type="text" name="cardNumber" onChange={(e) => props.change(e)}/>
         </label>
         <label>
         Expiration Date:
         <input type="text" name="expiry" onChange={(e) => props.change(e)}/>
         </label>
         <label>
         CVV:
         <input type="text" name="cvv" onChange={(e) => props.change(e)}/>
         </label>
         <label>
         Zip Code:
         <input type="text" name="zipCode" onChange={(e) => props.change(e)}/>
         </label>
     </form>
 </div>
);

const Confirmation = (props) => (
    <div className="confirmationInfo">
    <button>Purchse</button>
    </div>
);



ReactDOM.render(<App /> , document.getElementById('app'));


  