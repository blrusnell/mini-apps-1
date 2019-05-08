
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
                    <F1/>
                </div>
                <div>
                    <F2/>
                </div>
                <div>
                    <F3/>
                </div>
            </div>
        );
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


  