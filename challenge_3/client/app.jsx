
class App extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            //changing state to change the forms on the page
            isCheckout: true,
            isf1form: false,
            isf2form: false,
            isf3form: false,
            isConfirmation: false,
            
            //form 1 input state
            name: '',
            email: '',
            password: '',
            
            //form 2 input state
            shippingAddress: '',
            city: '',
            shipState: '',
            zip: '',

            //form 3 input state
            ccNumber: '',
            expiryDate: '',
            cvv: '',
            ccZip: ''

            
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


    render() {
        if (this.state.isCheckout) {
            return <button onClick={this.firstFormRender}>Checkout</button>
        } else
        if (this.state.isf1form) {
            return <div><F1 secondForm={this.secondFormRender} change={this.onChange}/></div>
        } else
        if (this.state.isf2form) {
            return <div><F2 thirdForm={this.thirdFormRender} /></div>
        } else
        if (this.state.isf3form) {
            return <div><F3 confirmRender={this.confirmationRender}/></div>
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
         <input type="text" name="address" value={props.name}/>
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
         <input type="text" name="zip" />
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
         <input type="text" name="zip" />
         </label>
     </form>
 </div>
);

const Confirmation = (props) => (
    <div className="confirmationInfo">
    
    </div>
);



ReactDOM.render(<App /> , document.getElementById('app'));


  