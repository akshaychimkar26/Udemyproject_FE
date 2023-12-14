/* eslint-disable react/destructuring-assignment */
import { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link, NavLink } from 'react-router-dom';
import { Category, SubCategory } from '../helper';

function NavbarCompo() {
  const token = localStorage.getItem("token")
  const [isDropDown, setIsDropDown] = useState(false);
  const [selectOption, setSelectOption] = useState(0);

  const handleDropDown = () => {
    setIsDropDown(!isDropDown)
  }

  const handleSelectOption = (index) => {
    setSelectOption(index);
  }
  // const [loginout, setloginout] = useState(false);

  return (
    <header>
      <div className='logo'>
        <Link to="/" >
          <img src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg' alt='not found' />
        </Link>
      </div>
      <nav onMouseEnter={handleDropDown} onMouseLeave={handleDropDown}>
        <button className='dropDownButton'>Categories</button>
        {isDropDown && (
          <div className='dropDown'>
            <div className='parent'>
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
            <div className='child'>
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
      <div className='searchbar_div'>
        <button><IoIosSearch size={"1.5em"} /></button>
        <input className='searchbar' type='text' placeholder='Search for anything'></input>
      </div>
      <div>
        <h4 className='navbar_mainfont'>Teach on Udemy</h4>
      </div>
      <div>
        <NavLink to={"/cart"}>
          <MdOutlineShoppingCart size={"1.5em"} style={{ margin: "15px 0px 0px 0px" }} />
        </NavLink>
      </div>
      <div className='butdiv_nav'>
        <div className='logbut_nav'>
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
        <div className='logbut_nav signupbut'>
          <NavLink style={{ color: "white", textDecoration: "none" }} to="/register">
            <h5>Sign up</h5>
          </NavLink>
        </div>
      </div>
    </header >
  )
}

export default NavbarCompo