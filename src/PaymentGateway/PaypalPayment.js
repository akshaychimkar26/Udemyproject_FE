/* eslint-disable react/destructuring-assignment */
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useDispatch } from 'react-redux';
import { resetCart } from '../Cart/Redux/CartSlice';
import { useState } from 'react';

function PaypalPayment({ totalAmount }) {
    console.log(totalAmount)
    const initialOptions = {
        "client-id": "AfhUckdRdJ3UaTY8RUIbJ0nlkmpVCz-wrvCyS3fh0xzCQChJMUDGhFjVn_5apILu2-P3aLc89_haqJeC",
    };
    const [orderID, setOrderID] = useState('');
    console.log(orderID)

    const dispatch = useDispatch();

    const createOrder = (data, actions) => {
        try {
            console.log(data)
            return actions.order
                .create({
                    purchase_units: [
                        {
                            description: "Sunflower",
                            amount: {
                                currency_code: "USD",
                                value: Number(totalAmount),
                            },
                        },
                    ],
                }).then((orderID) => {
                    setOrderID(orderID);
                    return orderID;
                });
        } catch (error) {
            console.error(error);
        }
    };

    const onApprove = async (data, actions) => {
        try {
            return actions.order.capture().then(function (details) {
                console.log(details)
                dispatch(resetCart());
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons
                style={{
                    layout: "vertical",
                    color: 'silver',
                    shape: 'pill',
                }}
                createOrder={createOrder}
                onApprove={onApprove}
            />
        </PayPalScriptProvider>


    )
}

export default PaypalPayment