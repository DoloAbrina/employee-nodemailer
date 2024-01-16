import { NavLink, useNavigate } from "react-router-dom";
import { useState } from 'react';
import login from './Login.module.css';
import padlock from '../../assets/padlock.png';
import view from '../../assets/view.png';
import envelope from '../../assets/envelope.png';


const Login= () => {
    const navigate = useNavigate();
    var [LoginTasks, setLoginTasks] = useState({
        email: '',
        password: '',
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setLoginTasks(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const Login = async () => {
        if(!LoginTasks.email || !LoginTasks.password) return alert('Please enter all the fields')

        const axios = require('axios');
        const loginData = await axios.post('http://localhost:3030/admin/login', LoginTasks);
        if(loginData.data.result === true){
            localStorage.setItem('UserId', loginData.data.user._id.toString())
            navigate('/home');
        }

        else{
            alert(loginData.data.message);
        }
       
    }
    return (
        <body id={login.login}>

            <div id={login.main}>
                <h1>Login</h1>
                <div id={login.forms}>
                    <div className={login.formGroup}>
                        <img src={envelope} alt="envelope" className={login.icon} />
                        <input type="text" name="email" className={login.controlForm} placeholder="E-mail"
                        value={LoginTasks.email} onChange={handleChange}/>
                    </div>
                    <div className={login.formGroup}>
                        <img src={padlock} alt="padlock" className={login.icon} />
                        <input type="password" name="password" className={login.controlForm} placeholder="Password" 
                        value={LoginTasks.password} onChange={handleChange}/>
                        <img src={view} alt="View" id={login.view} className={login.icon} />
                    </div>

                    <div className={login.formGroup}>
                        <button className={login.btn} onClick={Login} >Login </button>
                    </div>
                    <div className="reg">
                        <p>Don’t have an account? <br /><br /><NavLink activeClassName="is-active" to="/register">Register</NavLink></p>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Login;