import { NavLink } from "react-router-dom";

import landing from './Landing.module.css';

const Landing = () => {
    return (
        <body id={landing.landing}>
            <div className={landing.panelGroup}>
                <div id={landing.leftSide}>
                    <h1>Welcome</h1>
                </div>
                <div id={landing.rightSide}>
                    <div className={landing.formGroup}>
                        <label>
                            If you have an accout click the button below
                        </label>
                       
                        <button className={landing.controlForm}> <NavLink activeClassName="is-active" to="/login">Login</NavLink></button>
                    </div>

                    <div className={landing.formGroup}>
                        <label>
                            If you don’t have an account click the button below
                        </label>
                        <button className={landing.controlForm}><NavLink activeClassName="is-active" to="/register">Register</NavLink></button>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Landing;