/* eslint-disable react/destructuring-assignment */
import { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom';
import { Category, SubCategory } from './Catdata';

function Header() {
    const [isDropDown, setIsDropDown] = useState(false);
    const [selectOption, setSelectOption] = useState(0);
    const token = localStorage.getItem("token")
    const handleDropDown = () => {
        setIsDropDown(!isDropDown)
    }

    const handleSelectOption = (index) => {
        setSelectOption(index);
    }

    return (
        <header>
            <div className='log'>
                <Link to="/" >
                    <img src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg' alt='not found' />
                </Link>
            </div>
            <nav onMouseEnter={handleDropDown} onMouseLeave={handleDropDown}>
                <button className='dDB'>Categories</button>
                {isDropDown && (
                    <div className='dD'>
                        <div className='pt'>
                            {Category.map((parent, index) =>
                                <NavLink key={index}
                                    to={`/category/${parent}`}
                                    onMouseEnter={() => handleSelectOption(index)}
                                    onClick={handleDropDown}
                                >
                                    <div>{parent}</div>
                                    <RiArrowRightSLine />
                                </NavLink>
                            )}
                        </div>
                        <div className='cd'>
                            {SubCategory[selectOption].map((child, index) =>
                                <NavLink key={index}
                                    to={`/category/${child}`}
                                    onClick={handleDropDown}
                                >
                                    <div>{child}</div>
                                </NavLink>
                            )}
                        </div>
                    </div>
                )}
            </nav>
            <div className='sbd'>
                <button><IoIosSearch size={"1.5em"} /></button>
                <input className='sbr' type='text' placeholder='Search for anything'></input>
            </div>
            <div>
                <h4 className='nmt'>Teach on Udemy</h4>
            </div>
            <div>
                <NavLink to={"/cart"}>
                    <MdOutlineShoppingCart size={"1.5em"} style={{ margin: "15px 0px 0px 0px" }} />
                </NavLink>
            </div>
            <div className='bdn'>
                <div className='lbn'>
                    {
                        token
                            ? <NavLink onClick={() => { localStorage.clear(); window.location.reload(true) }} style={{ color: "black", textDecoration: "none" }} to="/">
                                <h5>Log Out</h5>
                            </NavLink>
                            : <NavLink style={{ color: "black", textDecoration: "none" }} to="/login">
                                <h5>Log in</h5>
                            </NavLink>
                    }
                </div>
                <div className='lbn sbt'>
                    <NavLink style={{ color: "white", textDecoration: "none" }} to="/register">
                        <h5>Sign up</h5>
                    </NavLink>
                </div>
            </div>
        </header >
    )
}

export default Header