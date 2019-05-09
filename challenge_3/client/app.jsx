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
            address: '',
            city: '',
            state: '',
            zip: '',

            //form 3 input state
            cardNumber: '',
            expiry: '',
            cvv: '',
            cczip: ''

            
        };

        this.firstFormRender = this.firstFormRender.bind(this);
        this.secondFormRender = this.secondFormRender.bind(this);
        this.thirdFormRender = this.thirdFormRender.bind(this);
        this.confirmationRender = this.confirmationRender.bind(this);
        this.purchaseRender = this.purchaseRender.bind(this);
        this.onChange = this.onChange.bind(this);
        
    }

    //handles input change in forms
    onChange(e) {
        this.setState({
        [e.target.name]: e.target.value
        });
    }
        

    firstFormRender () {
        this.setState({
            isCheckout: false,
            isf1form: true,
        
        })
    }

    secondFormRender() {
        this.setState({
            isf1form: false,
            isf2form: true,
        })
    }

    thirdFormRender() {
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

            //reset state
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
            cczip: ''
        })

        //make post request
        axios.post('/', this.state)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
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
            return <div><Confirmation purchaseRender={this.purchaseRender}/></div>
        }
    }
}

//form 1 component
const F1 = (props) => (
    <div className="userInfo">
       <form>
            <label>
            Name:
            <input type="text" name="name" onChange={(e) => props.change(e)} />
            </label>
            <label>
            Email:
            <input type="text" name="email" onChange={(e) => props.change(e)} />
            </label>
            <label>
            Password:
            <input type="text" name="password" onChange={(e) => props.change(e)} />
            </label>
        </form>
        <button onClick={props.secondForm}>Next</button>
    </div>

);

//form 2 component
const F2 = (props) => (
    <div className="shippingInfo">
    <form>
         <label>
         Shipping Address:
         <input type="text" name="address" onChange={(e) => props.change(e)} />
         </label>
         <label>
         City:
         <input type="text" name="city" onChange={(e) => props.change(e)} />
         </label>
         <label>
         State:
         <input type="text" name="state" onChange={(e) => props.change(e)} />
         </label>
         <label>
         Zip Code:
         <input type="text" name="zip" onChange={(e) => props.change(e)} />
         </label>
     </form>
     <button onClick={props.thirdForm}>Next</button>
 </div>
);

//form 3 component
const F3 = (props) => (
    <div className="cardInfo">
    <form>
         <label>
         Credit Card Number:
         <input type="text" name="cardNumber" onChange={(e) => props.change(e)} />
         </label>
         <label>
         Expiration Date:
         <input type="text" name="expiry" onChange={(e) => props.change(e)} />
         </label>
         <label>
         CVV:
         <input type="text" name="cvv" onChange={(e) => props.change(e)} />
         </label>
         <label>
         Zip Code:
         <input type="text" name="cczip" onChange={(e) => props.change(e)} />
         </label>
     </form>
     <button onClick={props.confirmRender}>Confirm</button>
 </div>
);


//confirmation page 
const Confirmation = (props) => (
    <div className="confirmationInfo">
        <button onClick={props.purchaseRender}>Purchase</button>
    </div>
);



ReactDOM.render(<App /> , document.getElementById('app'));