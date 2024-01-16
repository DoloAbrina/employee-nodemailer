import { NavLink/*, useNavigate */} from "react-router-dom";
import logo from '../../assets/logo.png';
import add from '../../assets/account.png';
import header from'./Header.module.css';

const Header = () => {

    /*const Logout = () => {  
        alert(12)
     }*/
    return (
        <body className={header.header}>
            <header>
                <div class={header.logo}>
                    <img src={logo} alt="Logo" />
                </div>
                <ul> 
                    <li>
                        About
                    </li>

                    <li>
                        Info
                    </li>

                    <li>
                        Contact
                    </li>
                </ul>
                <div class={header.add}>
                    <NavLink activeClassName="is-active" to="/add_employee"><img src={add} alt="Add-Tenant" /></NavLink>
            </div>
                <div class={header.logout}>Logout</div>
            </header>
        </body>
    )
}

export default Header;