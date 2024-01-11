/* eslint-disable react/destructuring-assignment */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import RatingStars from './Rating';
import { deleteItem } from './CartSlice';
import PaypalPayment from './Payment';

function CartPage() {
    const navi = useNavigate();
    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(false);
    const itemsInCart = useSelector((state) => state.cart.itemsInCart);
    const totalcost = useSelector((state) => state.cart.totalAmount);
    const navigate = () => {
        navi("/");
    }
    const handleDelete = (item) => {
        dispatch(deleteItem(item));
    }
    const buynow = () => {
        alert("Proceed to Payment!");
        setToggle(!toggle);
    }
    return (
        <div>
            <div className='ctdiv'>
                <h1 style={{ textAlign: "left", fontSize: "2.4em" }}>Shopping Cart</h1>
                <h4 style={{ textAlign: "left", marginBottom: "2vh" }}>{itemsInCart.length} Course{itemsInCart.length > 1 && (<span>s</span>)} in Cart</h4>
                {itemsInCart.length > 0 ? (
                    <div>
                        <hr />
                        <div className='ctpdiv'>

                            <div className='ctidiv'>
                                {itemsInCart.map((item, index) => {
                                    return (
                                        <div>
                                            <div className='eci' key={index}>
                                                <div className='ctiimgdiv'>
                                                    <img src={item.image} className='if' alt="not found" />
                                                </div>
                                                <div className='cticdiv'>
                                                    <h4 className='pd'>{item.courseName}</h4>
                                                    <p className='pd'>By {item.creator}</p>
                                                    <div className='rtdiv'>{item.rating}<div><RatingStars rating={item.rating} /></div>(3256)</div>
                                                    <p className='pd'>{item.hrs} total hours . {item.lectures} lectures . All levels</p>
                                                </div>
                                                <div className='rmdiv'>
                                                    <p style={{ color: "blueviolet", textDecoration: "underline", cursor: "pointer" }} onClick={() => handleDelete(item)}>Remove</p>
                                                </div>
                                                <div className='cadiv'>
                                                    <h3>₹{item.offerPrice}</h3>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='tldiv'>
                                <h3>Total:</h3>
                                <h1>₹{totalcost}</h1>
                                {!toggle ? <button onClick={buynow} className='cktbut'>Checkout</button> : ""}
                                {toggle ? <PaypalPayment totalAmount={totalcost} /> : ""}
                                <hr />
                                <h4>Promotions</h4>
                                <input type='text' className='cptxt' placeholder='Enter Coupon' />
                                <button className='cpap'>Apply</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='nicdiv'>
                        <div className='nii'>
                            <img src='https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2.jpg' alt='not found' className='if' />
                        </div>
                        <p>Your Cart is empty. Keep shopping to find a course!</p>
                        <button className='ksg' onClick={navigate}>Keep shopping</button>
                    </div>
                )}

            </div>
            <Footer />
        </div>
    )
}

export default CartPage