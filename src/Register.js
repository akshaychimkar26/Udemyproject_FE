/* eslint-disable react/destructuring-assignment */
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';

function Register() {
    const navi = useNavigate();
    const [data, setData] = useState({
        uname: "",
        email: "",
        pass: ""
    })
    const handleInput = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.uname.trim()) {
            alert("Enter Name!\nIt is mandatory!!")
        }
        else if ((!data.email.includes("@"))) {
            alert("Enter valid email address!!")
        }
        else if (!data.pass.trim()) {
            alert("Enter Password!")
        }
        else {
            console.log(data);
            axios.post("https://udemyclone-backend.onrender.com/api/register", data)
                .then((res) => {
                    console.log(res.data);
                    alert(res.data.msg);
                    if (res.data.msg === "User Registered Successfully!") {
                        localStorage.setItem("token", res.data.token);
                        navi("/");
                    }
                })
                .catch(err => console.log(err));
            setData({ uname: "", email: "", pass: "" });
        }
    }
    return (
        <div>
            <div className='rgd'>
                <h3 className='rh'>Sign up and start learning</h3>
                <form>
                    <div className='fgp'>
                        <input type='text' name='uname' id='uname' placeholder='Full name' value={data.uname} onChange={handleInput} />
                    </div>
                    <div className='fgp'>
                        <input type='email' name='email' id='email' placeholder='Email' value={data.email} onChange={handleInput} />
                    </div>
                    <div className='fgp'>
                        <input type='password' name='pass' id='pass' placeholder='Password' value={data.pass} onChange={handleInput} />
                    </div>
                    <div className='fck'>
                        <input className='chk' type='checkbox' />
                    </div>
                    <div className='fcn'>
                        <p>Send me special offers, personalized recommendations, and learning tips.</p>
                    </div>
                    <button className='rst' onClick={handleSubmit}>Sign up</button>
                    <p className='fts'>By signing up, you agree to our Terms of Use and Privacy Policy.</p>
                    <hr />
                    <NavLink to="/login" className="nd"><h4 className='nd'>Already have an account? <span className='lsn'>Log in</span></h4></NavLink>
                </form>
            </div>
            <Footer />
        </div>
    )
}


export default Register