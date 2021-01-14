import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa";

const PaymentMethodInput = (props) => {
    const [paymentValue, setPaymentValue] = useState('')

    const handlePaymentSubmit = (e) =>{
        props.handlePaymentSubmit(paymentValue)
        console.log(paymentValue)
        e.preventDefault();
    }

    return (
        <div>
           <form onSubmit={handlePaymentSubmit}>
                <label>
                
                <select value={paymentValue} onChange={e => setPaymentValue(e.target.value)} className='paymentData'>
                    <option value="">Filter by Payment Method:</option>
                    <option value="cc">CreditCard</option>
                    <option value="money order">Money Order</option>
                    <option value="paypal">Paypal</option>
                </select>
                </label>
                <input type="submit" value="Submit" />
            </form> 
        </div>
    )
}

export default PaymentMethodInput;
