/* eslint-disable react/destructuring-assignment */
import axios from 'axios';
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Login() {
    const [data, setData] = useState({
        email: "",
        pass: ""
    })
    const navi = useNavigate();
    const handleInput = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if ((!data.email.includes("@"))) {
            alert("Enter valid email address!!")
        }
        else if (!data.pass.trim()) {
            alert("Enter Password!")
        }
        else {
            console.log(data);
            axios.post("https://udemyclone-backend.onrender.com/api/login", data)
                .then((res) => {
                    alert(res.data.msg);
                    if (res.data.msg === "User Logged in Successfully!") {
                        localStorage.setItem("token", res.data.token);
                        console.log(res.data.userdetail)
                        navi("/");
                    }
                })
                .catch(err => console.log(err));
            setData({ email: "", pass: "" })
        }
    }
    return (
        <div>
            <div className='rgd'>
                <h3 className='rh'>Log in to your Udemy account</h3>
                <form>
                    <div className='sdd'>
                        <div className='lsp'>
                            <FcGoogle size={"2em"} className='lg' />
                        </div>
                        <h4 className='sph'>Continue with Google</h4>
                    </div>
                    <div className='sdd'>
                        <div className='lsp'>
                            <FaFacebook color='rgb(59,89,152)' size={"2em"} className='lg' />
                        </div>
                        <h4 className='sph'>Continue with Facebook</h4>
                    </div>
                    <div className='sdd'>
                        <div className='lsp'>
                            <FaApple size={"2em"} className='lg' />
                        </div>
                        <h4 className='sph'>Continue with Apple</h4>
                    </div>
                    <div className='fgp'>
                        <input type='email' name='email' id='email' placeholder='Email' value={data.email} onChange={handleInput} />
                    </div>
                    <div className='fgp'>
                        <input type='password' name='pass' id='pass' placeholder='Password' value={data.pass} onChange={handleInput} />
                    </div>

                    <button className='rst' onClick={handleSubmit}>Log in</button>
                    <p style={{ textAlign: "center" }}>or <span className='lsn'>Forgot Password</span></p>
                    <hr />
                    <NavLink to="/register" className="nd"><h4 className='nd'>Dont have an account? <span className='lsn'>Sign up</span></h4></NavLink>
                    <p className='lo'>Log in with your organization</p>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Login