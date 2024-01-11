/* eslint-disable react/destructuring-assignment */
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addtocart } from './CartSlice';

function Addbutton({ item }) {
    const navi = useNavigate();
    const dispatch = useDispatch();
    const addtocartfun = () => {
        console.log(item);
        dispatch(addtocart(item));
        navi("/cart");
    }
    return (
        <div>
            <button className='atc' onClick={() => addtocartfun()}>Add to Cart</button>
        </div>
    )
}

export default Addbutton