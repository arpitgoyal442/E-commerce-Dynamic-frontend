import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { width } from '@mui/system';
import StripeCheckout from 'react-stripe-checkout';
const backendURL = process.env.REACT_APP_BACKEND;
const makePayment=(token)=>{
    try{
        axios.post(`${backendURL}payment`,{
            token:token,
            amount:100
        })
    }catch(e){
        console.log(e)
    }
}


const PaymentGateway=()=>{
    return <div>
        <StripeCheckout
        stripeKey="pk_test_51Ns4WFSFwU95K8cxI4UCmqxW1DH5NXWMbB3zPhEvqdAmPVoUC0gRf3mu9qMtwYXWMfGCBT3m0s45sSGwy8JyqsVP00hK5GqHK6"
        token={makePayment}
        amount={100}
        />
    </div>

}

export default PaymentGateway







